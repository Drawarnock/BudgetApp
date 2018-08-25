import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = () => {
    return(
        <nav >
            <div className="nav-wrapper">
            <Link to='/' className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default navbar;