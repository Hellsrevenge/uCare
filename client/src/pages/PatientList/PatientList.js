import { List, ListItem } from "../../components/List/List";
import { Col, Row, Container } from "../../components/Grid/Grid";
import React, { Component } from "react";
// import API from "../utils/API";
import "./PatientList.css";


class PatientList extends Component {
    state = {
      patients: [1, 2, 3, 4]
    };
  
    // componentDidMount() {
    //   this.loadPatients();
    // }
  
    // loadPatients = () => {
    //   API.getPatients()
    //     .then(res => this.setState({ patients: res.data }))
    //     .catch(err => console.log(err));
    // };
  
    render() {
      return (
        <Container fluid>
          <Row>
            {/* <Col size="md-6">
              {/* <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron> */}
              {/* <form> */}
                {/* <Input name="title" placeholder="Title (required)" />
                <Input name="author" placeholder="Author (required)" />
                <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                <FormBtn>Submit Book</FormBtn> */}
              {/* </form> */}
            {/* </Col> */} 
            <Col size="md-6 sm-12">

              {this.state.patients.length ? (
                <List>
                  {this.state.patients.map(patient => (
                    <ListItem key={patient._id}>
                      <a href={"/patient/" + patient._id}>
                        <strong>
                          {patient.name} Test
                        </strong>
                      </a>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  }

  export default PatientList;
