import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css'
import { Link } from 'react-router-dom';

export default function NavBar() {

    //adds dropdown on hover//

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    ////
    
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

    ////

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={scrolled ? 'bg-transparent shadow-none' : 'bg-white shadow'}
        >
            <Container>
                <Navbar.Brand href="#hero">
                    <Link to="/"><img src="/logo.svg" width="40" height="40" alt="entre09" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'black'}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ gap: '5vh', alignItems: "center", padding: '0' }}>
                        <NavDropdown
                            class="nav-links"
                            title={
                                <span className="nav-links" style={{color:'#BA9B37'}}>Nos métiers</span>
                            }
                            id="basic-nav-dropdown"
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            <NavDropdown.Item >
                                <Link to="/training"><div>Formations</div> </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/assistance"><div>Assistance</div></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/consulting"><div>Consulting</div></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link class="nav-links" ><span class="nav-links"><Link to="/tarifs"  style={{color:'#BA9B37'}}>Tarifs</Link></span></Nav.Link>
                        <Nav.Link class="nav-links" href="#contact" ><span class="nav-links"  style={{color:'#BA9B37'}}>Contact</span></Nav.Link>
                        <Nav.Link class="nav-links" ><span class="nav-links"><Link to="/about"  style={{color:'#BA9B37'}}>À propos</Link></span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}