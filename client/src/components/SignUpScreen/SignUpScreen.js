import React from 'react';
import './SignUpScreen.css';

const signUpScreen = () => {
    return(
        <div className="SignUpScreen">
            <a href="/auth/google" className="button button--google">Log in with Google</a>
            <a href="/auth/facebook" className="button button--fb">Log in with Facebook</a>
            <a href="/auth/linkedin" className="button button--linkedin">Log in with Linkedin</a>
            <a href="/auth/twitter" className="button button--twitter">Log in with Twitter</a>
            <span className="or" >OR</span>
            <form className="form">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <input className="button--submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default signUpScreen;