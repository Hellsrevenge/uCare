import { List, ListItem } from "../../components/List/List";
import { Col, Row, Container } from "../../components/Grid/Grid";
import React, { Component } from "react";
import API from "../../utils/API";
import "./PatientList.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Card from "../../components/Card/Card";


//trying to get rounded card edges
const cardStyle = {
  height: "200px",
  width: "600px", 
  margin: "0 auto",
  float: "none",
  marginBottom: "10px"
}

const Auth = new AuthHelperMethods();
var currPatient = Auth.getConfirm().email.split("@")[0];

class PatientList extends Component {
    state = {
      patients: [1, 2, 3, 4]
    };

    componentDidMount() {
      console.log("hits patient list");
      this.loadPatients();
      console.log(this.state.patients);
     }
  
       loadPatients = () => {
         API.getPatients(currPatient)
           .then(res => this.setState({ patients: res.data })) 
           .catch(err => console.log(err));
       }; 
    
  
    render() {
      return (
        <div>
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">

              {this.state.patients.length ? (
                <List>
                  {this.state.patients.map(patient => (
                    <Card style={cardStyle}>
                    <ListItem key={patient._id}>
                      <a href={"/patient/" + patient._id}>
                        
                          <strong>
                          {patient.name} Test
                        </strong>
                      </a>
                    </ListItem>
                    </Card>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
  }

  export default PatientList;
