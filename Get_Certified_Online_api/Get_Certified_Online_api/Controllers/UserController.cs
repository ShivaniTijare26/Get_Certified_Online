using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Get_Certified_Online_api.Entities;
using Get_Certified_Online_api.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Get_Certified_Online_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize(Roles = "User")]
    public class UserController : Controller
    {
        private readonly IUserRepository userRepository;
        public UserController(IUserRepository repository)
        {
            this.userRepository = repository;
        }

        [HttpPost]
        [Route("Add_User_For_Registration")]
        public IActionResult AddUserRegistration(UsersRegistration userregistration)
        {
            try
            {

                userRepository.Registration(userregistration);
                return Ok("User is Added Successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpPost]
        [Route("Give_FeedBack")]
        public IActionResult AddFeedback(Feedback feedback)
        {
            try
            {

                userRepository.GiveFeedback(feedback);
                return Ok("Feedback is Added Successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpPost]
        [Route("Get_Registered_For_Course")]
        public IActionResult AddToCourseRegistration(CourseRegistration courseregistration)
        {
            try
            {

                userRepository.AddCourseRegistration(courseregistration);
                return Ok("You are Registered for the Course, Thank You");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpPost]
        [Route("Payment_For_Course")]
        public IActionResult AddToCoursePayment(CoursePayment coursepayment)
        {
            try
            {

                userRepository.AddCoursePayment(coursepayment);
                return Ok("Payment is done successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpGet]
        [Route("ViewAllCourse")]
        public IActionResult GetAllCourse()
        {
            try
            {
                List<Course> course = userRepository.ViewAllCourses();
                return Ok(course);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("SearchCourseByName/{CourseName}")]
        public IActionResult FindCourseByName(string CourseName)
        {
            try
            {
                List<Course> courses = userRepository.SearchCourseByName(CourseName);
                return Ok(courses);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("SearchExamByName/{CourseName}")]
        public IActionResult FindExamByName(string CourseName)
        {
            try
            {
                List<ExamList> exam = userRepository.SearchExamByName(CourseName);
                return Ok(exam);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("viewCourseDetailsById/{CourseId}")]
        public IActionResult GetCourseDetailsById(int CourseId)
        {
            try
            {
                CourseDetail coursedetail = userRepository.ViewCourseDetailsbyId(CourseId);
                return Ok(coursedetail);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpPost]
        [Route("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete(key: "jwt");
            return Ok(new
            {
                message = "Success"
            });
        }


        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
