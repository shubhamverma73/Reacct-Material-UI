import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Navigation = () => {

	const [open, setOpen] = useState(false);

	const openMenu = (event) => {
		setOpen(event.currentTarget);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<>
			<div>
				<h1>React Material UI Tutorial</h1>
				<Button style={{backgroundColor: "purple", color: "white"}} onClick={openMenu}>Accessibility Menu</Button>
				<Menu open={open} onClose={closeMenu}>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-button"><i className="fa fa-user"></i> Button</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-slider"><i className="fa fa-user"></i> Slider</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-checkbox"><i className="fa fa-user"></i> Checkbox</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-select"><i className="fa fa-user"></i> Select</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-text"><i className="fa fa-user"></i> Text</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-switch"><i className="fa fa-user"></i> Switch</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-box"><i className="fa fa-user"></i> Box</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-grid"><i className="fa fa-user"></i> Grid</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-tab"><i className="fa fa-user"></i> Tab</NavLink>
					</MenuItem>
					<MenuItem onClick={closeMenu}>
						<NavLink className="nav-link" to="/ui-table"><i className="fa fa-user"></i> Table</NavLink>
					</MenuItem>
				</Menu>
			</div>
		</>
	);
}

export default Navigation;