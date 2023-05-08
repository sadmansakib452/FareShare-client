import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection'
import Feature from '../../components/Feature/Feature'
import Footer from '../../components/Footer/Footer'

function Home(props) {
    return (
        <div>
            <HeroSection/>
            <Feature/>
            <Footer/>
        </div>
    );
}

export default Home;