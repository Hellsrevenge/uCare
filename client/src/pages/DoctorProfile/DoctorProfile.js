import React from "react";
import "./DoctorProfile.css";
import drhouse from './drhouse.jpeg'; 
import CalendarEx from "../../components/Calendar/Calendar";
import NavDoctor from "../../components/NavDoctor/NavDoctor";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Wrapper from "../../components/Wrapper/Wrapper"

function DoctorProfile(props) {
    
    return (
    <div>
        <Wrapper>
            <Container fluid>
              <Row>
                <Col size="2">
                    <img className ="drhouse" src={drhouse} alt="Doctor" />
                </Col>
                <Col size="10">
                    <NavDoctor />
                </Col>
              </Row>

              <Row>
                <Col size="2">
                    <div className="list-group">
                    <a className="list-group-item" href="#"><i className="fas fa-notes-medical fa-3x" aria-hidden="true"></i>&nbsp; Doctor's Note</a>
                    <a className="list-group-item" href="#"><i className="fas fa-book-medical fa-3x" aria-hidden="true"></i>&nbsp; Search Medicine</a>
                    <a className="list-group-item" href="#"><i className="fas fa-book-medical fa-3x" aria-hidden="true"></i>&nbsp; Applications</a>
                    <a className="list-group-item" href="#"><i className="fa fa-cog fa-fw fa-3x" aria-hidden="true"></i>&nbsp; Settings</a>
                    </div>
<br></br>
                </Col>
                <Col size="10">
                    <CalendarEx />
                </Col>
              </Row>
            </Container>
        </Wrapper>
    </div>
    );
}

export default DoctorProfile;
