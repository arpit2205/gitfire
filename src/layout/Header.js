import React, { useState, useContext } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap"

import { Link } from "react-router-dom"

import UserContext from "../context/UserContext"


const Header = () => {

    const context = useContext(UserContext)

    //for toggler
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="navbar-dark" color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">GitFire App</Link>
            </NavbarBrand>

            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>

            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen} >
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink tag={Link} onClick={() => {context.setUser(null)}} className="text-white">LogOut</NavLink>
                            </NavItem>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/signin" className="text-white">SignIn</NavLink>
                                    </NavItem>
                                </>
                            )
                    }


                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header