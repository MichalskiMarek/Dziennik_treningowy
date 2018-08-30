import {Component} from "react";
import React from "react";
import {Table, Button} from "reactstrap";
import {NavLink} from 'react-router-dom';

export default class Workout extends Component {
    saveToLocal = () => {
        localStorage.setItem(this.props.name, JSON.stringify(this.props.workoutArr))
    };
    render() {
        const exercise = this.props.workoutArr.map((data, i) => {
            return <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.exercise}</td>
                <td>{data.series}</td>
                <td>{data.reps}</td>
                <td>{data.weight} kg</td>
                <td><Button onClick={() => this.props.deleteExercise(i)}>Usuń</Button></td>
            </tr>
        });
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Ćwiczenie</th>
                        <th>Serie</th>
                        <th>Powtórzenia</th>
                        <th>Ciężar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exercise}
                    </tbody>
                </Table>
                <NavLink to={'/'}><Button color={'primary'} onClick={this.saveToLocal}>Zapisz</Button></NavLink>
            </div>
        );
    }
}

