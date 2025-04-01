import React from 'react'
import "./Navbar.css"

function Navbar() {

    const CvButtonLink = false;

    const CvButtonClick = () => {
        { CvButtonLink == false && alert("Very soon CV will upload!") }
    }

    return (
        <div className="navbar">
            
            <a href="#logo" className="logo">Abhi <span>.</span></a>

            <ul className="pageLinks">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Works</li>
                <li>Testimonials</li>
                <li>Contact</li>
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
