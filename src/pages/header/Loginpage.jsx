import React, { useState } from 'react';
import './Loginpage.css';
import { NavLink } from 'react-router-dom';

const Loginpage = () => {
// let targetDiv = document.getElementById('ans1');
// const btn = document.getElementById('ques1')
  const [ans1,setans1] = useState(false);
  
    // btn onClick = function (){
    //   if(targetDiv.style.display !== "none"){
    //     targetDiv.style.display = "none";
    //   }else{
    //     targetDiv.style.display = "block";
    //   }
    // }
  

  return (
  
    <div>


        <div className="grey-line"></div>
<div className="row2">
        
        <div className='box'>
        <h1>
                 Frequently Asked Questions
          </h1>
      <div><h3> What is Netflix<button id="ques1" type="button" onClick={() =>setans1(ans1)} className={ans1 ? 'd_block':'d_none'}
      style={{cursor:"pointer"}} ><i className="fa-solid fa-plus"></i></button></h3> </div>
      {/* <div  id="ans1"className='ans_1'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div> */}
      <div><h3> How much does Netflix cost?<button style={{cursor:"pointer"}}><i className="fa-solid fa-plus"></i></button></h3> </div>
      <div><h3> Where can I watch?<button style={{cursor:"pointer"}}><i className="fa-solid fa-plus"></i></button></h3></div>
      <div><h3> How do I cancel?<button style={{cursor:"pointer"}}><i className="fa-solid fa-plus"></i></button></h3></div>
      <div><h3> Is Netflix good for kids?<button style={{cursor:"pointer"}}><i className="fa-solid fa-plus"></i></button></h3></div>
         </div>
    <div className='login-box-para'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="loginBox1">
            <input type="email" placeholder="Email address"/>
            <NavLink to="/login"  className="btn-get-start">
            Get Started
            <i className='fas fa-chevron-right btn-icon'></i>
            </NavLink>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Loginpage;