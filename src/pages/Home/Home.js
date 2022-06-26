import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import Banner from './Banner/Banner';
import './Home.css';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Banner />
            <div className='container'>
                <Projects />
            </div>
        </>
    );
};

export default Home;