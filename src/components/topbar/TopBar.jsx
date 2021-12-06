import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./topbar.css";

const Filler = styled.div`
    height: 56px;
`;

const ColoredLink = styled(Link)`
    color: #212529;
`;
const TopBar = () => {
    return (
        <React.Fragment>
            <Navbar
                collapseOnSelect
                expand='lg'
                bg='dark'
                variant='dark'
                fixed='top'>
                <Container fluid className='ps-5'>
                    <Link to='/'>
                        <Navbar.Brand href='#home'>
                            WESTSIDE TT CENTER
                        </Navbar.Brand>
                    </Link>
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
                                <NavDropdown.Item>
                                    <ColoredLink to='/coaches/weiwang'>
                                        Head Coach
                                    </ColoredLink>
                                </NavDropdown.Item>

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
                                <NavDropdown.Item>
                                    <ColoredLink to='/tournament'>
                                        Tournament
                                    </ColoredLink>
                                </NavDropdown.Item>
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
