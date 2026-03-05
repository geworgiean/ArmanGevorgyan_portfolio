import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Conatact from "./Conatact/Conatact";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero /> 
            <Services />
            <Resume />  
            <Project /> 
            <Skills />
            <Conatact />
        </div>
)};

export default Home;