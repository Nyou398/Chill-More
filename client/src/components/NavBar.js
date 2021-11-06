import React, { useState, useEffect } from 'react';
import '../CSS/NavBar.css';
import logo from '../Images/logo.png';

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
        </div>
    )
}

export default NavBar;