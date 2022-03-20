import React from "react";

import { Link,NavLink } from "react-router-dom";

const Navigation = () => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"> */}
       {/* <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #fde3e9;"> */}
            <div className="container-fluid">
                <a className="navbar-brand" href="/">E-Learning</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Course">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/CourseDetail">CourseDetails</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/payment">Payment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/users">UsersList</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/ExamList">ExamList</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link"  exact to="/Logout">Logout</NavLink>
                        </li>
                        
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        
                    </ul>

                </div>
            </div>
            
        </nav>
    )
}

export default Navigation;