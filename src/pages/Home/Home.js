import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Banner />
            <div className='container'>
            </div>
        </>
    );
};

export default Home;