import React from 'react';
import "../Styles/header.css";
import {Link} from 'react-router-dom'
import axios from "axios";

class Header extends React.Component {

    doLogout = () => {
        const url = "/logout";
        const user_id = {user_id: this.props.user_id}
        axios.post(url, user_id)
            .then((res) => {
                this.props.onLogout()
            })
            .catch((err) => {
                console.log("error")
            });
    }


    render() {
        return (
            <header>
                <div className="nav-bar">
                    <div>
                        <Link to="/">Home</Link>
                        <span className="vertical-line"> | </span>
                        <Link to="/about">About</Link>
                        <span className="vertical-line"> | </span>
                        <Link to="/contact">Contact</Link>
                        <span className="vertical-line"> | </span>
                        <Link to="/add-post">New Post</Link>
                    </div>
                    <div className="right-positioned">
                        {this.props.isLoggedIn?
                            "Hello " + this.props.firstname
                            :
                            <Link to="/login">Login</Link>}
                        {this.props.isLoggedIn? <button onClick={this.doLogout}>Logout</button> : null}
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;

