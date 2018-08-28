import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/auxiliary/auxiliary';

class Navbar extends Component {
    render() {

        let conditionalContent =  (
        <li><Link to="/signup">Sign In</Link> </li>
        )
        if(this.props.authenticated) {
            conditionalContent = (
            <Auxiliary>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a href="/api/logout">Logout</a></li>
            </Auxiliary>
            )
        }
        return(
            <nav >
                <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {conditionalContent}
                </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
      authenticated: state.isAuthenticated
    };
  };

export default connect(mapStateToProps)(Navbar);