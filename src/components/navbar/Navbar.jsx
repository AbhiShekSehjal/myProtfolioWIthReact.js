import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {

    const showSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-300px"
        } else {
            sidebar.style.right = "0px";
        }
        const line1 = document.querySelector("#line1");
        const line2 = document.querySelector("#line2");
        const line3 = document.querySelector("#line3");
        if (sidebar.style.right === "0px") {
            line1.style.width = "30px";
            line2.style.width = "20px";
            line3.style.width = "10px";
        } else {
            line1.style.width = "10px";
            line2.style.width = "20px";
            line3.style.width = "30px";
        }
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.right = "-300px";
    }

    return (
        <>
            <nav className="navbar">

                <a href="#Home" className="logo">Abhi <span>.</span></a>

                <ul className="pageLinks">
                    <li><NavLink to={""} className="NavLinks" style={{ textDecoration: "none" }}>Home</NavLink></li>
                    <li><NavLink to={"/Works"} className="NavLinks" style={{ textDecoration: "none" }}>Works</NavLink></li>
                    <li><NavLink to={"/Testimonials"} className="NavLinks" style={{ textDecoration: "none" }}>Testimonials</NavLink></li>
                    <li><NavLink to={"/Portfolio"} className="NavLinks" style={{ textDecoration: "none" }}>Portfolio</NavLink></li>
                    <li><NavLink to={"/Contact"} className="NavLinks" style={{ textDecoration: "none" }}>Contact</NavLink></li>
                </ul>

                <button className='CvButton'>
                    <a href="https://drive.google.com/file/d/1imaxitWiKE3jDUCcmEo9BdCIGSoeZNs7/view" className='CV'>Resume</a>
                </button>

                <div class="hamburger" id="hamburger" onClick={() => { showSidebar() }}>
                    <span class="line1" id="line1"></span>
                    <span class="line2" id="line2"></span>
                    <span class="line3" id="line3"></span>
                </div>


            </nav>
            <div className="sidebar">
                <ul className="pageLinksPagelinks" onClick={() => { hideSidebar() }}>
                    <li><NavLink to={""} className="NavLinks" style={{ textDecoration: "none" }}>Home</NavLink></li>
                    <li><NavLink to={"/Works"} className="NavLinks" style={{ textDecoration: "none" }}>Works</NavLink></li>
                    <li><NavLink to={"/Testimonials"} className="NavLinks" style={{ textDecoration: "none" }}>Testimonials</NavLink></li>
                    <li><NavLink to={"/Portfolio"} className="NavLinks" style={{ textDecoration: "none" }}>Portfolio</NavLink></li>
                    <li><NavLink to={"/Contact"} className="NavLinks" style={{ textDecoration: "none" }}>Contact</NavLink></li>
                    <li><a href="https://drive.google.com/file/d/1imaxitWiKE3jDUCcmEo9BdCIGSoeZNs7/view">See my Resume</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
