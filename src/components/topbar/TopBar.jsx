import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import "./topbar.css";

const Filler = styled.div`
    height: 70px;
`;

const TopBar = () => {
    return (
        <React.Fragment>
            <Navbar
                collapseOnSelect
                expand='lg'
                bg='dark'
                variant='dark'
                className='mt-1'
                fixed='top'>
                <Container fluid className='ps-5'>
                    <Navbar.Brand href='#home'>WESTSIDE TT CENTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavDropdown
                                title='Services'
                                id='collasible-nav-services'>
                                <NavDropdown.Item>
                                    Schedule & Rates
                                </NavDropdown.Item>
                                <NavDropdown.Item>Lessons</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title='Coaches'
                                id='collasible-nav-coaches'>
                                <NavDropdown.Item>Head Coach</NavDropdown.Item>
                                <NavDropdown.Item>
                                    Associate Coaches
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link>Shop</Nav.Link>
                            </Nav.Item>
                            <NavDropdown
                                title='Events'
                                id='collasible-nav-events'>
                                <NavDropdown.Item>Tournament</NavDropdown.Item>
                                <NavDropdown.Item>Long Pong</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link>Pictures</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>News & Articles</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <NavDropdown
                                title='About'
                                id='collasible-nav-about'>
                                <NavDropdown.Item>
                                    Involvements
                                </NavDropdown.Item>
                                <NavDropdown.Item>About what?</NavDropdown.Item>
                                <NavDropdown.Item>Blah blah</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Contact Us</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>More Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Filler />
        </React.Fragment>
    );
};

export default TopBar;
