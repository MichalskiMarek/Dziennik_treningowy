import React, {Component} from 'react';
import './App.css';
import NavbarMain from "../Navbar";
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import AddWorkout from '../AddWorkout';
import AddName from '../AddName';
import {Button, Container} from "reactstrap";
import ShowWorkout from "../ShowWorkout";
import WorkoutKeyBtn from "../WorkoutKeyBtn";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            localStorageUpdated: 0
        }
    }

    nameChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    localStorageChange = () => {
        this.setState({localStorageUpdated: this.state.localStorageUpdated + 1})
    };

    render() {
        return (
            <div>
                <Container fluid>
                    <NavbarMain/>
                </Container>
                <Container>
                    <BrowserRouter>
                        <div>
                            <div className="workoutBtn">
                                <Route exact path={'/'} render={() => {
                                    return (<div>
                                        {Object.keys(localStorage).length ?
                                            <WorkoutKeyBtn/> : null}
                                        <NavLink to={'/add-name'}><Button
                                            className={'addTraining'}>Dodaj
                                            trening</Button></NavLink>
                                    </div>)
                                }}/>
                                <Route path={'/add-name'} render={() => {
                                    return <AddName name={this.state.name}
                                                    nameChangeHandler={this.nameChangeHandler}/>
                                }}/>
                                <Route
                                    path={'/workout/:workoutkey'}
                                    render={(props) => {
                                        return <ShowWorkout
                                            localStorageChange={this.localStorageChange}
                                            {...props}/>
                                    }}/>
                                <Route path={'/add-workout'} render={(props) => {
                                    return <AddWorkout localStorageChange={this.localStorageChange}
                                                       name={this.state.name}
                                                       {...props}
                                    />
                                }}/>
                            </div>
                        </div>
                    </BrowserRouter>
                </Container>
                <footer className={'footerMain'}>
                    <div>&copy; Copyright 2018 WTF. All rights reserved</div>
                </footer>
            </div>
        );
    }
}

export default App;
