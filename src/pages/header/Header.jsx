import React from 'react';
import { useState } from 'react';
import{NavLink} from "react-router-dom"
import "./Header.css";

const Header = () => {

const [email,setEmail] = useState();

  return (
    <>
    <div className='cover'>
     <header className='vessel'>
         <div className='vessel-top'>
            <div className='logoimg'>
             <img src="https://pngimg.com/uploads/netflix/small/netflix_PNG25.png" alt="logoimg"/>
             </div>
             <div className='vessel-top-inner'>
             <select>
                 <option>English</option>
                 <option>Hindi</option>
             </select>
             <NavLink to="/signin" className="signin-btn">
                 Sign In 

             </NavLink>
             </div>
         </div>
         <div className='vessel-content'>
             <h1>Unlimited movies,TV <br></br> shows and more</h1>
             <p>watch anywhere. Cancel anytimes</p>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
             <div className='input-box'>
             <input type="text" placeholder="Email address"/>
            <NavLink to="/login" className="btn-get-started">
              Get Started
             <i className='fas fa-chevron-right btn-icon'></i>
             </NavLink>
             </div>
         </div>

     </header>
     </div>
   
</>
  );
};

export default Header;