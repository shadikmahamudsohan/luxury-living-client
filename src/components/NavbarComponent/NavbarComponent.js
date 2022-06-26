import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import Icon from '../../Image_Icon/icon.png';

const NavbarComponent = () => {
    const [scrolling, isScrolling] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 60) {
            isScrolling(true);
        } else {
            isScrolling(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <Navbar sticky="top" className={`secondary-bg navbar ${scrolling ? "shadow" : "shadow-none"}`} expand="lg">
            <Container fluid className='container mx-auto'>
                <Navbar.Brand as={Link} to="/">
                    <img src={Icon} alt="icon" className="icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link className='text-main-primary fw-bold mx-3 my-3 text-center my-lg-0' href="#">Home</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3 my-3 text-center my-lg-0' href="#">About us</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3 my-3 text-center my-lg-0' href="#">Projects</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3 my-3 text-center my-lg-0' href="#">Contact</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3 my-3 text-center my-lg-0' href="#">Admin</Nav.Link>
                    </Nav>
                    <Link to="/login">
                        <button className='btn btn-main-primary my-3 my-lg-0 py-3 py-lg-2 px-4 w-100'>Login</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;