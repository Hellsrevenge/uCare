import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import "./FormLogin.css";
import AuthHelperMethods from '../../components/AuthHelperMethods';

class Login extends Component {
    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.email) {
            alert("Please enter your email");
        } else if (!this.state.password) {
            alert("Please enter your password");
        } else {
            this.Auth.login(
                this.state.email,
                this.state.password
            ).then(res => {
                if (res === false) {
                    console.log(res);
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/patient');
            }).catch(err => {
                alert(err);
            });
        }
    };

    render() {

        return (
        <div>
            <div className="form-group">

                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label>
                        <input
                         type="text"
                         value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Name"
                        />
                    </label>
                    <input type="submit" value="Submit"/>
                
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Login</button>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(Login);
