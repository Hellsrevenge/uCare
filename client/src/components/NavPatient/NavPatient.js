import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import logo from "./logo.png";
import "./NavPatient.css"
import AuthHelperMethods from "../AuthHelperMethods";
import FormLogin from "../FormLogin/FormLogin";

const navItem = {
color:"red"

}

class NavPatient extends Component {
    Auth = new AuthHelperMethods();

    handleLogout = () => {
        this.Auth.logout();
        this.props.history.replace('/');
    };

    renderLoginForm() {
        if (this.Auth.loggedIn()) {
            return (
                <div className="right">
                    <a href="/patient/">Profile</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/" onClick={this.handleLogout}>Logout</a>
                </div>
            )
        } else {
            return (
                <FormLogin/>
            )
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar sticky-top navbar-expand-lg">
            
            <img className ="homeimg rounded-circle" src= {logo}></img>
                <a className="navbar-brand" href="/">
                    <div className="ourname">
                    UCare
                    </div>
                </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={navItem}>
      <li className="nav-item active">
        <a className="nav-link" href={"/patient/" + this.Auth.getPatient().id + "/history"}>Patient File<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/newappt">New Appointment</a>
      </li>
    </ul>
      {this.renderLoginForm()}
  </div>
</nav>




            </div>
        );
    }
}

export default withRouter(NavPatient);
