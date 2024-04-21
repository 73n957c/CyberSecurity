import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../components-css/NavBar.css";

function NavBar(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };
    
    return(
        <Navbar expand="lg" id="navbar" className="navbar-container">
        <img className='logo' src='../Resources/introabout.png'></img>
        <Container className='navMiddle'>
            <Navbar.Brand href="/">
                <span style={{ color: "#FFA800" }}>CYBER</span>5H13LD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div className='navButton-container'>
                        <NavItem
                            to="/"
                            label="HOME"
                            active={activeMenuItem === 0}
                            onClick={() => handleMenuItemClick(0)}
                        />
                        <NavItem
                            to="/education"
                            label="EDUCATION"
                            active={activeMenuItem === 1}
                            onClick={() => handleMenuItemClick(1)}
                        />
                        {/* <NavItem
                            to="/challenge"
                            label="CHALLENGE"
                            active={activeMenuItem === 2}
                            onClick={() => handleMenuItemClick(2)}
                        /> */}
                        <NavItem
                            to="/community"
                            label="COMMUNITY"
                            active={activeMenuItem === 2}
                            onClick={() => handleMenuItemClick(2)}
                        />
                        <NavItem
                            to="/newsinfo"
                            label="NEWS/INFO"
                            active={activeMenuItem === 3}
                            onClick={() => handleMenuItemClick(3)}
                        />
                        <NavItem
                            to="/aboutus"
                            label="ABOUTUS"
                            active={activeMenuItem === 4}
                            onClick={() => handleMenuItemClick(4)}
                        />
                        {/* <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/about/aboutus">ABOUT US</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/about/profile">PROFILE</NavDropdown.Item>
                            <NavDropdown.Item href="/">LOG OUT</NavDropdown.Item>
                        </NavDropdown> */}
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

// NavItem component to handle navigation links
const NavItem = ({ to, label, active, onClick }) => (
    <li>
      <Link
        to={to}
        className={active ? "nav-link active" : "nav-link"}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
);

export default NavBar;