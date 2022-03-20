using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class UsersRegistration
    {
        public UsersRegistration()
        {
            CoursePayments = new HashSet<CoursePayment>();
            CourseRegistrations = new HashSet<CourseRegistration>();
            Feedbacks = new HashSet<Feedback>();
        }

        public int RegId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public decimal ContactNo { get; set; }
        public string Dob { get; set; }
        public string UserRole { get; set; }

        public virtual ICollection<CoursePayment> CoursePayments { get; set; }
        public virtual ICollection<CourseRegistration> CourseRegistrations { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
    }
}
