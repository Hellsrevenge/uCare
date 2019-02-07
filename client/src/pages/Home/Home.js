import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import NavHome from "../../components/NavHome/NavHome";
// import Footer from "../../components/Footer/Footer";
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

       {/* <Footer /> */}
       <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2018 UCARE
            {/* <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a> */}
          </div>
        </footer>   
    </div>
    );
  }
}

export default Home;
