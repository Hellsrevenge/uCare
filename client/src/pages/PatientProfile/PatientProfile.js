import React, { Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import {Container, Row, Col} from "../../components/Grid/Grid";
import withAuth from '../../components/withAuth';

import AuthHelperMethods from "../../components/AuthHelperMethods";

import Card from "../../components/Card/Card";
import insimage from "./ins2.png";

//necessary for pulling patient name out of entered email

const Auth = new AuthHelperMethods();
var currPatient = Auth.getConfirm().email.split("@")[0];

const oldmeds = {
    background: "#fcfc9c"
  }
  
const currentmeds = {
    background: "#bdfcb3"
  }

  const cardImage = {
    width: "300px",
    height: "275px"

  }

  const cardStyle = {
    
    borderRadius: "25px",
    background: "#73AD21",
    padding: "20px", 
    width: "200px",
    height: "150px"  
      
  }




class PatientProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }
    
    componentDidMount() {
        fetch("/api/appointments/" + currPatient)
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
                <Card heading= {"Appointments"} style={cardStyle}>
                
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
                
                </Card>
                </Col>

                <Col size="6">
                <Card heading= {"Prescription Medications"} style={cardStyle}>

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

                <Col size="6" >
                <Card heading= {"Insurance & Billing"} style={cardStyle}>
                <img id="insphoto" src={insimage} style={cardImage} alt ="insurance"/>

                </Card>
                </Col>

                <Col size="6">
                <Card heading= {"Other Data"}>
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
                </Card>
                </Col>
            </Row>

            </Container>
            </div>
        )
    }
}

export default withAuth(PatientProfile);
