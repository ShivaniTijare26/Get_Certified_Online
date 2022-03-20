using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Get_Certified_Online_api.Entities;

namespace Get_Certified_Online_api.Repositories
{
    public interface IUserRepository
    {
        void Registration(UsersRegistration userregistration);
        void AddCourseRegistration(CourseRegistration courseregistration);
        void AddCoursePayment(CoursePayment coursepayment);
        List<Course> ViewAllCourses();
        List<Course> SearchCourseByName(string CourseName);
        List<ExamList> SearchExamByName(string CourseName);

        void GiveFeedback(Feedback feedback);

        CourseDetail ViewCourseDetailsbyId(int CourseId);



    }
}
