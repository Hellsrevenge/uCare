import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientProxies.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";


class PatientProxies extends Component {
    Auth = new AuthHelperMethods();

    render() {
        return (
            <div>
                <NavPatient/>
                <Container fluid>
                    <Row>
                        <Sidebar/>
                        <Col size="8">
                            <Card heading={"Proxies " + this.Auth.getPatient().firstName + " " + this.Auth.getPatient().lastName}>
                                <table className="table">
                                    <thead>
                                    <tr className="table-active">
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="table bg-info">
                                        <td scope="row">Gisele</td>
                                        <td>Bundchen</td>
                                        <td>(310) 555-2134</td>
                                        <td>gisele@yahoo.com</td>
                                    </tr>
                                    <tr className="table bg-info">
                                        <td scope="row">Tom</td>
                                        <td>Hanks</td>
                                        <td>(424)872-1731</td>
                                        <td>handsome@gmail.cpom</td>
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

export default PatientProxies;
