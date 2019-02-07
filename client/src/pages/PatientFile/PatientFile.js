import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import List from "../../components/List/List";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientFile.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
//import API from "../utils/API";

//necessary for pulling patient name out of entered email
/*const Auth = new AuthHelperMethods();
var currPatient = Auth.getConfirm().email.split("@")[0];*/


class PatientFile extends Component {
    Auth = new AuthHelperMethods();

    render() {

        return (
            <div>
                <NavPatient/>

                <Container fluid>
                    <Row>
                        <Sidebar/>
                        <Col size="8">
                            <Card heading={"Medical History for " + this.Auth.getPatient().firstName + " " + this.Auth.getPatient().lastName}>
                                <table className="table">
                                    <thead>
                                    <tr className="table-active">
                                        <th scope="col">Date</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">In Person / Video</th>
                                        <th scope="col">Notes</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="table bg-info">
                                        <th scope="row">06/28/15</th>
                                        <td>Rash</td>
                                        <td>In-person</td>
                                        <td>fill in later</td>
                                    </tr>
                                    <tr className="table bg-info">
                                        <th scope="row">05/26/14</th>
                                        <td>Rash</td>
                                        <td>Video</td>
                                        <td>fill in later</td>
                                    </tr>
                                    <tr className="table bg-primary">
                                        <th scope="row">04/13/12</th>
                                        <td>Depressive Episode</td>
                                        <td>Video</td>
                                        <td>done</td>
                                    </tr>
                                    <tr className="table bg-primary">
                                        <th scope="row">04/13/12</th>
                                        <td>Depressive Episode</td>
                                        <td>Video</td>
                                        <td>done</td>
                                    </tr>
                                    <tr className="table bg-primary">
                                        <th scope="row">04/13/12</th>
                                        <td>Depressive Episode</td>
                                        <td>Video</td>
                                        <td>done</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">01/12/10</th>
                                        <td>Headache</td>
                                        <td>Video</td>
                                        <td>done</td>
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

export default PatientFile;



