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
          <Col size="6">
            <img id="googlephoto" src={home} alt ="UCare"/>
          </Col>
          <Col size="4">
            <div>
              <p>
              UCARE is a platform that aims to bring transparency and accessibility to patients, effieciency and organization to healthcare professionals, and the modern web to the healthcare system.
              </p>
            </div>
          </Col>
        </Row>

       </Container>

       <Footer />

       </div>
    );
  }
}

export default Home;
