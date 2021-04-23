import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.css'; 
import { Link } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false); //  State for mobile view to determine if menu is currently opened or closed 

    const toggle = () => setIsOpen(!isOpen); // Function for Nav bar button to open or close menu

    return (
        <>
            <h1 style={{ fontSize: '6vh' }}>Discount Tackle</h1> {/* Title/Name of Company */}

            {/* Navbar imported from reactstrap */}
            <Navbar color="light" light expand="md">
                <NavbarBrand className="ps-3">
                    <Link to={'/home/'} style={{ fontSize: '3vh' }}>Home</Link> {/* Hyperlink to change view to Home */}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} /> {/* Menu toggle for mobile */}
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to={'/products/'} style={{ fontSize: '3vh' }}>Products</Link> {/* Hyperlink to change view to Products */}
                        </NavItem>
                        <NavItem className="ps-3">
                        <Link to={'/cart/'} style={{ fontSize: '3vh' }}>Cart</Link> {/* Hyperlink to change view to Cart */}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header;