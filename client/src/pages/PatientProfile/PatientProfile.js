import React, { Component} from "react";
import NavHome from "../../components/NavHome/NavHome";
import {Container} from "../../components/Grid/Grid";
import withAuth from '../../components/withAuth';

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }

    componentDidMount() {
        fetch("/api/appointments/")
            .then(response => response.json())
            .then(data => {
                this.setState({appointments: data});
            });
    }

    render() {
        return (
            <Container fluid>
                <NavHome />
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
