import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // ✅ make sure this is imported

function Navbars() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Blogs</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/my-blogs">My Blogs</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        {/* ✅ User Dropdown on the right */}
        <Dropdown align="end">
          <Dropdown.Toggle variant="secondary" id="dropdown-user" className="d-flex align-items-center">
            <i className="bi bi-person-circle fs-4"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Logged out!')}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Navbars;
