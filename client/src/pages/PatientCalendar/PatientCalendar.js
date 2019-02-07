import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientCalendar.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../utils/API";
import Moment from "react-moment";


class PatientCalendar extends Component {
    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }

    componentDidMount() {
        console.log(this.Auth.getPatient());
        API.getAppts(this.Auth.getPatient())
            .then(response => {
                console.log(response);
                this.setState({appointments: response.data})
            })
    }

    render() {
        return (
            <div>
                <NavPatient/>
                <Container fluid>
                    <Row>
                        <Sidebar/>
                        <Col size="8">
                            <Card heading= {"Appointments"}>
                                <Container fluid>
                                    <Row className="row row-header">
                                        <Col size="2"><strong>Date</strong></Col>
                                        <Col size="3"><strong>Reason</strong></Col>
                                        <Col size="2"><strong>Duration</strong></Col>
                                        <Col size="2"><strong>Video Call Link</strong></Col>
                                        <Col size="2"><strong>Doctor</strong></Col>
                                    </Row>
                                    {
                                        this.state.appointments ? (

                                            this.state.appointments.map((item, index) => {
                                                return (
                                                    <Row key={index} className="dark-nav">
                                                        <Col size="2">
                                                            <Moment format="LLLL">{item.date}</Moment>
                                                        </Col>
                                                        <Col size="3">
                                                            {item.subject}
                                                        </Col>
                                                        <Col size="2">
                                                            {item.duration}
                                                        </Col>
                                                        <Col size="2">
                                                            <a href={item.skypeUrl} target="_blank">Call</a>
                                                        </Col>
                                                        <Col size="2">
                                                            {item.Doctor.firstName} {item.Doctor.lastName}, {item.Doctor.doctype}
                                                        </Col>

                                                    </Row>

                                                )
                                            })
                                        ) : null
                                    }
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default PatientCalendar;
