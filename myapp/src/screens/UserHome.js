import './css/props.css';
import './css/App.css';
import "./css/uifont.css"
import React from 'react';
import Checkout from './Checkout';

import {  Route,NavLink,HashRouter} from 'react-router-dom';

//import "../node_modules/bootstrap/dist/css/bootstrap.css";

//import Header from '/header';
import Sidebar from './sidebar';
import CoursePage from './course';
import HomePage from './home';
import {ExamList} from './ExamList';
import Category from './Category';
import {MyCoursesPage} from './my-courses';

import Logout from './Logout';

function UserHome(){
    return(
       <div className='App flex'>
          <HashRouter>
          <Sidebar/>
          <div className='app-content'>
             <Route exact path="/" component={HomePage}/>
             <Route path="/course/:courseid" component={CoursePage}/>
             <Route path="/Examlist" component={ExamList}/>
             <Route path="/Category" component={Category}/>
             <Route path="/Logout" component={Logout}/>
             
             <Route path="/Checkout" component={Checkout}/>
             <Route path="/my-courses" component={MyCoursesPage}/>
          </div>
          
          </HashRouter>
       </div>
    );
 }
 
  
 


export default UserHome;