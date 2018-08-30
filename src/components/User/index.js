import {Component} from "react";
import React from "react";
import "./index.css"
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Workout from "../Workout";
import LocalStorage from "../LocalStorage";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise: '',
            series: '',
            reps: '',
            weight: '',
            arr: []
        };
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            arr: [...this.state.arr, {
                exercise: this.state.exercise,
                series: this.state.series,
                reps: this.state.reps,
                weight: this.state.weight
            }]
        })
    };

    componentDidMount() {
        if (localStorage.getItem(this.props.userName)) {
            this.setState({
                arr: JSON.parse(localStorage.getItem(this.props.userName))
            })
        }
    }

    saveToLocal = () => {
        localStorage.setItem(this.props.userName, JSON.stringify(this.state.arr))
    };

    deleteExercise = (index) => {
        const newArr = this.state.arr.filter((el, i) => {
                return i === index ? false : true;
            }
        );

        this.setState({arr: newArr})
        // localStorage.removeItem(this.props.userName);
    };

    render() {
        return (
            <div>
                {this.props.userName}

                <Workout arr={this.state.arr} deleteExercise={this.deleteExercise}/>
                {/*<LocalStorage arr={this.state.arr}/>*/}
                <Button onClick={this.saveToLocal}>Zapisz dziennik</Button>
            </div>
        );
    }
}

export default User;