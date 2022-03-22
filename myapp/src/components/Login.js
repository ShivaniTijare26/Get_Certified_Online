


// import React, {Component} from 'react';

// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import logo1 from './logo.jpg';
// import { nativeSelectClasses } from '@mui/material';
// // import OwnerHomeComponent from './RestarauntOwnerModule/OwnerHomeComponent';
// let url='https://gco-fend.azurewebsites.net/';
// class Login extends Component{
//   constructor()
//   {
//     super();
//     this.state={
//       emailId:null,
//       password:null,
//       role:null,
//       login:false,
//       token:null,
//     }
//   }
//   login()
//   {
//     //<li><a href='RestaurantUI.js'>Restaurant</a></li>
//     console.warn("form data",this.state);
//     fetch(`https://gco-apinew.azurewebsites.net/api/UserLogin/Login?emailId=${this.state.emailId}&password=${this.state.password}`,{
//       method:"POST",
//       headers:{
//         "Accept":"application/json",
//         "Content-Type":"application/json",
//       // 'Authorization': 'Bearer <token>',
//       // credentials:'include',
//     },
//       body:JSON.stringify(this.state)
//     }).then((resp)=>{
//       resp.json().then((result)=>{
//        console.warn("result",result);
//        //this.setState((a)=>({...a,role:result.role,token:result.token}))
//        //console.log(this.result.role)
//        if(result.role=='Admin')
//        {
//        window.open("http://localhost:3000/AdminHome","_self")
//       // return <OwnerHomeComponent />;
//      // newWindow.my_special_setting=result.userId;
      
//        }
//        else if(result.role=='User')
//        {
//        var newWindow=window.open("http://localhost:3000/UserHome","_self")

//         //  var newWindow=window.open("http://localhost:3000/restaraunts/","_self")
//         //var newWindow.userId=result.userId;
//         newWindow.userId=result.userId;
//         // console.warn("userId is",result.userId);
//        }
//       })
//     })
//   }


//   render(){
//     return (
//       <div>
//           <form >
//           <main className="form-signin"> 
//         <img className="mb-4" src={logo1} alt="login img" width="150" height="50" />
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//         {/* <h1>Login</h1> */}
//         {/* {this.state.token} */}
//         <div className="col-sm-4 offset-sm-3">
            
//             <br/>
//           <input type="email" placeholder="name@example.com"  onChange={(event)=>{this.setState({emailId:event.target.value})}} /><br/><br/>
//           <input type="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} /><br/><br/><div>
//           <button className='btn btn-primary' onClick={()=>{this.login()}}>Login</button><br/><br/>
           
//           <a href={url}><button type="button" className='btn btn-primary'>Home</button></a></div>

//           {/* <View style={{ flexDirection:"row" }}>
//     <View style={styles.buttonStyle}>
//         <Button className='btn btn-primary' onClick={()=>{this.login()}}>Login</Button>
//     </View>
//     <View style={styles.buttonStyle}>
//     <a href={url}><Button type="button" className='btn btn-primary'>Home</Button></a>

//     </View>
// </View> */}
//         </div>
//         </main>
//         </form>
//       </div>
//     )
//   }
// }
// export default Login;




import React, {Component} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo1 from './logo.jpg';
let url='https://gco-fend.azurewebsites.net/';
// import OwnerHomeComponent from './RestarauntOwnerModule/OwnerHomeComponent';

class Login extends Component{
  constructor()
  {
    super();
    this.state={
      emailId:null,
      password:null,
      role:null,
      login:false,
      token:null,
    }
  }
  login()
  {
    <li><a href='RestaurantUI.js'>Restaurant</a></li>
    console.warn("form data",this.state);
    fetch(`https://gco-apinew.azurewebsites.net/api/UserLogin/Login?emailId=${this.state.emailId}&password=${this.state.password}`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
      // 'Authorization': 'Bearer <token>'
    },
      body:JSON.stringify(this.state)
    }).then((resp)=>{
      resp.json().then((result)=>{
       console.warn("result",result);
       //this.setState((a)=>({...a,role:result.role,token:result.token}))
       //console.log(this.result.role)
       if(result.role=='Admin')
       {
       window.open("https://gco-fend.azurewebsites.net/AdminHome","_self")
      // return <OwnerHomeComponent />;
     // newWindow.my_special_setting=result.userId;
      
       }
       else if(result.role=='User')
       {
       var newWindow=window.open("https://gco-fend.azurewebsites.net/UserHome","_self")

        //  var newWindow=window.open("http://localhost:3000/restaraunts/","_self")
        //var newWindow.userId=result.userId;
        newWindow.userId=result.userId;
        // console.warn("userId is",result.userId);
       }
      })
    })
  }


  render(){
    return (
      <div>
        
         <br/>
        <img className="mb-4" src={logo1} alt="login img" width="150" height="50" />
       {/* <h1>Login</h1> */}
        <h1 className="h3 mb-3 fw-normal">Login</h1><br/>
        {/* {this.state.token} */}
        <div>
          <input type="email"   onChange={(event)=>{this.setState({emailId:event.target.value})}} /><br/><br/>
          <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} /><br/><br/>
          <div>
          <button className='btn btn-primary' onClick={()=>{this.login()}}>Login</button><br/><br/>
           
           <a href={url}><button type="button" className='btn btn-primary'>Home</button></a></div>
          {/* <View style={styles.buttonStyle}>
          <Button className='btn btn-primary' onClick={()=>{this.login()}}>Login</Button>
          </View>
          <View style={styles.buttonStyle}>
          <a href={url}><Button type="button" className='btn btn-primary'>Home</Button></a>
          </View> */}
        </div>
        
       
      </div>
    )
  }
}
export default Login;