import {Component} from "react";
import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {NavLink} from "react-router-dom";

export default class AddName extends Component {
    render() {
        return (
                <Form className={'addNameParent'}>
                    <FormGroup className={'addName'}>
                        <Label for="workout"/>
                        <Input type="text" name="name" id="workout"
                               placeholder="wpisz nazwę treningu" onChange={this.props.nameChangeHandler}/>
                        <NavLink to={'/add-workout'}><Button color={'success'}>Dalej</Button></NavLink>
                    </FormGroup>
                </Form>
        );
    }
}