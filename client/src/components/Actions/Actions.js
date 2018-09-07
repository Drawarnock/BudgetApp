import React from 'react';
import Action from './Action';
import './Action.css';

const actions = props => {

    const sumColor = {
        fontWeight: "bold"
    };
    if(props.sum > 0) {
        sumColor.color = "green";
    } else if(props.sum === 0) {
        sumColor.color = "black";
    } else {
        sumColor.color = "red"
    } 
    
    return (
    <div className="Action">
        <table>
            <thead>
                <th>Title</th>
                <th>Money</th>
                <th>Charge Type</th>
                <th>Action Date</th>
            </thead>
            <tbody>
                {props.data.map(action => {
                    return <Action key={action.id} 
                        title={action.title} 
                        date={action.date} 
                        type={action.type} 
                        value={action.value} />
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Summary</td>
                    <td style={sumColor} >{props.sum}</td>
                </tr>
            </tfoot>
        </table>
    </div> );
};

export default actions;