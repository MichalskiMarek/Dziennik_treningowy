import {Component} from "react";
import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";

export default class WorkoutKeyBtn extends Component {

    render() {
        const keysArr = Object.keys(localStorage).map((key, index) => {
            return <NavLink key={index} to={`/workout/${key}`}><Button style={{margin: '5px 0'}} color="warning">{key}</Button></NavLink>
        });
        return (
            <div className={'workoutBtn'}>{keysArr}</div>
        );
    }
}