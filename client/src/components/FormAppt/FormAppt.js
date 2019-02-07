import React, {Component} from "react";
import "./FormAppt.css";
import Card from "../../components/Card/Card";
import {Col, Row, Container} from "../../components/Grid/Grid";
import CalendarAppt from "../../components/CalendarAppt/CalendarAppt"
import { withRouter } from 'react-router';
import AuthHelperMethods from "../AuthHelperMethods";


const testcontainer = { 
    display: "flex"
  }


class Form extends Component {
    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
            patient_id: this.Auth.getPatient().id,
            reason: "",
            type: "",
            doctor_id: "",
            date: "",
            duration: ""
        };
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        fetch('/api/appointments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }).then(data => {
            this.props.history.replace("/patient");
            console.log(data);

        });

        this.setState({
            reason: "",
            type: "",
            doctor_id: "",
            date: ""
        });
    };

    calendarChange = (inputFieldId , inputFieldValue) => {
        this.setState({date: inputFieldValue});
    };

    handleselectedOption = event => {
        this.setState({type: event.currentTarget.value});
    };

    handleDoctorOption = event => {
        this.setState({doctor_id: event.target.value});
    };

    handleDurationOption = event => {
        this.setState({duration: event.target.value});
    };

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header"><h2>New Appointment</h2></div>
                    <div className="card-body text-left">
                        <Container fluid>
                            <form className="form">

                            <Row>
                                <Col size="3">Reason</Col>
                                <Col size="8"><input
                                    value={this.state.reason}
                                    name="reason"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Reason for this appointment"
                                /></Col>
                            </Row>

                                <Row>
                                    <Col size="3">Select a date and time</Col>
                                    <Col size="8"><CalendarAppt onChange={this.calendarChange}/></Col>
                                </Row>
                                <Row>
                                    <Col size="3">Upload your files here</Col>
                                    <Col size="8"><input type="file" className="form-control-file" id="exampleFormControlFile1"/></Col>
                                </Row>
                                {/*<Row>*/}
                                    {/*<Col size="3">Video Appointment</Col>*/}
                                    {/*<Col size="8"><input*/}
                                        {/*onChange={this.handleselectedOption}*/}
                                        {/*type="radio"*/}
                                        {/*value="video"*/}
                                        {/*name="type"*/}
                                        {/*checked={this.state.type === "video"}*/}
                                    {/*/></Col>*/}
                                {/*</Row>*/}

                                {/*<Row>*/}
                                    {/*<Col size="3">In-person Appointment</Col>*/}
                                    {/*<Col size="8"><input*/}
                                        {/*onChange={this.handleselectedOption}*/}
                                        {/*type="radio"*/}
                                        {/*value="inperson"*/}
                                        {/*name="type"*/}
                                        {/*checked={this.state.type === "inperson"}*/}
                                    {/*/></Col>*/}
                                {/*</Row>*/}
                                <Row>
                                    <Col size="3">Select a doctor</Col>
                                    <Col size="8"><select onChange={this.handleDoctorOption}>
                                        <option>Select Doctor</option>
                                        {
                                            this.props.doctors ? (
                                                this.props.doctors.map((item, index) => {
                                                    return (
                                                        <option key={index}
                                                                value={item.id}>{item.firstName} {item.lastName} - {item.doctype}</option>
                                                    )
                                                })
                                            ) : null
                                        }
                                    </select></Col>
                                </Row>
                                <Row>
                                    <Col size="3">Duration</Col>
                                    <Col size="8">
                                        <select onChange={this.handleDurationOption}>
                                        <option value="30">Select duration</option>
                                        <option value="30">30 min</option>
                                        <option value="45">45 min</option>
                                        <option value="60">60 min</option>
                                    </select>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <button className="btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                                </div>
                        </form>
                        </Container>
                    </div>
                {/* </Container> */}
                </div>
            </div>

        );
    }
}

export default withRouter(Form);
