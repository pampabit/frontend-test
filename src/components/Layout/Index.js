import Container from 'react-bootstrap/Container';
import Header from './Header';

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);
export default Layout;
