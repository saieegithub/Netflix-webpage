import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  return (
    <>
    <div className='signin-main'>
        <div className='signin-inner'>
             <img src="https://pngimg.com/uploads/netflix/small/netflix_PNG25.png" alt="logo"/> 
        </div>
        <div className='signin-container'>
            <div className='signin-box'>
                <div className='signin-box-in'>
                <h1>Sign In</h1>
                <input className='email-in' type="text" placeholder='Email or Phone number' />
                <input className='pass-in' type="text" placeholder=' Password'/>
                <button type="button">Sign In</button>
                <div className='checkbox'>
                    <input type="checkbox"/><p>Remember me</p>
                    <a>Need Help?</a>
                </div>
                </div>
                <div className='signin-box-out'>
                    <div><span>New to Netflix? </span><a> Sign up now.</a></div>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a> Learn more.</a></p>
                </div>

            </div>
        </div>
        <div className='signin-blank'></div>
        <div className='signin-footer'>
      
            <div className='signin-footer-up'></div>
            
                
             <div className="sign-footer-link">Questions <NavLink to ="tel:000-800-040-1843">Call 000-800-040-1843
             </NavLink>  </div>
             <div className="sign-main"> <ul>
                 <li className="link1"><NavLink to
                 ="/">FAQ</NavLink></li>
                 <li className="link2"><NavLink to="/">Help Centre</NavLink></li>
                 <li className="link3"><NavLink to="/">Terms of Use</NavLink></li>
                 <li className="link4"><NavLink to="/">Privacy</NavLink></li>
                 <li className="link5"><NavLink to="/">Cookie Preferences</NavLink></li>
                 <li className="link6"><NavLink to="/">Corporate Information</NavLink></li>
               
             </ul>
             <div  className="signin-dropdown">
             <select name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option> 
             </select>
                 </div>
        </div>
        <div className='signin-end'></div>
    </div>
    </div>   
  
 
   
    
    </>
  );
};

export default Signin;