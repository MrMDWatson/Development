import React from "react";
import { Button, ButtonGroup, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Matthew Watson</h1>
      <Nav className="landing-page-links">
        <ButtonGroup size="lg">
          <DropdownButton as={ButtonGroup} title="Projects" variant="dark" id="bg-nested-dropdown">
            <Dropdown.Item href="/home/quotes" eventKey="1">Quotes</Dropdown.Item>
            <Dropdown.Item href="/home/drumpad" eventKey="2">Drumpad</Dropdown.Item>
            <Dropdown.Item href="/home/calculator" eventKey="2">Calculator</Dropdown.Item>
            <Dropdown.Item href="/home/clock25+5" eventKey="2">25 + 5 Clock</Dropdown.Item>
            <Dropdown.Item href="/home/bargraph" eventKey="3">Bar Graph</Dropdown.Item>
          </DropdownButton>
          <Button variant="dark" href="/home/about">About</Button>
          <Button variant="dark" href="/home/contact">Contact</Button>

        </ButtonGroup>
      </Nav>
    </div>
  )
}