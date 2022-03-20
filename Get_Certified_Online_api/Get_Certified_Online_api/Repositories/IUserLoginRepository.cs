using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Get_Certified_Online_api.Entities;

namespace Get_Certified_Online_api.Repositories
{
    public interface IUserLoginRepository
    {
        UsersRegistration ValidateUser(string emailId, string password);
        void AddUser(UsersRegistration user);
        UsersRegistration GetUserByEmailId(string emailId);
    }
}
