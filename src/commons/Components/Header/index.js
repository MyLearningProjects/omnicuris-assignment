import React, {
    useState
}                   from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className='header'>
            <Navbar color="dark" light expand="md" className="fixed-top">
                <NavbarBrand href="/">Omnicuris</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/courses">Courses</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}
