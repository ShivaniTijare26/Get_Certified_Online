import React from 'react';
import { Link,NavLink } from "react-router-dom";
let url='http://localhost:3000/AdminHome';


const Nav=()=>{
    return(
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
                            <NavLink className="nav-link " aria-current="page" exact to="/">Login</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Home">Home</NavLink>
                        </li>
                         
                        
                        
                    </ul>

                </div>
            </div>
            
        </nav>

    )
}
export default Nav;
