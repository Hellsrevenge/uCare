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
                {/* <Container fluid style={testcontainer}> */}
                <div className="card">
                    <div className="card-header"><h2>New Appointment</h2></div>
                        <form className="form">

                            <input
                                value={this.state.reason}
                                name="reason"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Reason for this appointment"
                            />

                            {/* <Row> */}
                            <CalendarAppt onChange={this.calendarChange}/>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Upload your files here</label>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                </div>
                            {/* </Row> */}

                            {/* <Row> */}
                                {/* <Col size="6"> */}
                                    <input
                                        onChange={this.handleselectedOption}
                                        type="radio"
                                        value="video"
                                        name="type"
                                        checked={this.state.type === "video"}
                                    /> Video Appointment
                                {/* </Col> */}

                                {/* <Col size="6"> */}
                                    <input
                                        onChange={this.handleselectedOption}
                                        type="radio"
                                        value="inperson"
                                        name="type"
                                        checked={this.state.type === "inperson"}
                                    />
                                    In-person Appointment
                                {/* </Col> */}
                            {/* </Row> */}

                            {/* <Row> */}
                                {/* <Col size="4"> */}
                                    <select onChange={this.handleDoctorOption}>
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
                                    </select>
                                {/* </Col> */}

                                {/* <Col size="8"> */}
                                    <div>
                                        <select onChange={this.handleDurationOption}>
                                            <option value="30">Select duration</option>
                                            <option value="30">30 min</option>
                                            <option value="45">45 min</option>
                                            <option value="60">60 min</option>
                                        </select>
                                    </div>
                                {/* </Col> */}

                            {/* </Row> */}

                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                        </div>
                {/* </Container> */}
            </div>

        );
    }
}

export default withRouter(Form);
