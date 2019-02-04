import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import FormLogin from "../FormLogin/FormLogin";

class NavPatient extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    UCare
                </a>
                <FormLogin />
            </nav>
        );
    }
}

export default withRouter(NavPatient);
