import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { FaUserTie,FaBaby } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { AiOutlineMan,AiOutlineWoman,AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";


function CollapsibleExample() {
 
  return (
    <div className="Nav-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <NavLink to="/">
            <img
              className="logo"
              src="https://mycart.ai/wp-content/uploads/2019/05/mycart-logo_transparent-background.png"
              alt=""
            />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                Discounts
                <BiRupee size="1.5rem" />
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                Men
                <AiOutlineMan color="black" size='1.3rem' />
              </Nav.Link>
              <Nav.Link href="#pricing">
                Women
                <AiOutlineWoman size="1.3rem" />
              </Nav.Link>
              <Nav.Link href="#pricing">Child <FaBaby size='1.2rem'/></Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">
            <NavLink to="/cart">

                <AiOutlineShoppingCart size="1.7rem" color="black" />
            </NavLink>
              </Nav.Link>
              <Nav.Link href="#deets">
                <FaUserTie size="1.7rem" color="black" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
