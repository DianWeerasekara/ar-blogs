import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
    return(
        <Navbar bg="primary" data-bs-theme="dark" fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Blogs</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/my-blogs'>My Blogs</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars;