import React, { Component} from "react";
import Moment from 'react-moment';
import { Col, Row, Container } from "../../components/Grid/Grid";
import NavPatient from "../../components/NavPatient/NavPatient";
import withAuth from '../../components/withAuth';
import API from "../../utils/API"
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Card from "../../components/Card/Card";
import insimage from "./ins2.png";
import "./PatientProfile.css"

//necessary for pulling patient name out of entered email

const cardStyle =  {
    height:"400px",
    width:"600px"
}

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

//   const testcontainer = { 
//     display: "flex"
//   }

class PatientProfile extends Component {
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
                <NavPatient />

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


                
                <Card heading= {"Prescription Medications"} >

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
            
            
                <Card heading= {"Insurance & Billing"} >
                <img id="insphoto" src={insimage} style={cardImage} alt ="insurance"/>

                </Card>
                
                </div>

    
        )
    }
}

export default withAuth(PatientProfile);
