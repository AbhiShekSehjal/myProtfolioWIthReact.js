import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {

    const CvButtonLink = false;

    const CvButtonClick = () => {
        { CvButtonLink == false && alert("Very soon CV will upload!") }
    }

    return (
        <div className="navbar">

            <a href="#logo" className="logo">Abhi <span>.</span></a>

            <ul className="pageLinks">

                <li><NavLink to={""} className="NavLinks" style={{ textDecoration: "none" }}>Home</NavLink></li>
                <li><NavLink to={"/Works"} className="NavLinks" style={{ textDecoration: "none" }}>Works</NavLink></li>
                <li><NavLink to={"/Testimonials"} className="NavLinks" style={{ textDecoration: "none" }}>Testimonials</NavLink></li>
                <li><NavLink to={"/Portfolio"} className="NavLinks" style={{ textDecoration: "none" }}>Portfolio</NavLink></li>
                <li><NavLink to={"/Contact"} className="NavLinks" style={{ textDecoration: "none" }}>Contact</NavLink></li>

            </ul>

            <button
                className='CvButton'
                onClick={CvButtonClick}>
                <a href="#CvButton" className='CV'>Download CV </a>
            </button>
        </div>
    )
}

export default Navbar
