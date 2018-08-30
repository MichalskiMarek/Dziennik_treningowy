import {Component} from "react";
import React from "react";
import {Table, Button} from "reactstrap";
import {NavLink} from 'react-router-dom';

export default class Workout extends Component {

    saveToLocal = () => {
        localStorage.setItem(this.props.name, JSON.stringify(this.props.workoutArr));
        this.props.localStorageChange();
    };

    deleteFromLocal = () => {
        localStorage.removeItem((this.props.match.params.workoutkey));
    };

    render() {
        const exercise = this.props.workoutArr.map((data, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.exercise}</td>
                <td>{data.series}</td>
                <td>{data.reps}</td>
                <td>{data.weight} kg</td>
                {window.location.href.indexOf("add-workout") > -1 ?
                    <td><Button onClick={() => this.props.deleteExercise(index)}>Usuń</Button></td> : null}
            </tr>
        });
        return (
            <div>
                <Table className={'workoutTable'}>
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
                {window.location.href.indexOf("add-workout") > -1 ? <NavLink to={'/'}><Button className={'saveWorkout'}
                                                                                              onClick={() => this.saveToLocal()}>Zapisz trening</Button></NavLink> :
                    <NavLink to={'/'}><Button className={'workoutBack'}>Wstecz</Button></NavLink>}
                <NavLink to={'/'}> <Button className={'workoutDel'}
                                           onClick={this.deleteFromLocal}>Usuń</Button></NavLink>
            </div>
        );
    }
}

