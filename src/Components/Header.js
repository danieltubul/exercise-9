import React from 'react';
import "../Styles/header.css";

function Header() {
    return (
        <header>
            <div className="nav-bar">
                <div>
                <a href="">Home</a>
                <span className="vertical-line"> | </span>
                <a href="">About</a>
                <span className="vertical-line"> | </span>
                <a href="">Contact</a>
                </div>
            <a href="" className="right-positioned">Login</a>
            </div>
        </header>
    );
}

export default Header;

