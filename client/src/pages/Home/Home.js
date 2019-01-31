import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavHome from "../../components/NavHome/NavHome";
import Form from "../../components/FormLogin/FormLogin";

class Home extends Component {
  state = {
   
  };

  render() {
    return (
      <Container fluid>
        <NavHome>
          <Form />
        </NavHome>

        <Row>
          <Col size="8">
          {/* Picture goes here */}

          </Col>

          <Col size="4">
          {/* About UCare goes here */}

          </Col>

        </Row>




            
       </Container>
);
}
}

export default Home;
