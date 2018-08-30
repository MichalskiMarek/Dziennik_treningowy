import React, {Component} from 'react';
import './App.css';
import NavbarMain from "../Navbar";
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import AddWorkout from '../AddWorkout';
import AddName from '../AddName';
import {Button, Container, Row, Col} from "reactstrap";
import ShowWorkout from "../ShowWorkout";
import WorkoutKeyBtn from "../WorkoutKeyBtn";
// import Image from '../../img/bg1.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Trening 1',
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
                            <Row>
                                <Col className="workoutBtn">
                                    <Route exact path={'/'} render={() => {
                                        return (<div>
                                            {Object.keys(localStorage).length ?
                                                <WorkoutKeyBtn/> : null}
                                            <NavLink to={'/add-name'}><Button color="success">Dodaj
                                                trening</Button></NavLink>
                                        </div>)
                                    }}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Route path={'/add-name'} render={() => {
                                        return <AddName nameChangeHandler={this.nameChangeHandler}/>
                                    }}/>
                                </Col>
                            </Row>
                            <Container>
                                <Row>
                                    <Col>
                                        <Route
                                            path={'/workout/:workoutkey'}
                                            render={(props) => {
                                                return <ShowWorkout
                                                    localStorageChange={this.localStorageChange}
                                                    {...props}/>
                                            }}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Row>
                                <Col>
                                    <Route path={'/add-workout'} render={(props) => {
                                        return <AddWorkout localStorageChange={this.localStorageChange}
                                                           name={this.state.name}
                                                           {...props}
                                        />
                                    }}/>
                                </Col>
                            </Row>
                        </div>
                    </BrowserRouter>
                </Container>
            </div>

        );
    }
}

export default App;
