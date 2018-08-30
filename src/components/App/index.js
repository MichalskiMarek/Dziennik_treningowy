import React, {Component} from 'react';
import './index.css';
import NavbarMain from "../Navbar";
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import AddWorkout from '../AddWorkout';
import AddName from '../AddName';
import {Button, Container, Row, Col} from "reactstrap";
import ShowWorkout from "../ShowWorkout";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Trening 1'
        }
    }

    nameChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        const keysArr = Object.keys(localStorage).map((key, index) => {
            return <NavLink key={index} to={`/workout/${key}`}><Button style={{margin:'5px 0'}} color="warning">{key}</Button></NavLink>
        });
        return (
            <Container>
                <BrowserRouter>
                    <div>
                        <Row>
                            <Col>
                                <NavbarMain/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="workoutBtn">
                                <Route exact path={'/'} render={() => {
                                    return (<div>
                                        {Object.keys(localStorage).length ?
                                            <div className={'workoutBtn'}>{keysArr}</div> : null}
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
                                            return <ShowWorkout {...props}/>
                                        }}/>
                                </Col>
                            </Row>
                        </Container>
                        <Row>
                            <Col>
                                <Route path={'/add-workout'} render={() => {
                                    return <AddWorkout name={this.state.name}/>
                                }}/>
                            </Col>
                        </Row>
                    </div>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;
