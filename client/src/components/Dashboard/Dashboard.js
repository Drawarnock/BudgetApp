import React, { Component } from 'react';
import './Dashboard.css';
import Plan from '../Plans/Plan';
import AddPlan from '../Plans/AddPlan';

class Dashboard extends Component {

    state = {
        plans: []
    }

    render() {
        return(
            <div className="Dashboard">
                <Plan />
                <Plan />
                <AddPlan />
            </div>
        )
    }
}

export default Dashboard;