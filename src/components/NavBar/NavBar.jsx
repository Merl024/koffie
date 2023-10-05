import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar(){
  return(
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">    
        <Container>
            <Navbar.Brand as={NavLink} to={'/'}>KOFFIE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to={'/categoria/helado'} className={({isActive}) => isActive ? 'ActiveOption' :'Option' }>Café helado</Nav.Link>
                <Nav.Link as={NavLink} to={'/categoria/caliente'} className={({isActive}) => isActive ? 'ActiveOption' :'Option' }>Cafe caliente</Nav.Link>
                <Nav.Link as={NavLink} to={'/categoria/otros'} className={({isActive}) => isActive ? 'ActiveOption' :'Option' }>Otros</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      <CartWidget />
    </Navbar> 
  );
}

export default NavBar;