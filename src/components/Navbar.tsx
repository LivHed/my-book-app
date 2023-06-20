import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar sticky="top" expand="md">
            <Container>
                <Nav>
                    <Link className='NavbarItem' to="/">Home</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar