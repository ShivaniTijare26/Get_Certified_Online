
using Get_Certified_Online_api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Get_Certified_Online_api.Repositories
{
    public interface IAdminRepository
    {
        List<UsersRegistration> ViewAllUsers();
        List<Course> ViewAllCourse();
        List<CourseDetail> ViewAllCourseDetail();
        List<CoursePayment> ViewAllCoursePayment();
        List<ExamList> ViewAllExamList();
        List<Feedback> ViewAllFeedback();
        // List<FeedbackAn> ViewAllFeedback_Ans();


        void AddCourse(Course course);
        void DeleteCourse(int CourseId);
        void EditCourse(Course course);

        void AddExam(ExamList examlist);
        void DeleteExam(int ExamId);
        void EditExam(ExamList examlist);

        void AddCourseDetails(CourseDetail detail);
        void DeleteCourseDetail(int detailId);
        void EditCourseDetail(CourseDetail detail);

    }
}
