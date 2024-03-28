import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css'

export default function NavBar() {

    //adds dropdown on hover//

    const [show, setShow] = useState(true);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    //navbar is transparent when it is on top, then becomes white when client scrolls//

    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            if (isTop !== scrolled) {
                setScrolled(isTop);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    return (
        <Navbar
            expand="lg"
            sticky="top"
            className={scrolled ? 'bg-transparent shadow-none' : 'bg-white shadow'}
        >
            <Container>
                <Navbar.Brand>
                    <img src="/logo.svg" width="40" height="40" alt="entre09" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{  marginLeft: '35vh', gap:'5vh', alignItems:"center" }}>
                        <NavDropdown
                            class="nav-links"
                            title={
                                <span className="nav-links">our jobs</span>
                            }
                            id="basic-nav-dropdown"
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Trainings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Assistance
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link class="nav-links" >Accompaniment</Nav.Link>
                        <Nav.Link class="nav-links" >Prices</Nav.Link>
                        <Nav.Link class="nav-links" >Contact</Nav.Link>
                        <Nav.Link class="nav-links" style={{ marginLeft:'30vh' }}>Eng</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}