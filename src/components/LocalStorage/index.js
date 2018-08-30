import React, {Component} from 'react';
import '../App/App.css';
import Workout from "../Workout";

export default class LocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: JSON.parse(localStorage.getItem(this.props.arr))
        }
    }

    render() {
        return (
            <div>
                {this.state.workout ? <Workout arr={this.state.workout}/> : null}
            </div>
        );
    }
}


