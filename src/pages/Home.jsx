import React from 'react';
// import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import About from '../components/home/About';

const Home = () => {
    return (
        <>
          {/* <NavBar/> */}
            <NavBar />
            <Hero />
            <About/>
            <Features />
            <Footer/>  

        </>
    );
};

export default Home;