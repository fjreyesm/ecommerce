import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Store } from "./pages/Store";
import { NavBar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
