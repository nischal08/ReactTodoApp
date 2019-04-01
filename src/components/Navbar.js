import React from 'react';
import {Link , NavLink ,withRouter} from 'react-router-dom'

const Navbar = (props) => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="left brand-logo">
					Todo App
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
					<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/About">About</NavLink>	
				</li>
					<li>
					<NavLink to="/Contact">Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default withRouter(Navbar)
