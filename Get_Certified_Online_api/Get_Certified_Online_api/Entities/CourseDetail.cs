using System;
using System.Collections.Generic;

#nullable disable

namespace Get_Certified_Online_api.Entities
{
    public partial class CourseDetail
    {
        public int DetailsId { get; set; }
        public int? CourseId { get; set; }
        public string VideoLink { get; set; }
        public DateTime UploadedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Status { get; set; }

        public virtual Course Course { get; set; }
    }
}
