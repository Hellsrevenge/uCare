import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientMedications.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";


class PatientMedications extends Component {
    Auth = new AuthHelperMethods();

    render() {
        return (
            <div>
                <NavPatient/>
                <Container fluid>
                    <Row>
                        <Sidebar/>
                        <Col size="8">
                            <Card heading={"Medications for " + this.Auth.getPatient().firstName + " " + this.Auth.getPatient().lastName}>
                                <table className="table">
                                    <thead>
                                    <tr className="table-active">
                                        <th scope="col">Date</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Refils</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="table-primary">
                                        <th scope="row">08/21/18</th>
                                        <td>Diarrhea</td>
                                        <td>Loperamide</td>
                                        <td>2</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">05/11/18</th>
                                        <td>Depression</td>
                                        <td>RedLabel</td>
                                        <td>0.75</td>
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

export default PatientMedications;
