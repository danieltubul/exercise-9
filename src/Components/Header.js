import React from 'react';
import "../Styles/header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

function Header() {
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
            <a href="" className="right-positioned">Login</a>
            </div>
        </header>
    );
}

export default Header;

