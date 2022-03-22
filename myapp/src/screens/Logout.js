import React,{Component} from 'react';
import {Link } from 'react-router-dom';

let url='http://localhost:3000/Login';
let url1='http://localhost:3000/UserHome';


function Logout(){

    const logout=async ()=>{
        await fetch("https://gco-apinew.azurewebsites.net/api/Admin/Logout",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            credentials:'include'
        });

    }
    
        return(
            <div className="App">
                <br />
                
                <br /><br />
                <div>~ G E T    C E R T I F I E D   O N L I N E ~</div> 
                {/* <h2> G E T    C E R T I F I E D   O N L I N E </h2> */}
                <br /><br /><br /><br />
                <div><h2>Are You Sure??</h2>
                <br/><br/><br/><br/>
               <a href={url} ><button className="w-10 btn btn-lg btn-primary" onClick={logout}>Yes</button></a><br/><br/>
                {/* <button className="w-100 btn btn-lg btn-primary" onClick={'/Home'}>No</button> */}
                <a href={url1}><button type="button" className=" w-10 btn btn-lg btn-primary">
          No
     </button></a>
                
                </div>


            </div>
        )
       

}
export default Logout;