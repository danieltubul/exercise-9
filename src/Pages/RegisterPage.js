import React from 'react';
import axios from "axios";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.setState({
            firstName: null,
            lastName: null,
            email: null,
            username: null,
            password: null,
            resp: null
        })
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value,
        })
    }
    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handleUserNameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    doRegistration = (e) => {
        e.preventDefault();
        const url = "/register"
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }

        axios.post(url, data)
            .then((res) => {
                this.setState({
                        firstName: '',
                        lastName: '',
                        email:'',
                        username: '',
                        password: '',
                        resp: "Success: user registered."
                });
            })
            .catch((err) => {
                this.setState({
                    resp: "Error: already in used username, choose a different one"
                });
            });
    }

    render() {
        return (
            <div> <br/><br/><br/>
                First name:  <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}></input><br/>
                Last name:   <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}></input><br/>
                Email:       <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input><br/>
                Username:    <input type="text" value={this.state.username} onChange={this.handleUserNameChange}></input><br/>
                Password:    <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input><br/>
                <button onClick={this.doRegistration}>Register</button>
                <div>
                    {this.state.resp ? this.state.resp : null}
                </div>
            </div>
        )
    }
}

export default RegisterPage;