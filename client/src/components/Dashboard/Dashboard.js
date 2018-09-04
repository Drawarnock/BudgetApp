import React, { Component } from 'react';
import './Dashboard.css';
import PlanThumbnail from '../Plans/PlanThumbnail';
import AddPlan from '../Plans/AddPlan';

class Dashboard extends Component {

    state = {
        plans: []
    }

    render() {

        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia risus enim. Donec imperdiet, lacus non dapibus rhoncus, ex mauris fringilla urna, eget viverra enim leo et lectus.";

        return(
            <div className="Dashboard">
                <PlanThumbnail title="My plan" description={description} budget_sum="3021" />
                <PlanThumbnail title="Computer" description={description} budget_sum="123" />
                <AddPlan />
            </div>
        )
    }
}

export default Dashboard;