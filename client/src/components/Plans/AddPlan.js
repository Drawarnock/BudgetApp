import React from 'react';
import './Plan.css';
import { Link } from 'react-router-dom';

const addPlan = () => {
    return(
        <div className="PlanThumbnail PlanThumbnail--new">
            <h3 className="PlanThumbnail__title"><Link to ="/dashboard/new-plan">Add New Plan...</Link></h3>
        </div>
    )
}

export default addPlan;