using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Get_Certified_Online_api.Entities;
using Get_Certified_Online_api.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Get_Certified_Online_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository adminRepository;
        public AdminController(IAdminRepository repository)
        {
            this.adminRepository = repository;
        }

        [HttpPost]
        [Route("AddCourse")]
        public IActionResult AddCourse(Course course)
        {
            try
            {

                adminRepository.AddCourse(course);
                return Ok("Course is Added Successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpPut]
        [Route("EditCourse")]
        public IActionResult EditCourseById(Course course)
        {
            try
            {
                adminRepository.EditCourse(course);
                return Ok("Course edited successfully");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCourseById/{id}")]
        public IActionResult DeleteCourseById(int id)
        {
            try
            {
                adminRepository.DeleteCourse(id);
                return Ok("Course Deleted Succesfully");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        [HttpPost]
        [Route("AddExamToExamlist")]
        public IActionResult AddExam(ExamList exam)
        {
            try
            {

                adminRepository.AddExam(exam);
                return Ok("Exam is Added Successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpPut]
        [Route("EditExam")]
        public IActionResult EditExamById(ExamList exam)
        {
            try
            {
                adminRepository.EditExam(exam);
                return Ok("Done!!!");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteExamById/{id}")]
        public IActionResult DeleteExamById(int id)
        {
            try
            {
                adminRepository.DeleteExam(id);
                return Ok("Exam Deleted Succesfully");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }


        [HttpGet]
        [Route("ViewAllCourse")]
        public IActionResult GetAllCourse()
        {
            try
            {
                List<Course> course = adminRepository.ViewAllCourse();
                return Ok(course);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }
        

        [HttpGet]
        [Route("ViewAllCoursePayment")]
        public IActionResult GetAllCoursePayment()
        {
            try
            {
                List<CoursePayment> coursepayment = adminRepository.ViewAllCoursePayment();
                return Ok(coursepayment);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("ViewAllFeedback")]
        public IActionResult GetAllFeedback()
        {
            try
            {
                List<Feedback> feedbackque = adminRepository.ViewAllFeedback();
                return Ok(feedbackque);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("ViewAllExams")]
        public IActionResult GetAllExam()
        {
            try
            {
                List<ExamList> exam = adminRepository.ViewAllExamList();
                return Ok(exam);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpGet]
        [Route("ViewAllUsers")]

        public IActionResult GetAllUsers()
        {
            try
            {
                List<UsersRegistration> users = adminRepository.ViewAllUsers();
                return Ok(users);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpPost]
        [Route("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete(key: "jwt");
            return Ok(new
            {
                message = "Success"
            });
        }

        [HttpGet]
        [Route("ViewAllCourseDetails")]
        public IActionResult GetAllCourseDetails()
        {
            try
            {
                List<CourseDetail> course = adminRepository.ViewAllCourseDetail();
                return Ok(course);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }
        [HttpPost]
        [Route("AddCourseDetails")]
        public IActionResult AddToCourseDetails(CourseDetail course)
        {
            try
            {

                adminRepository.AddCourseDetails(course);
                return Ok("Details is Added Successfully");
            }

            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpPut]
        [Route("EditCourseDetail")]
        public IActionResult EditCoursedetailById(CourseDetail exam)
        {
            try
            {
                adminRepository.EditCourseDetail(exam);
                return Ok("Done!!!");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCourseDetailById/{id}")]
        public IActionResult DeleteDetailById(int id)
        {
            try
            {
                adminRepository.DeleteCourseDetail(id);
                return Ok("Details Deleted Succesfully");
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }
        //[HttpGet]
        //[Route("ViewAllFeedback_Ans")]
        //public IActionResult GetAllFeedback_Ans()
        //{
        //    try
        //    {
        //        List<FeedbackAn> feedbackans = adminRepository.ViewAllFeedback_Ans();
        //        return Ok(feedbackans);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Content(ex.Message);
        //    }
        //}


        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}



