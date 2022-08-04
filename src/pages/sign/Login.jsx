import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Signin = () => {
  return (
    <>
    <div>
        <div className='top-header'>
            <img src="https://pngimg.com/uploads/netflix/small/netflix_PNG25.png" alt="logo"/>
            <button>Sign In</button>
            
        </div>
        <div className='partition'></div>
        <div className='pass-main'>
        <div className='pass-container'>
             <h1>Welcome back!<br></br>
             Joining Netflix is easy.</h1>
             <p>Enter your password and you'll be watching in no time.</p>
           {/* <label>Email</label> */}
           <input type="text" placeholder='Enter Your Password'required />
          
         <p> Forgot your password?</p> 
          
            <NavLink to="/">
           <button>Start</button>
            </NavLink>
           
        </div>
        </div>
    </div>
    </>
  );
};

export default Signin;