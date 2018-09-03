import React from 'react';
import './Plan.css';

const plan = () => {
    return(
        <div className="Plan">
            <h3 className="Plan__title">Plan title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia risus enim. Donec imperdiet, lacus non dapibus rhoncus, ex mauris fringilla urna, eget viverra enim leo et lectus.</p>
            <b>Summary: <span style={{color: "green"}}>+ 5203$</span></b>
            <button className="Plan__button">Delete Plan</button>
            <button className="Plan__button">View Plan</button>
        </div>
    )
}

export default plan;