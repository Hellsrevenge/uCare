import React from "react";
import "./FormAppt.css";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Component} from "react"


class Form extends Component {
  // Setting the component's initial state
  state = {
    patient: "",
    reason: "",
    skype: false,
  };

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
      //add this to patient file
      //

//reset state
    this.setState({
      patient: "",
      reason: "",
      skype: false,
      selectedOption: ""

    });
  };

  handleselectedOption = event => {
    //if selected option is skype, hit skype API for link

  }

  render() {
    return (
      <div>
        <Card>
          <p>
             Appointment for {this.state.patient}
          </p>
        
        <form className="form">
          
          <input
            value={this.state.patient}
            name="patient"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Patient Name"
          />
          <input
            value={this.state.reason}
            name="reason"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Reason for this appointment"
          />

        <Row>
          <Col size="6">
            <input 
            type="radio" 
            value={this.state.slectedOption}
            name="skype"
            // checked={this.state.selectedOption === "video"}
            /> Video Appointment
          </Col>

          <Col size="6">
            <input 
            type="radio"
            value={this.state.slectedOption}
            name="inperson"
            // checked={this.state.selectedOption === "inperson"}
            />
              In-person Appointment 
          </Col>
        </Row>

        <Row>
          <Col size="4">
            <DropdownButton />
            {/* need to add doctors */}
          </Col>

          <Col size="8">
            <div className="form-group">
              <label for="exampleFormControlFile1">Upload your files here</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
          </Col>

        </Row>
       
          <button onClick={this.handleFormSubmit}>Submit</button>
   </form>
      </Card>
      </div>
      
    );
  }
}

export default Form;
