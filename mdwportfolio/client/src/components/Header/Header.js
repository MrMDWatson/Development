import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../App.css";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">MDW Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Projects">
                <NavDropdown.Item href="/home/quotes">Random Quote</NavDropdown.Item>
                <NavDropdown.Item href="/home/drumpad">Drumpad</NavDropdown.Item>
                <NavDropdown.Item href="/home/calculator">Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/home/clock25+5">25 + 5 Clock</NavDropdown.Item>
                <NavDropdown.Item href="/home/bargraph">Bar Graph</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/home/about">About</Nav.Link>
              <Nav.Link href="/home/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
