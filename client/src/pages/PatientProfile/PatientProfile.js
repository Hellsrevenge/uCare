import React, { Component} from "react";
import NavHome from "../../components/NavHome/NavHome";
import {Container} from "../../components/Grid/Grid";

import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from '../../components/withAuth';

class PatientProfile extends Component {
    Auth = new AuthHelperMethods();

    render() {
        return (
            <Container fluid>
                <NavHome />
            </Container>
        )
    }
}

export default withAuth(PatientProfile);
