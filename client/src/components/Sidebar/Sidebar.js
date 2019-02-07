import {Col, Row} from "../Grid/Grid";
import React, { Component } from "react";
import AuthHelperMethods from '../../components/AuthHelperMethods';

class Sidebar extends Component {
    Auth = new AuthHelperMethods();

    render() {

        return (
            <Col size="2">
                <Row>
                    <Col size="4">
                        <a className="list-group-item" href={"/patient/" + this.Auth.getPatient().id + "/tests"}>
                            <i className="fas fa-vials fa-2x" aria-hidden="true"></i>
                            &nbsp;Tests</a>
                    </Col>
                </Row>
                <Row>
                    <Col size="4">
                        <a className="list-group-item" href={"/patient/" + this.Auth.getPatient().id + "/medications"}>
                            <i className="fas fa-prescription fa-2x" aria-hidden="true"></i>
                            &nbsp;Medications</a>
                    </Col>
                </Row>
                <Row>
                    <Col size="4">
                        <a className="list-group-item" href={"/patient/" + this.Auth.getPatient().id + "/calendar"}>
                            <i className="fas fa-calendar-alt fa-2x" aria-hidden="true"></i>
                            &nbsp;Calendar</a>
                    </Col>
                </Row>
                <Row>
                    <Col size="4">
                        <a className="list-group-item" href={"/patient/" + this.Auth.getPatient().id + "/proxies"}>
                            <i className="fas fa-users-cog fa-2x" aria-hidden="true"></i>
                            &nbsp;Proxies</a>
                    </Col>
                </Row>
                <Row>
                    <Col size="4">
                        <a className="list-group-item" href={"/patient/" + this.Auth.getPatient().id + "/history"}>
                            <i className="fas fa-history fa-2x" aria-hidden="true"></i>
                            &nbsp;Medical History</a>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default Sidebar;

