import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar sticky="top" expand="md">
            <Container>
                <Nav>
                    <Link className='NavbarItem' to="/">Home</Link>
                    <Link className='NavbarItem' to="/book/:id">Book</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar