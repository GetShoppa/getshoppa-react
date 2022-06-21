import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import MainContent from '../../components/MainContent';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Info from '../../components/Info';
import React from 'react';


const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <MainContent/>
            <Info/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default LandingPage

