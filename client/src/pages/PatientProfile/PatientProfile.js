import React, { Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import {Container, Row, Col} from "../../components/Grid/Grid";
import withAuth from '../../components/withAuth';
import Card from "../../components/Card/Card";

const oldmeds = {
    background: "#fcfc9c"
  }
  
const currentmeds = {
    background: "#bdfcb3"
  }

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
            <div>

            <NavPatient />

            <Container fluid>

            <Row>

                <Col size="6">
                <Card>
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
                </Card>
                </Col>

                <Col size="6">
                <Card>
                <div>
                    <h3>Prescription Medications</h3>
                </div>
                <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Dosage</th>
      <th scope="col">Reported Side Effects</th>
    </tr>
  </thead>
  <tbody>
<tr style={currentmeds}>
      <th scope="row">1</th>
      <td>Acetaminophen</td>
      <td>800mg</td>
      <td>N/A</td>
    </tr>
    <tr style={currentmeds}>
      <th scope="row">2</th>
      <td>Dextromethorphan</td>
      <td>500 mg/m²</td>
      <td>Drowsiness, vomitting</td>
    </tr>
    <tr style={oldmeds}>
      <th scope="row">3</th>
      <td>Loratadine </td>
      <td>250 mg/m²</td>
      <td>Upset stomach</td>
    </tr>
  </tbody>
</table>
                </Card>
                </Col>
            </Row>
            
            <Row>

                <Col size="6">
                <Card>
                <div>
                    <h3>Other Data</h3>
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
                </Card>
                </Col>

                <Col size="6">
                <Card>
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
                </Card>
                </Col>
            </Row>
{/* <Card>
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
                </Card> */}

            </Container>
            </div>
        )
    }
}

export default withAuth(PatientProfile);
