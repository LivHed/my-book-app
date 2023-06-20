import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar sticky="top" expand="md">
            <Container>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/book">Book</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar