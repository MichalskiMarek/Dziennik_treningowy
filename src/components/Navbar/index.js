import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

export default class NavbarMain extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div style={{
                marginBottom: '40px'
            }}>
                <Navbar color="info" light expand="md">
                    <NavbarBrand href="/">WTF</NavbarBrand>

                </Navbar>
            </div>
        );
    }
}