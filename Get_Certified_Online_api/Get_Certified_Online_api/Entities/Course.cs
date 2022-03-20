using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class Course
    {
        public Course()
        {
            CourseDetails = new HashSet<CourseDetail>();
            CoursePayments = new HashSet<CoursePayment>();
            CourseRegistrations = new HashSet<CourseRegistration>();
            Feedbacks = new HashSet<Feedback>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public string Duration { get; set; }
        public decimal? Price { get; set; }
        public string CourseType { get; set; }
        public string Status { get; set; }
        public string CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public virtual ICollection<CourseDetail> CourseDetails { get; set; }
        public virtual ICollection<CoursePayment> CoursePayments { get; set; }
        public virtual ICollection<CourseRegistration> CourseRegistrations { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
    }
}
