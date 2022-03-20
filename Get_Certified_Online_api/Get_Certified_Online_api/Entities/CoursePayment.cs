using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class CoursePayment
    {
        public int PaymentId { get; set; }
        public int? CourseId { get; set; }
        public int? RegId { get; set; }
        public decimal? Amount { get; set; }
        public string ModeOfPayment { get; set; }
        public DateTime? Paiddate { get; set; }

        public virtual Course Course { get; set; }
        public virtual UsersRegistration Reg { get; set; }
    }
}
