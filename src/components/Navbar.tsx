import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <NavbarBs sticky="top">
      <Container>
        <Nav className="me-auto">
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
        <Button
          style={{
            width: "4.5em",
            height: "4em",
            verticalAlign: "middle",
            fill: "currentColor",
            overflow: "hidden",
            position: "relative",
          }}
          variant="online-primary"
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.762786 782.070847a240.197531 240.197531 0 1 0 328.461675-350.560043 240.197531 240.197531 0 1 0-328.461675 350.560043Z"
              fill="#E9EAEB"
            />
            <path
              d="M158.024691 619.45679h37.925926v25.283951h-37.925926zM246.518519 619.45679h37.925925v25.283951h-37.925925zM208.592593 657.382716h25.28395v37.925926h-25.28395zM208.592593 568.888889h25.28395v37.925926h-25.28395zM199.844346 269.021235l25.031111-25.01847 17.875753 17.875754-25.031111 25.031111zM263.054222 205.811358l25.031111-25.018469 17.875753 17.875753-25.031111 25.031111zM263.054222 261.878519l17.875753-17.875754 25.031111 25.031112-17.888395 17.875753zM199.844346 198.668642l17.875753-17.875753 25.031111 25.031111-17.888395 17.875753zM840.691358 126.419753h25.283951v25.283951h-25.283951zM840.691358 176.987654h25.283951v25.283951h-25.283951zM815.407407 151.703704h25.283951v25.28395h-25.283951zM865.975309 151.703704h25.28395v25.28395h-25.28395zM474.074074 265.481481h-25.283951V139.061728h290.765433v50.567902h-25.283951v-25.283951H474.074074z"
              fill="#BCC0C4"
            />
            <path
              d="M410.864198 303.407407h227.555555v88.493828H410.864198z"
              fill="#E9EAEB"
            />
            <path
              d="M651.061728 391.901235h-25.28395v-75.851852H423.506173v75.851852h-25.283951v-101.135803h252.839506z"
              fill="#2A5082"
            />
            <path
              d="M549.925926 227.555556v75.851851h88.493827v88.493828h164.345679V227.555556z"
              fill="#A3D4FF"
            />
            <path
              d="M815.407407 391.901235h-25.28395V240.197531H562.567901v50.567901h88.493827v101.135803h-25.28395v-75.851852h-88.493827v-101.135803h278.123456z"
              fill="#2A5082"
            />
            <path
              d="M840.691358 429.82716H297.08642l113.777778 265.481482h328.691358c26.548148 0 50.567901-16.434568 58.153086-41.718519l64.474074-195.950617c5.05679-13.906173-7.585185-27.812346-21.491358-27.812346z"
              fill="#FFFFFF"
            />
            <path
              d="M739.555556 707.950617H410.864198v-25.28395h328.691358c21.491358 0 40.454321-13.906173 46.775308-34.133334l64.474074-195.950617c0-1.264198 0-3.792593-1.264197-5.05679-2.528395-2.528395-6.320988-5.05679-8.849383-5.05679H347.654321v-25.283951h493.037037c11.377778 0 22.755556 6.320988 29.076543 15.170371 6.320988 8.849383 7.585185 18.962963 5.05679 27.812345L810.350617 657.382716c-10.11358 30.340741-37.925926 50.567901-70.795061 50.567901z"
              fill="#2A5082"
            />
            <path
              d="M474.074074 467.753086h25.283951v176.987655h-25.283951zM575.209877 467.753086h25.28395v176.987655h-25.28395zM676.345679 467.753086h25.283951v176.987655h-25.283951z"
              fill="#BCC0C4"
            />
            <path
              d="M448.790123 581.530864h278.123457v25.283951H448.790123zM410.864198 505.679012h341.333333v25.283951H410.864198z"
              fill="#BCC0C4"
            />
            <path
              d="M764.839506 796.444444H474.074074c-21.491358 0-39.190123-11.377778-49.303704-32.869135-7.585185-16.434568-97.34321-225.02716-150.439506-347.654321-6.320988-15.17037-21.491358-24.019753-36.661728-24.019753H145.382716v-25.283951h91.022222c26.548148 0 49.303704 15.17037 60.681482 39.190123 91.022222 211.120988 144.118519 335.012346 150.439506 346.390124 5.05679 11.377778 15.17037 17.698765 26.548148 17.698765h290.765432V796.444444z"
              fill="#2A5082"
            />
            <path
              d="M448.790123 859.654321m-37.925925 0a37.925926 37.925926 0 1 0 75.851851 0 37.925926 37.925926 0 1 0-75.851851 0Z"
              fill="#A3D4FF"
            />
            <path
              d="M448.790123 910.222222c-27.812346 0-50.567901-22.755556-50.567901-50.567901s22.755556-50.567901 50.567901-50.567901 50.567901 22.755556 50.567902 50.567901-22.755556 50.567901-50.567902 50.567901z m0-75.851852c-13.906173 0-25.283951 11.377778-25.28395 25.283951s11.377778 25.283951 25.28395 25.283951 25.283951-11.377778 25.283951-25.283951-11.377778-25.283951-25.283951-25.283951z"
              fill="#2A5082"
            />
            <path
              d="M778.745679 859.654321c0 21.491358-16.434568 37.925926-37.925926 37.925926s-37.925926-16.434568-37.925926-37.925926 16.434568-37.925926 37.925926-37.925926c20.22716 0 37.925926 16.434568 37.925926 37.925926z"
              fill="#A3D4FF"
            />
            <path
              d="M740.819753 910.222222c-27.812346 0-50.567901-22.755556-50.567901-50.567901s22.755556-50.567901 50.567901-50.567901 50.567901 22.755556 50.567901 50.567901-22.755556 50.567901-50.567901 50.567901z m0-75.851852c-13.906173 0-25.283951 11.377778-25.283951 25.283951s11.377778 25.283951 25.283951 25.283951 25.283951-11.377778 25.283951-25.283951-11.377778-25.283951-25.283951-25.283951z"
              fill="#2A5082"
            />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1rem",
              height: "1rem",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}