import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(){
  return(
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">    
        <Container>
            <Navbar.Brand href="#home">KOFFIE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Café helado</Nav.Link>
                <Nav.Link href="#link">Cafe caliente</Nav.Link>
                <Nav.Link href="#home">Otros</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      <CartWidget />
    </Navbar> 
  );
}

export default NavBar;