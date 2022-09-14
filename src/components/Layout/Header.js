import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { itemsInCart } from '../../app/slices/cartSlice';

function Header() {
  const cartCount = useSelector(itemsInCart);
  return (
    <Navbar bg="light" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          BRAND
        </Navbar.Brand>

        <Nav className="justify-content-end">
          {cartCount} productos en el carrito
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
