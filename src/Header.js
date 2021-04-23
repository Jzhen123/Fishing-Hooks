import React, { useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <h1 style={{ fontSize: '6vh' }}>Discount Tackle</h1>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="ps-3">
                    <Link to={'/home/'} style={{ fontSize: '3vh' }} >Home</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to={'/products/'} style={{ fontSize: '3vh' }}>Products</Link>
                        </NavItem>
                        <NavItem className="ps-3">
                        <Link to={'/cart/'} style={{ fontSize: '3vh' }}>Cart</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}


export default Header;