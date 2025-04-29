import React from 'react';
import NavBar from '../components/home/NavBar';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import About from '../components/home/About';

const Home = () => {
    return (
        <>
            <NavBar />


            <Hero />
            <About/>

            <Features />

        </>
    );
};

export default Home;