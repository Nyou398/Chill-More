import React, { useState, useEffect } from 'react';
import '../CSS/NavBar.css';
import logo from '../Images/logo.png'
import avatar from '../Images/avatar.png'

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src={logo}
                alt="Chill Logo"
            />

            <img
                className="nav__avatar"
                src={avatar}
                alt="avatar Logo"
            />
        </div>
    )
}

export default NavBar;