import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaBars, FaUser } from 'react-icons/fa';
import SearchBar from "../SearchBar/SearchBar";
import "./MainNav.css";

function MainNav() {
    const location = useLocation();
    const isHomePath = location.pathname === "/";
    const searchBarClass = "d-flex d-none d-md-block mx-5 z-1" + (isHomePath ? " invisible" : " visible");
    const expand = "md";
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar
                expand={expand}
                className="main_nav"
            >
                <Container>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className="nav_toggle"
                        onClick={() => setShow(!show)}
                    >
                        <FaBars color="white" />
                    </Navbar.Toggle>
                    <Navbar.Brand className="text-white d-flex flex-fill justify-content-start flex-md-grow-0" href="/">wine-searcher</Navbar.Brand>
                    <Container className={searchBarClass}>
                        <SearchBar/>
                    </Container>
                    <Navbar.Brand className="text-white" href="/">
                        <FaUser /> Sign In
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar
                expand={expand}
                className="sub_nav p-0"
            >
                <Navbar.Collapse id="navbarScroll">
                    <Container className="">
                        <Nav className="d-flex justify-content-between">
                            <Nav.Link href="discover" active>Discover</Nav.Link>
                            <Nav.Link href="">Store&Producers</Nav.Link>
                            <Nav.Link href="">News</Nav.Link>
                            <Nav.Link href="">Regions</Nav.Link>
                            <Nav.Link href="">Spirits</Nav.Link>
                            <Nav.Link href="">Grapes</Nav.Link>
                            <Nav.Link href="">Vintages</Nav.Link>
                            <Nav.Link href="">Styles&Pairing</Nav.Link>
                            <Nav.Link href="">Critics&Awards</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
            <Offcanvas
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                show={show}
                onHide={() => setShow(false)}
            >
                <Offcanvas.Header
                    closeButton
                    closeVariant="white"
                    className="main_nav"
                >
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-flex justify-content-between flex-column">
                        <Nav.Link id={`offcanvasNavbarDropdown-expand-${expand}`} href="discover">Discover</Nav.Link>
                        <Nav.Link href="">Store&Producers</Nav.Link>
                        <Nav.Link href="">News</Nav.Link>
                        <Nav.Link href="">Regions</Nav.Link>
                        <Nav.Link href="">Spirits</Nav.Link>
                        <Nav.Link href="">Grapes</Nav.Link>
                        <Nav.Link href="">Vintages</Nav.Link>
                        <Nav.Link href="">Styles&Pairing</Nav.Link>
                        <Nav.Link href="">Critics&Awards</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MainNav;