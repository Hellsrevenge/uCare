import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import NavHome from "../../components/NavHome/NavHome";
import Footer from "../../components/Footer/Footer";
import home from "./case3.png";
import "./Home.css"

class Home extends Component {

  render() {
    return (
      
  <div>
        <NavHome />
        

        <Container fluid>

        <Row>
          <Col size="8">
            <img id="googlephoto" src={home} alt ="UCare"/>
          </Col>
          <Col size="4">
            <div>
              <p>We are a cloud based</p>
            </div>
          </Col>
        </Row>

        <Footer />

       </Container>
       </div>
    );
  }
}

export default Home;
