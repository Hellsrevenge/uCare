import React from "react";
import "./DoctorProfile.css";
import CalendarEx from "../../components/Calendar/Calendar";
import NavDoctor from "../../components/NavDoctor/NavDoctor";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Wrapper from "../../components/Wrapper/Wrapper";
// import Footer from "../../components/Footer/Footer";



function DoctorProfile(props) {
    
    return (
    <div>
                <NavDoctor />
            <Container fluid>
              <Row>
                <Col size="2">
                    <div className="list-group">
                    <a className="list-group-item" href="#"><i className="fas fa-notes-medical fa-2x" aria-hidden="true"></i>&nbsp; Doctor's Note</a>
                    <a className="list-group-item" href="#"><i className="fas fa-book-medical fa-2x" aria-hidden="true"></i>&nbsp; Search Medicine</a>
                    <a className="list-group-item" href="#"><i className="fas fa-book-medical fa-2x" aria-hidden="true"></i>&nbsp; Applications</a>
                    <a className="list-group-item" href="#"><i className="fas fa-cog fa-2x" aria-hidden="true"></i>&nbsp;Settings</a>
                    </div>
                </Col>

                <Col size="10">
                    <CalendarEx />
                </Col>

              </Row>
            </Container>
    </div>
    );
}

export default DoctorProfile;
