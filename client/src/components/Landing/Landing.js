import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
// import background from '../../images/pexels-photo-159888.jpeg';
const landing = () => {
    return(
        <div className="Landing">
        <div className="Landing__overlay"></div>
            <h2 className="Landing__title">Manage your money and make dreams come true.</h2>
            <p className="Landing__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper, mauris in egestas cursus, sapien enim ultrices urna, elementum finibus nulla quam et mi. Nullam quis enim sem. Aliquam nibh ante, tincidunt nec porta eget, vulputate eu mi.</p>
            <Link className="signup" to="/signup">Sign Up NOW</Link>    
        </div>
    );
}

export default landing;