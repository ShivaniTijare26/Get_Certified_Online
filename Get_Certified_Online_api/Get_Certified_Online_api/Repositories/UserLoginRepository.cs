using Get_Certified_Online_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Get_Certified_Online_api.Entities;

namespace Get_Certified_Online_api.Repositories
{
    public class UserLoginRepository : IUserLoginRepository
    {
        private readonly GetCertifiedOnline_DbContext db;

        public UserLoginRepository(GetCertifiedOnline_DbContext db)
        {
            this.db = db;
        }
        public void AddUser(UsersRegistration user)
        {
            try
            {

                db.UsersRegistrations.Add(user);
                db.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public UsersRegistration GetUserByEmailId(string emailId)
        {
            try
            {
                UsersRegistration user = db.UsersRegistrations.Where(x => x.EmailId == emailId).First();
                return user;
            }
            catch (Exception)
            {



                throw;
            }
        }

        public UsersRegistration ValidateUser(string emailId, string password)
        {
            try
            {
                var users = db.UsersRegistrations.Where(x => x.EmailId == emailId).ToArray();
                if (users.Any(u => u.Password == password))

                    return db.UsersRegistrations.SingleOrDefault(u => u.EmailId == emailId && u.Password == password);
                else
                    return null;
                //return db.Users.SingleOrDefault(u => u.EmailId == emailId && u.UserPassword == password);

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
