import React from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/Grid";
import List from "../../components/List/List";
// import {Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import "./PatientFile.css";


function PatientFile (props) {
  
    return (

      <div>
      <NavPatient />
    
    <Container fluid>
    <Row>
      <Container fluid>
         <Col size ="4">
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-vials fa-3x" aria-hidden="true"></i>&nbsp;Tests</a>
              </Col>
            </Row>
            <Row>
              <Col size ="4">
              <a className="list-group-item" href="#"><i className="fas fa-prescription fa-3x" aria-hidden="true"></i>&nbsp;Medications</a>
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
        </Container>
      </Row>
        <Card>
          <p>
          test
          </p>
       </Card>
       </Container>

      </div>
      
    );
  }


export default PatientFile;



