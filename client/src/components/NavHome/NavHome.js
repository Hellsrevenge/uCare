import React, {Component} from "react";
import FormLogin from "../FormLogin/FormLogin";
import AuthHelperMethods from '../../components/AuthHelperMethods';
import "./NavHome.css";
import logo from "./logo.png";

class NavHome extends Component {
    Auth = new AuthHelperMethods();

    handleLogout = () => {
        this.Auth.logout();
        this.props.history.replace('/');
    };

    renderLoginForm() {
        if (this.Auth.loggedIn()) {
            return (
                <div className="right">
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
            <nav className="navbar navbar-expand-lg navbar-dark">
            <img className ="homeimg rounded-circle" src= {logo}></img>
                <a className="navbar-brand" href="/">
                    <div className="ourname">
                    UCare
                    </div>
                </a>
                {this.renderLoginForm()}
            </nav>
        );
    }
};

export default NavHome;