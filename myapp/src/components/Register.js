
import React,{useState} from 'react';
import Login from './Login';
//import Nav from './components/Nav';
//import {useHistory} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Form from "react-validation/build/form";
//import { SyntheticEvent } from 'react';
let url='https://gco-fend.azurewebsites.net/';
const Register=()=>
{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    //const[password,setPassword]=useState("")
    const[emailId,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[contactNo,setContactNo]=useState("")
    const[dob,setDob]=useState("")
    const[userRole,setUserRole]=useState("")
    const[redirect,setRedirect]=useState(false)

    //const history=useHistory();
    const submit =async (e)=>{
       // e.stopPropagation();
       e.preventDefault();
        await fetch("https://gco-apinew.azurewebsites.net/api/User/Add_User_For_Registration", {
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify({
                firstName,lastName,password,emailId,contactNo,dob,userRole
            })

        });
        
        setRedirect(true);
    }
    if(redirect){
        return <Redirect to="/Login"></Redirect>
    }
    

    //  function signUp()
    // {
    //     let item={firstname,lastname,password,email,contactno,dob}
    //     console.warn(item)
     
    //     let response =  fetch("http://localhost:37879/api/User/Add_User_For_Registration",{
    //         method:'POST',
    //         body:JSON.stringify(item),
    //         headers:{
    //             "Content-Type":'application/json',
    //             "Accept":'application/json'
    //         }
    //     })
    //    response = response.json
    //     //console.warn("result",result)
    //     localStorage.setItem("user-info",JSON.stringify(response))
    //     history.push("/Dummy")

    // }

    return(
        
        <div className="col-sm-10 offset-sm-3">
            <form onSubmit={submit}>
            <main className="form-signin"> 
            <h1 className="h3 mb-3 fw-normal">Registration</h1>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control" placeholder="firstName" required/>
            <br/>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control" placeholder="lastName" required/>
            <br/>
            <input type="text"  value={emailId}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="emailId" required/>

            {/* <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/> */}
            <br/>
             <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" required/>

            <br/>
            <input type="text"  value={contactNo}  onChange={(e)=>setContactNo(e.target.value)} className="form-control" placeholder="contactNo" required/>
            <br/>
           <input type="text" value={dob}  onChange={(e)=>setDob(e.target.value)} className="form-control" placeholder="dob"/> 
           {/* <div className="form-group">
                <label>Login as</label>
                <Form.Control
                  as="select"
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option>Admin</option>
                  <option>User</option>
                  
                </Form.Control>
              </div><br/><br/> */}<br/>
            <input type="text"  value={userRole}  onChange={(e)=>setUserRole(e.target.value)} className="form-control" placeholder="Admin/User" required/>
            <br/><br/>
<div>
            <button  className='btn btn-primary'>Register</button><br/><br/>
            <a href={url}><button type="button" className='btn btn-primary'>Home</button></a></div>
            </main>
            </form>
        </div>
    )
}
export default Register;