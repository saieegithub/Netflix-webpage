import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Loginpage from './pages/header/Loginpage';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Signin from './pages/sign/Signin';
import Login from './pages/sign/Login';
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route exact path ="/netflixshow" element={<NetflixShow/>}/>
            <Route exact path ="/loginpage" element={<Loginpage/>}/>
            <Route exact path ="/signin" element={<Signin/>}/>
            <Route exact path ="/login" element={<Login/>}/>
            
        </Routes>
    </div>
  );
};

export default Routing;