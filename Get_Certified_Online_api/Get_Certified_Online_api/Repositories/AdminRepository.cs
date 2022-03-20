using Get_Certified_Online_api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Get_Certified_Online_api.Repositories
{
    public class AdminRepository : IAdminRepository

    {
        GetCertifiedOnline_DbContext db = null;
        public AdminRepository(GetCertifiedOnline_DbContext db)
        {
            this.db = db;
        }
        public void AddCourse(Course course)
        {
            try
            {
                db.Courses.Add(course);
                db.SaveChanges();



            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AddCourseDetails(CourseDetail detail)
        {
            try
            {
                db.CourseDetails.Add(detail);
                db.SaveChanges();



            }
            catch (Exception)
            {
                throw;
            }
        }

        public void DeleteCourse(int CourseId)
        {
            try
            {
                Course course = db.Courses.Where(c => c.CourseId == CourseId).FirstOrDefault();
                if (course != null)
                {
                    db.Courses.Remove(course);
                    db.SaveChanges();
                }



            }
            catch (Exception)
            {
                throw;
            }
        }

        public void EditCourse(Course course)
        {
            try
            {
                Course course1 = db.Courses.Where(c => c.CourseId == course.CourseId).FirstOrDefault();
                if (course1 != null)
                {
                    course1.CourseName = course.CourseName;
                    course1.Description = course.Description;
                    course1.Duration = course.Duration;
                    course1.Status = course.Status;
                    course1.ModifiedOn = course.ModifiedOn;
                    course1.Price = course.Price;

                    db.SaveChanges();
                }



            }
            catch (Exception)
            {
                throw;
            }
        }
       


        public List<Course> ViewAllCourse()
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
        public List<CourseDetail> ViewAllCourseDetail()
        {
            try
            {
                List<CourseDetail> coursedetail = db.CourseDetails.ToList();
                return coursedetail;
            }
            catch (Exception)
            {

                throw;
            }


        }
        

        public List<CoursePayment> ViewAllCoursePayment()
        {
            try
            {
                List<CoursePayment> coursepayment = db.CoursePayments.ToList();
                return coursepayment;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //public List<FeedbackAn> ViewAllFeedback_Ans()
        //{
        //    try
        //    {
        //        List<FeedbackAn> feedbackan = db.FeedbackAns.ToList();
        //        return feedbackan;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

        public List<Feedback> ViewAllFeedback()
        {
            try
            {
                List<Feedback> feedbackque = db.Feedbacks.ToList();
                return feedbackque;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<UsersRegistration> ViewAllUsers()
        {
            try
            {
                List<UsersRegistration> usersregistration = db.UsersRegistrations.ToList();
                return usersregistration;
            }
            catch (Exception)
            {

                throw;
            }
        }

       public List<ExamList> ViewAllExamList()
        {
            try
            {
                List<ExamList> examlist = db.ExamLists.ToList();
                return examlist;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void  AddExam(ExamList examlist)
        {
            try
            {
                db.ExamLists.Add(examlist);
                db.SaveChanges();



            }
            catch (Exception)
            {
                throw;
            }
        }

        public void DeleteExam(int ExamId)
        {
            try
            {
                ExamList examlist = db.ExamLists.Where(c => c.ExamId == ExamId).FirstOrDefault();
                if (examlist != null)
                {
                    db.ExamLists.Remove(examlist);
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        public void EditExam(ExamList examlist)
        {
            try
            {
                ExamList exam1 = db.ExamLists.Where(c => c.ExamId == examlist.ExamId).FirstOrDefault();
                if (exam1 != null)
                {

                    exam1.ExamDate = examlist.ExamDate;
                    exam1.Duration = examlist.Duration;


                    db.SaveChanges();
                }



            }
            catch (Exception)
            {
                throw;
            }
        }

        public void DeleteCourseDetail(int detailId)
        {
            try
            {
                CourseDetail detail = db.CourseDetails.Where(c => c.DetailsId == detailId).FirstOrDefault();
                if (detail != null)
                {
                    db.CourseDetails.Remove(detail);
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void EditCourseDetail(CourseDetail detail)
        {
            try
            {
                CourseDetail detail1 = db.CourseDetails.Where(c => c.DetailsId == detail.DetailsId).FirstOrDefault();
                if (detail1 != null)
                {

                    detail1.VideoLink = detail.VideoLink;
                    detail1.UploadedDate = detail.UploadedDate;
                    detail1.ModifiedDate = detail.ModifiedDate;
                    detail1.Status = detail.Status;

                    db.SaveChanges();
                }



            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}