using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class CourseRegistration
    {
        public int CourseRegId { get; set; }
        public int? CourseId { get; set; }
        public int? RegId { get; set; }
        public string Status { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public DateTime? CourseRegistrationDate { get; set; }

        public virtual Course Course { get; set; }
        public virtual UsersRegistration Reg { get; set; }
    }
}
