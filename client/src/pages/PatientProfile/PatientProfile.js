import React, { Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import {Container} from "../../components/Grid/Grid";
import withAuth from '../../components/withAuth';
import AuthHelperMethods from "../../components/AuthHelperMethods";

//necessary for pulling patient name out of entered email

const Auth = new AuthHelperMethods();
var currPatient = Auth.getConfirm().email.split("@")[0];

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }
    
    componentDidMount() {
        fetch("/api/appointments/" + currPatient)
            .then(response => response.json())
            .then(data => {
                this.setState({appointments: data});
            });
    }

    render() {
        return (
            <Container fluid>

                <NavPatient />

                {/* <NavHome /> */}
                <div>
                    <h3>Appointments</h3>
                    {
                        this.state.appointments ? (
                            this.state.appointments.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.date} -
                                        {item.subject} -
                                        {item.status} -
                                        {item.duration} -
                                        <a href={item.skypeUrl}>{item.skypeUrl}</a> -
                                        {item.DoctorId} -
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>

            </Container>
        )
    }
}

export default withAuth(PatientProfile);
