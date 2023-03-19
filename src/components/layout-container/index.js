import React from "react";
import { Navbar, Nav, NavItem, Container, Footer } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Rick and Morty!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/character">
                Character
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/location">
                Locations
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/episode">
                Episodes
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <p> Projeto Rick and Morty - Disciplina Arquitetura Front End</p>
      </footer>
    </>
  );
};

export default LayoutContainer;
