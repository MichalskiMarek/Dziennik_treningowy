import {Component} from "react";
import React from "react";
import Workout from "../Workout";

export default class ShowWorkout extends Component {

    render() {
        return (
            <div>
                <Workout workoutArr={JSON.parse(localStorage.getItem(this.props.match.params.workoutkey))}/>
            </div>
        );
    }
}