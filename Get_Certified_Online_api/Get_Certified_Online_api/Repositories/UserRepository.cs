using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Get_Certified_Online_api.Entities;

namespace Get_Certified_Online_api.Repositories
{
    public class UserRepository : IUserRepository
    {
        GetCertifiedOnline_DbContext db = null;
        public UserRepository(GetCertifiedOnline_DbContext db)
        {
            this.db = db;
        }
        public void AddCoursePayment(CoursePayment coursepayment)
        {
            try
            {
                db.CoursePayments.Add(coursepayment);
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddCourseRegistration(CourseRegistration courseregistration)
        {
            try
            {
                db.CourseRegistrations.Add(courseregistration);
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Registration(UsersRegistration userregistration)
        {
            try
            {
                db.UsersRegistrations.Add(userregistration);
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void GiveFeedback(Feedback feedback)
        {
            try
            {
                db.Feedbacks.Add(feedback);
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Course> SearchCourseByName(string CourseName)
        {
            try
            {
                List<Course> courses = db.Courses.Where(i => i.CourseName == CourseName).ToList();
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Course> ViewAllCourses()
        {
            try
            {
                List<Course> course = db.Courses.ToList();
                return course;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public CourseDetail ViewCourseDetailsbyId(int CourseId)
        {
            try
            {
                CourseDetail coursedetail = db.CourseDetails.Find(CourseId);
                return coursedetail;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<ExamList> SearchExamByName(string CourseName)
        {
            try
            {
                List<ExamList> exam = db.ExamLists.Where(i => i.CourseName == CourseName).ToList();
                return exam;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}