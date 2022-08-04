import React from 'react';
import Bottom from './header/Bottom';
import Footer from './header/Footer';
import Header from './header/Header';
import Loginpage from './header/Loginpage';
import Mid from './header/Mid';
import Middle from './header/Middle';
import Top from './header/Top';

const Home = () => {
  return (
    <div>
        <Header/>
        <Top/>
        <Mid/>
        <Middle/>
        <Bottom/>
        <Loginpage/>
        <Footer/>
    </div>
  );
};

export default Home;