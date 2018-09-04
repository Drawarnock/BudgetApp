import React, { Component } from 'react';
import axios from 'axios';

class NewPlan extends Component {

    state = {
        plan: {
            title: '',
            description: '',
            budget: ''
        }
    }

    onChangeValueHandler = event => {
        console.log(this.state);
        console.log(event.target);
        this.setState({
            plan: {
                ...this.state.plan,
                [event.target.name]: event.target.value
            }
        })

    }

    onSubmitFormHandler = event => {
        event.prevenDefault();
        axios.post('http://localhost:3000/api/plans', this.state.plan)
            .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitFormHandler} method="post" >
                    <label>Plan Title</label>
                    <input value={this.state.plan.title} 
                        onChange={this.onChangeValueHandler} 
                        name="title"
                        type="text" />
                    <label>Plan Description</label>
                    <input value={this.state.plan.description}
                        onChange={this.onChangeValueHandler}
                        name="description"
                        type="text" />
                    <label>Initial Budget</label>
                    <input value={this.state.plan.budget}
                        onChange={this.onChangeValueHandler} 
                        name="budget" 
                        type="text" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default NewPlan;