import React from 'react';
import Common from './Common';
// import'./Common.css';
import tv from '../../images/tv.png';

const Top = () => {
  return (
    <div>
         <Common title="Enjoy on your TV." subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast,Apple TV, Blu-ray players and more." imgsrc={tv}/>
    </div>
  );
};

export default Top;