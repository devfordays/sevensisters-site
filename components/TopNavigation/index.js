import { Container, Row, Col , Navbar , Nav } from 'react-bootstrap';
import Link from 'next/link';

  export default function TopNavigation(){
   return (
    <Container className="top-nav-wrapper">
      <Navbar sticky="top" expand="md" id="top-navbar">
      <Navbar.Brand href="/" className="header-logo"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav-link">Take A Tour</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">Our Mission</Nav.Link>
            <Nav.Link href="/">FAQ</Nav.Link>
            <Nav.Link href="mailto:info@sevensisters.care">
              <img className="email-button" src="/images/web/icons/social/email.svg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
   )
}
