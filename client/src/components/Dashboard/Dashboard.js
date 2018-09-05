import React, { Component } from 'react';
import './Dashboard.css';
import PlanThumbnail from '../Plans/PlanThumbnail';
import AddPlan from '../Plans/AddPlan';
import axios from 'axios';

class Dashboard extends Component {

    state = {
        plans: []
    }

    deletePlanHandler = async id => {
        const plans = [...this.state.plans];
        const delIndex = plans.findIndex(plan => plan.id === id);
        plans.splice(delIndex, 1);
        await this.setState({plans: plans});
        await axios.delete('/api/plans/' + id);
    }

    componentDidMount() {
        axios.get('/api/plans/').then(async response => {
            await this.setState({
                plans: this.state.plans.concat(response.data)
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        const plansList = this.state.plans.map(plan => <PlanThumbnail   key={plan._id} title={plan.title} description={plan.description} budget_sum={plan.budget_sum} onDelete={() => this.deletePlanHandler(plan._id) } /> )

        return(
            <div className="Dashboard">
                {plansList}
                <AddPlan />
            </div>
        )
    }
}

export default Dashboard;