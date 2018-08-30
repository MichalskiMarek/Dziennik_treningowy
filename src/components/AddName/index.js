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
                    <Input className={'addNameInput'} type="text" name="name" id="workout"
                           placeholder="Wpisz nazwę treningu" onChange={this.props.nameChangeHandler}/>
                    <NavLink to={'/add-workout'}><Button className={'nextBtn'}>Dalej</Button></NavLink>
                    <NavLink to={'/'}><Button className={'backBtn'}>Wstecz</Button></NavLink>
                </FormGroup>
            </Form>
        );
    }
}