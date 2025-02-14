import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {logo} from  '../Asserts/logo.png'


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="#home" className="text-white">pin-dot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">home</Nav.Link>
            <Nav.Link href="#movies" className="text-white">movies</Nav.Link>
            <Nav.Link href="#anime" className="text-white">Anime</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

