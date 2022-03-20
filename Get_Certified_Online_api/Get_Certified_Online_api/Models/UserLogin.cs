using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Get_Certified_Online_api.Models
{
    public class UserLogin
    {
        public string UserName { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
    }
}
