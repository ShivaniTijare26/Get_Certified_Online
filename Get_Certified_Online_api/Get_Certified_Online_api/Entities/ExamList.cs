using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class ExamList
    {
        public int ExamId { get; set; }
        public string ExamDate { get; set; }
        public string CourseName { get; set; }
        public string Duration { get; set; }
    }
}
