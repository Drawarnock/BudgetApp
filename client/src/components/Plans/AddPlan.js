import React from 'react';
import './Plan.css';
import { Link } from 'react-router-dom';

const addPlan = () => {
    return(
        <div className="Plan Plan--new">
            <h3 className="Plan__title"><Link to ="/dashboard/new-plan">Add New Plan...</Link></h3>
        </div>
    )
}

export default addPlan;