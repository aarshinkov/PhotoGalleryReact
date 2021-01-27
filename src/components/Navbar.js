import React from 'react';
// import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

function CustomNavbar(props) {
    return (
        <>
            <Navbar bg="success" variant="dark" expand="lg">
                <Navbar.Brand href="/">Photo Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Images</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default CustomNavbar;