import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import NavHome from "../../components/NavHome/NavHome";
import FormAppt from "../../components/FormAppt/FormAppt";

import withAuth from '../../components/withAuth';

class NewAppt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        };
    }

    componentDidMount() {
        fetch("/api/doctors/")
            .then(response => response.json())
            .then(data => {
                this.setState({doctors: data});
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <NavHome/>
                    <FormAppt doctors={this.state.doctors}/>
                </Container>
            </div>
        )
    }
}

export default withAuth(NewAppt);
