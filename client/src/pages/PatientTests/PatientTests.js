import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientTests.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";


class PatientTests extends Component {
    Auth = new AuthHelperMethods();

    render() {
        return (
            <div>
                <NavPatient/>
                <Container fluid>
                    <Row>
                        <Sidebar/>
                        <Col size="8">
                            <Card heading={"Tests History for " + this.Auth.getPatient().firstName + " " + this.Auth.getPatient().lastName}>
                                <table className="table">
                                    <thead>
                                    <tr className="table-active">
                                        <th scope="col">Date</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Test Type</th>
                                        <th scope="col">Results</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="table bg-info">
                                        <th scope="row">02/12/15</th>
                                        <td>Anemia</td>
                                        <td>Blood cells count</td>
                                        <td>Normal</td>
                                    </tr>
                                    <tr className="table bg-info">
                                        <th scope="row">05/26/14</th>
                                        <td>Pain</td>
                                        <td>Cholesterol</td>
                                        <td>High</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default PatientTests;
