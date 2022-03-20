import React,{Component} from 'react';
import Logo from './img/logo1.jpg';

function Home(){

    
        return(
            <div className="App">
                <br />
                <img src={Logo} className="logo" alt=""/>
                <br /><br />
                <div>~ G E T    C E R T I F I E D   O N L I N E ~</div> 
                {/* <h2> G E T    C E R T I F I E D   O N L I N E </h2> */}
                <br />
            </div>
        )
    

}
export default Home;