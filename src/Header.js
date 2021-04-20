import React, { useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <h1>Welcome to Discount Tackle</h1>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="ps-3">
                    <Link to={'/home/'}>Home</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to={'/products/'}>Products</Link>
                        </NavItem>
                        <NavItem className="ps-3">
                        <Link to={'/cart/'}>Cart</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}


export default Header;