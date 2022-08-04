import React from 'react'
import './Common.css';


const Common = (props) => {
  return (
    <>
    <div>
        <div className='grey-line'></div>
       
<div className="row">
    <div className="container listItem ">

       <div>
             <h1>{props.title}</h1>
             <p>{props.subtitle}</p>
       </div> 

       <div>
        <img src={props.imgsrc} alt="tv" className='tv'/>
      </div>
    </div>
</div>
    </div>
    </>
  );
};

export default Common;