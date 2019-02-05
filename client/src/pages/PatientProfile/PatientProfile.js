import React, { Component} from "react";
import NavPatient from "../../components/NavHome/NavHome";
import {Container} from "../../components/Grid/Grid";

import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from '../../components/withAuth';

class PatientProfile extends Component {
    Auth = new AuthHelperMethods();

    render() {
        return (
            <Container fluid>
                <NavPatient />
            </Container>
        )
    }
}

export default withAuth(PatientProfile);
