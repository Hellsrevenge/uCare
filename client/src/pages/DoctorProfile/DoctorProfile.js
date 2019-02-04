import React from "react";
import "./DoctorProfile.css";
import drhouse from './drhouse.jpeg'; 
// import CalendarAppt from "../../components/CalendarAppt/CalendarAppt";
// import CalendarDoc from "../../components/CalendarDoc/CalendarDoc";
import NavDoctor from "../../components/NavDoctor/NavDoctor";
import { Col, Row, Container } from "../../components/Grid/Grid";

function DoctorProfile(props) {
    
    return (
        <div>
        <Container>
            <Row>
                <Col size="2">
                    <img className ="drhouse" src={drhouse} alt="Doctor" /><br></br>
                    <div>"TODO"</div><br></br>
                    {/* <CalendarAppt /> */}
                    <div>"Medicine Checker"</div><br></br>
                    <div>"Doctor's Note"</div><br></br>
                </Col>
                <Col size="10">
                <NavDoctor /><br></br>
                <div>"Calendar goes here"</div><br></br>
                {/* <CalendarDoc /> */}


                </Col>
            </Row>
        {/* <CalendarDoc /> */}
        </Container>
        </div>
    );
}
export default DoctorProfile;
