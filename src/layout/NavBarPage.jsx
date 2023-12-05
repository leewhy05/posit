import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLogo from "../assets/Postit 1.svg";
import EYE from "../assets/Ellipse 1.svg";
import { Link, Outlet } from "react-router-dom";

const NavBarPage = () => {
  return (
    <div className="bg-light">
      <div className="container mt-3">
        <Navbar expand="lg" className="bg-body-">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/" className="text-decoration-none text-dark">
                <img src={NavLogo} alt={NavLogo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <ul
                className="d-lg-inline-flex gap-4 align-items-center justify-content-end
 fs- list-styled-none"
              >
                <li className="list-unstyled">
                  <Link
                    to="/AllStories"
                    className="text-decoration-none text-dark"
                  >
                    <h4>Stories</h4>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/Contact"
                    className="text-decoration-none text-dark"
                  >
                    <h4>Contact</h4>
                  </Link>
                </li>

                <li className="list-unstyled">
                  <Link
                    to="/SignIn"
                    className="text-decoration-none text-dark w-100"
                  >
                    <h4 className="">Sign In</h4>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <button
                    className="btn btn"
                    style={{ backgroundColor: "#0086B0" }}
                  >
                    <Link
                      to="/SignUp"
                      className="text-decoration-none text-light"
                    >
                      <h4>Get Started</h4>
                    </Link>
                  </button>
                </li>
                <li className="list-unstyled">
                  <Link className="text-decoration-none text-dark d-none d-lg-block scale">
                    <img src={EYE} alt={EYE} />
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBarPage;
