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
            <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark justify-content-between">
                <div>
                    <img className ="homeimg rounded-circle" src= {logo}></img>
                    <a className="navbar-brand" href="/">
                        <div className="ourname">UCare</div>
                    </a>
                </div>
                {this.renderLoginForm()}
            </nav>
            </div>
        );
    }
};

export default NavHome;