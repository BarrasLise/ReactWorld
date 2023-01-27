import React from 'react';
import Countries from "../components/Countries";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
       <div>
            <Logo />
            <Navigation />
            <Countries />
            <Footer />
       </div>
    );
};

export default Home;