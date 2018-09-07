import React from 'react';
import './Action.css';

const action = props => (
    <tr className="">
        <td>{props.title}</td>
        <td>{props.value}</td>
        <td>{props.type}</td>
        <td>{new Date(props.date).toLocaleString()}</td>
    </tr>
);

export default action;