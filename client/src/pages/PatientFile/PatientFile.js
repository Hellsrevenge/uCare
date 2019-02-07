import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import List from "../../components/List/List";
import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientFile.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Footer from "../../components/Footer/Footer";
//import API from "../utils/API";

//necessary for pulling patient name out of entered email
/*const Auth = new AuthHelperMethods();
var currPatient = Auth.getConfirm().email.split("@")[0];*/


function PatientFile (props) {
  

    return (

      <div>
      <NavPatient />
    
    <Container fluid>
      <Row>
         <Col size ="2">
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-vials fa-2x" aria-hidden="true"></i>&nbsp;Tests</a>
              </Col>
            </Row>
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-prescription fa-2x" aria-hidden="true"></i>&nbsp;Medications</a>
              </Col>
            </Row>
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-calendar-alt fa-2x" aria-hidden="true"></i>&nbsp;Calendar</a>
              </Col>
            </Row>
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-users-cog fa-2x" aria-hidden="true"></i>&nbsp;Proxies</a>
              </Col>
            </Row>
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-history fa-2x" aria-hidden="true"></i>&nbsp;Medical History</a>
              </Col>
            </Row>
          </Col>

          <Col size="8">

        <Card heading = {"Appointment History"}>
        <table className="table">
  <thead>
  <tr className="table-active">
      <th scope="col">Date</th>
      <th scope="col">Reason</th>
      <th scope="col">In Person / Video</th>
      <th scope="col">Handle</th>
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
      <td>fill in </td>
    </tr>
    <tr className="table bg-primary">
      <th scope="row">04/13/12</th>
      <td>Depressive Episode</td>
      <td>Video</td>
      <td>fill in </td>
    </tr>
    <tr className="table bg-primary">
      <th scope="row">04/13/12</th>
      <td>Depressive Episode</td>
      <td>Video</td>
      <td>fill in </td>
    </tr>
    <tr className="table-primary">
      <th scope="row">01/12/10</th>
      <td>Headache</td>
      <td>Video</td>
      <td>??</td>
    </tr>
  </tbody>
</table>
       </Card>
       </Col>
       </Row>
        </Container>

        <Footer />
       
      </div>
      
    );
  }


export default PatientFile;



