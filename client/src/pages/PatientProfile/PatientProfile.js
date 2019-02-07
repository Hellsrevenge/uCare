import React, { Component} from "react";
import NavPatient from "../../components/NavPatient/NavPatient";
import {Container} from "../../components/Grid/Grid";
import withAuth from '../../components/withAuth';
import API from "../../utils/API"
import AuthHelperMethods from "../../components/AuthHelperMethods";

import Card from "../../components/Card/Card";
import insimage from "./ins2.png";
import "./PatientProfile.css"

//necessary for pulling patient name out of entered email

const cardStyle =  {
    height:"400px",
    width:"600px"
}



const Auth = new AuthHelperMethods();

var currPatient = "leo";

const oldmeds = {
    background: "#fcfc9c"
  }
  
const currentmeds = {
    background: "#bdfcb3"
  }

  const cardImage = {
    width: "300px",
    height: "275px"
  }

//   const testcontainer = { 
//     display: "flex"
//   }


class PatientProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }
    
    componentDidMount() {
        API.getAppts()
        .then(response => {
            this.setState({appointments: response})
        })
        // fetch("/api/appointments")
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({appointments: data});
        //     });
    }






    render() {
        return (
            <div>
                <NavPatient />

                    <Card heading= {"Appointments"}>
                      {
                        this.state.appointments ? (
                            this.state.appointments.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.date} -
                                        {item.subject} -
                                        {item.status} -
                                        {item.duration} -
                                        <a href={item.skypeUrl}>{item.skypeUrl}</a> -
                                        {item.DoctorId} -
                                    </div>
                                )
                            })
                        ) : null
                    }
                </Card>


                
                <Card heading= {"Prescription Medications"} >

            <table className="table table-hover">
              <thead>
                 <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Reported Side Effects</th>
                </tr>
              </thead>

              <tbody>
                <tr style={currentmeds}>
                    <th scope="row">1</th>
                    <td>Acetaminophen</td>
                    <td>800mg</td>
                    <td>N/A</td>
                </tr>
                <tr style={currentmeds}>
                    <th scope="row">2</th>
                    <td>Dextromethorphan</td>
                    <td>500 mg/m²</td>
                    <td>Drowsiness, vomitting</td>
                </tr>
                <tr style={oldmeds}>
                    <th scope="row">3</th>
                    <td>Loratadine </td>
                    <td>250 mg/m²</td>
                    <td>Upset stomach</td>
                </tr>
              </tbody>
            </table>
                </Card>
            
            
                <Card heading= {"Insurance & Billing"} >
                <img id="insphoto" src={insimage} style={cardImage} alt ="insurance"/>

                </Card>
            



                <Card heading= {"Other Data"}>
                    {
                        this.state.appointments ? (
                            this.state.appointments.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.date} -
                                        {item.subject} -
                                        {item.status} -
                                        {item.duration} -
                                        <a href={item.skypeUrl}>{item.skypeUrl}</a> -
                                        {item.DoctorId} -
                                    </div>
                                )
                            })
                        ) : null
                    }
                </Card>
                
                </div>

    
        )
    }
}

export default withAuth(PatientProfile);
