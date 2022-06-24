import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import Icon from '../../Image_Icon/icon.png';


const NavbarComponent = () => {
    return (
        <Navbar sticky="top" className='secondary-bg' expand="lg">
            <Container fluid className='container mx-auto'>
                <Navbar.Brand href="#">
                    <img src={Icon} alt="icon" className="icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text-main-primary fw-bold mx-3' href="#">Home</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3' href="#">About us</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3' href="#">Projects</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3' href="#">Contact</Nav.Link>
                        <Nav.Link className='text-main-primary fw-bold mx-3' href="#">Admin</Nav.Link>
                    </Nav>
                    {/* <Button variant="outline-success">Search</Button> */}
                    <Link to="/login">
                        <button className='btn btn-main-primary px-4'>Login</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;