using Get_Certified_Online_api.Entities;
using Get_Certified_Online_api.Models;
using Get_Certified_Online_api.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Text;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;


namespace Get_Certified_Online_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : Controller
    {
        private readonly IUserLoginRepository userLoginRepository;



        public UserLoginController(IUserLoginRepository repository)
        {
            this.userLoginRepository = repository;
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string emailId, string password)
        {
            UserLogin model = null;
            UsersRegistration user = userLoginRepository.ValidateUser(emailId, password);
            if (user != null)
            {
                string token = GetToken(user);
                model = new UserLogin() { UserName = user.EmailId, Token = token, Role = user.UserRole };
                return Ok(model);
            }
            else
            {
                model = new UserLogin() { UserName = "", Token = "", Role = "Invalid Role" };
                return Ok("Unthorized");
            }



           // return Ok(model);
        }

        [HttpGet]
        public IActionResult GetUserByEmailId(string emailId)
        {
            try
            {
                UsersRegistration user = userLoginRepository.GetUserByEmailId(emailId);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }

           
        }
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(UsersRegistration user)
        {
            try
            {
                userLoginRepository.AddUser(user);
                return Ok("Your UserName is: " + user.EmailId);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        private string GetToken(UsersRegistration user)
        {
            var _config = new ConfigurationBuilder()
                              .SetBasePath(Directory.GetCurrentDirectory())
                              .AddJsonFile("appsettings.json").Build();
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var expiry = DateTime.Now.AddMinutes(120);
            var securityKey = new SymmetricSecurityKey
        (Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials
        (securityKey, SecurityAlgorithms.HmacSha256);



            //    var token = new JwtSecurityToken(issuer: issuer,
            //audience: audience,



            //expires: DateTime.Now.AddMinutes(120),
            //signingCredentials: credentials);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                   {
                    new Claim(ClaimTypes.Name, user.EmailId.ToString()),
                    new Claim(ClaimTypes.Role, user.UserRole.ToString())
                   }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };



            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }
    }
}
