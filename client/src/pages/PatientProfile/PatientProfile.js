import React from "react";
import "./PatientProfile.css";
import CalendarAppt from "../../components/CalendarAppt/CalendarAppt";
import { Col, Row, Container } from "../../components/Grid/Grid";

function PatientProfile(props) {
    
    return (
        <div>
        <Container>
            <Row>
                <Col size="10">
                    {/* <img className ="drhouse" src={drhouse} alt="Doctor" /><br></br> */}
                    <div>"TODO"</div><br></br>
                    <CalendarAppt />
                    <div>"Medicine Checker"</div><br></br>
                    <div>"Doctor's Note"</div><br></br>

                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default PatientProfile;
