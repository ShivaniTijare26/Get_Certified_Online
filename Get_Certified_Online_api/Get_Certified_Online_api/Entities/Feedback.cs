using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public int RegId { get; set; }
        public string FeedBack1 { get; set; }
        public int Ratings { get; set; }
        public int? CourseId { get; set; }
        public DateTime? Feedbackdate { get; set; }

        public virtual Course Course { get; set; }
        public virtual UsersRegistration Reg { get; set; }
    }
}
