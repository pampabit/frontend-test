import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          BRAND
        </Navbar.Brand>

        <Nav className="justify-content-end">X productos en el carrito</Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
