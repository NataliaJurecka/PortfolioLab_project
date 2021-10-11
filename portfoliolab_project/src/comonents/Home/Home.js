import React from 'react';
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import Contact from './Contact';

function Home() {
    return (
        <>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Contact/>
        </>
    );
}

export default Home;


