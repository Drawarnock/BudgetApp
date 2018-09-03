import React, { Component } from 'react';

class NewPlan extends Component {
    render() {
        return(
            <div>
                <form>
                    <label>Plan Title</label><input type="text" />
                    <label>Plan Description</label><input type="text" />
                    <label>Initial Budget</label><input type="text" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default NewPlan;