import React from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
// import CalendarAppt from "../../components/CalendarAppt/CalendarAppt";
import FormAppt from "../../components/FormAppt/FormAppt";

function NewAppt(props) {
    
    return (
        <div>
        <Container>
            
        <FormAppt />
            
        {/* <CalendarDoc /> */}
        </Container>
        </div>
    );
}
export default NewAppt;