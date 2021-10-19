import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'



import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>
                            <img
                                alt=""
                                src="./dumbell.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Fitness Gym
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/services'} >Services</Nav.Link>
                                <Nav.Link as={Link} to={'/upcoming'} >Upcoming Events</Nav.Link>
                                <Nav.Link as={Link} to={'/gallery'} >Gallery</Nav.Link>
                                <p className='nameStyle'>{user.displayName}</p>
                                {user.email ? <button onClick={logOut}>Logout</button> :
                                    <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                                }
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            {/* <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </div>
    );
};

export default Header;