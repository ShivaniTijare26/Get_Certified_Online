
import React from 'react';
import './AdminHome.css';
 import Home from './Home';
 //import Login from './components/Login';
 import {Course} from './Course';
 import Navigation from './layout/Navigation';
import Contact from './Contact';
 import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import { Payment } from './Payment';
import { Feedback } from './Feedback';
import { ExamList } from './ExamList';
import { CourseDetail } from './CourseDetail';
import { Users } from './Users';
import Logout from './Logout';

function App() {
  return (
    <BrowserRouter>
     <div className="App"> 
          
      
       <Navigation/> 

     <Switch>
       <Route exact path="/" component={Home } />
      
       <Route exact  path="/Course" component={Course } />
       <Route exact  path="/CourseDetail" component={CourseDetail } />
       <Route exact  path="/Feedback" component={Feedback } />
       <Route exact  path="/ExamList" component={ExamList } />
    



       <Route exact  path="/Contact" component={Contact } />
       <Route  exact path="/payment" component={Payment}/>
       <Route  exact path="/users" component={Users}/>
       <Route   exact path="/LogOut" component={Logout} />

     </Switch>
     </div>
   </BrowserRouter>
    
  );
}

export default App;
