import React from "react";
import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand><img 
                    src="/logo.svg" 
                    width="30"
                    height="30"
                    alt="entre09"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="our jobs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Trainings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                assistance
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>accompaniement</Nav.Link>
                        <Nav.Link>prices</Nav.Link>
                        <Nav.Link>contact</Nav.Link>
                        <Nav.Link>Eng</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}