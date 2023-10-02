import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import ProgressBar from '../components/ProgressBar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Work />
            <ProgressBar />
            <Footer />
        </div>
    )
}

export default Home;