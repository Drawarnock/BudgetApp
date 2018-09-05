import React from 'react';
import './Plan.css';

const planThumbnail = props => {
    return(
        <div className="PlanThumbnail">
            <h3 className="PlanThumbnail__title">{props.title}</h3>
            <p>{props.description}</p>
            <b>Summary: <span style={{color: "green"}}>{props.budget_sum}</span></b>
            <button className="PlanThumbnail__button" onClick = {props.onDelete}>Delete Plan</button>
            <button className="PlanThumbnail__button">View Plan</button>
        </div>
    )
}

export default planThumbnail;