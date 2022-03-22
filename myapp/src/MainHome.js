import React,{Component} from 'react';
import Logo from './components/img/logo1.jpg';
let url='https://gco-fend.azurewebsites.net/Login';
let url1='https://gco-fend.azurewebsites.net/Register';

function MainHome(){

    
        return(
            <div className="App">
                <br />
                <img src={Logo} className="logo" alt=""/>
                <br /><br />
                <div>~ G E T    C E R T I F I E D   O N L I N E ~</div> 
                {/* <h2> G E T    C E R T I F I E D   O N L I N E </h2> */}
                <br />
                <div>
                <a href={url}><button type="button" className=" w-10 btn btn-lg btn-primary">Login</button></a> <a href={url1}><button type="button" className=" w-10 btn btn-lg btn-primary">Register</button></a>
                </div>
            </div>
           
        )
    

}
export default MainHome;