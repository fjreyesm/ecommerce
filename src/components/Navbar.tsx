import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <NavbarBs>
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
