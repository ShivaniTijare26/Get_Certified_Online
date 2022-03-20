//import LoginComponent from './LoginComponent';
import React from 'react';
import './App.css';
import './components/AdminHome.css'
import Login from './components/Login'
import Register from './components/Register';
import AdminHome from './components/AdminHome'
import UserHome from './screens/UserHome'
import MainHome from './MainHome';
import Nav from './components/LoginNav';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       {/* <Nav />  */}
        
        {/* <main className="form-signin"> */}
      
       <Switch>
       <Route exact path="/" component={MainHome} />
      <Route exact path="/Login" component={Login} />
       {/* <Route exact path="/" component={Login } /> */}
       <Route exact  path="/Register" component={Register } />
       <Route exact  path="/AdminHome" component={AdminHome } />
       <Route exact  path="/UserHome" component={UserHome } />
       {/* <Route exact  path="/Home" component={Home } /> */}
       </Switch> 
       {/* </main> */}


      {/* <div style={{
      backgroundColor: 'coral', width :'2000px', height:'2000px'
    }} /> */}
    {/* <main className="form-signin">
      <Login />*/}
   
      

    </div>
    </BrowserRouter> 
  
  );
}

export default App;
