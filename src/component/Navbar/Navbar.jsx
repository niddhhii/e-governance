import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Notification from '../Notification/Notification';
const Navigation = props => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color="faded" light expand="md" >
				<NavbarBrand href="/">E-Governance</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar}  />
				<Collapse isOpen={!collapsed} navbar >
					<Nav>
						<NavItem>
							<NavLink style={{ color: 'black' }} href="/components/">
								Home
							</NavLink>
						</NavItem>

						<NavItem>
							<Notification />
						</NavItem>
						<NavItem>
							<NavLink style={{ color: 'black' }} href="">
								logout
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
