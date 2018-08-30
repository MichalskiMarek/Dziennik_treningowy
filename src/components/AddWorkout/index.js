import {Component} from "react";
import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Workout from "../Workout";

export default class AddWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise: '',
            series: '',
            reps: '',
            weight: '',
            workoutArr: []
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            workoutArr: [...this.state.workoutArr, {
                exercise: this.state.exercise,
                series: this.state.series,
                reps: this.state.reps,
                weight: this.state.weight
            }],
            exercise: '',
            series: '',
            reps: '',
            weight: ''
        });
    };

    deleteExercise = (index) => {
        const newArr = this.state.workoutArr.filter((el, i) => {
                return i !== index;
            }
        );
        this.setState({workoutArr: newArr})
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler} className={'addWorkoutParent'}>
                    <FormGroup className={'addWorkout'}>
                        <Label for="exercise"/>
                        <Input value={this.state.exercise} type="text" name="exercise" onChange={this.changeHandler} id="exercise"
                               placeholder="Wpisz nazwę ćwiczenia"/>
                        <Label for="series"/>
                        <Input value={this.state.series} type="number" name="series" onChange={this.changeHandler} id="series"
                               placeholder="Wpisz liczbę serii"/>
                        <Label for="reps"/>
                        <Input value={this.state.reps} type="number" name="reps" onChange={this.changeHandler} id="reps"
                               placeholder="Wpisz liczbę powtórzeń"/>
                        <Label for="weight"/>
                        <Input value={this.state.weight } step='0.25' type="number" name="weight" onChange={this.changeHandler} id="weight"
                               placeholder="Wpisz ciężar (kg)"/>
                        <Button style={{
                            marginTop: '10px'
                        }} color={'success'}>Dodaj</Button>
                    </FormGroup>
                </Form>
                <Workout {...this.props} localStorageChange={this.props.localStorageChange} workoutArr={this.state.workoutArr} deleteExercise={this.deleteExercise} name={this.props.name}/>
            </div>
        );
    }
}