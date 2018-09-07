import React, { Component } from 'react';
import Graph from '../Graph/Graph';
import Actions from '../Actions/Actions';
import './DetailedPlan.css';
import axios from 'axios';

class DetailedPlan extends Component {
    state = {
        actions: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/api/actions/'+ this.props.match.params.id)
            .then(async response => {
               await this.setState({
                    actions: response.data
                });
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    actionHandler = id => {

    }

    render() {

        const sum = this.state.actions.reduce((total, action) => {
            if( action.type === "debit") {
                return total - action.value;
            } else {
                return total + action.value;
            }
        }, 0)
        return(
            <div className="DetailedPlan">
            <Actions sum={sum} data={this.state.actions} onActionSubmitted={() => this.actionHandler(this.state.actions.id)} />
            <Graph />
            </div>
        );
    }
}

export default DetailedPlan;