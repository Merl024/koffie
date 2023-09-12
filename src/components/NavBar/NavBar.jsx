import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Tienda</Nav.Link>
                <NavDropdown title="Sobre Nosotros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2"> Cultivo del café</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cómo preparamos el café</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> Contacto </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
      <CartWidget />
    </Navbar> 
  );
}

export default NavBar;