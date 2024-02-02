import '../Styles/Navbar.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState("home");
    const location = useLocation();

    useEffect(() => {
        const route = location.pathname.substring(1);
        setSelectedButton(route || "home");
    }, [location.pathname]);

    return (
        <>
            <div id='mainContainer' className="mainContainer">
                <div className="iconContainer">
                    <Link to="/">
                        <i id='home' className={` fa-house icons home ${selectedButton === "home" ? "fa-solid" : "fa-regular"}`}></i>
                    </Link>
                    <Link to='/about'>
                        <i id='about' className={`fa-id-card icons about ${selectedButton === "about" ? "fa-solid" : "fa-regular"}`}></i>
                    </Link>
                    <Link to='/projects'>
                        <i id='projects' className={`fa-puzzle-piece icons projects ${selectedButton === "projects" ? "fa-solid" : "fa-regular"}`}></i>
                    </Link>
                    <Link to="/contact">
                        <i id='contact' className={`fa-comments icons contact ${selectedButton === "contact" ? "fa-solid" : "fa-regular"}`}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
