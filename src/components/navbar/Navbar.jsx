import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [scroll, setScroll] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            let currentScrollY = window.scrollY;

            if (lastScrollY > currentScrollY) {
                setScroll("down");
                let navbar = document.querySelector(".navbar");
                let logo = document.querySelector(".logo");
                let dotSpan = document.querySelector(".dotSpan");
                const line1 = document.querySelector("#line1");
                const line2 = document.querySelector("#line2");
                const line3 = document.querySelector("#line3");

                navbar.style.backgroundColor = "black";

                logo.style.color = "white";
                dotSpan.style.color = "white";
                line1.style.backgroundColor = "white";
                line2.style.backgroundColor = "white";
                line3.style.backgroundColor = "white";
            } else {
                setScroll("up")
                let navbar = document.querySelector(".navbar");
                let logo = document.querySelector(".logo");
                let dotSpan = document.querySelector(".dotSpan");
                const line1 = document.querySelector("#line1");
                const line2 = document.querySelector("#line2");
                const line3 = document.querySelector("#line3");
                const sidebar = document.querySelector(".sidebar");

                if (sidebar) {
                    sidebar.style.right = "-1800px";
                }

                navbar.style.backgroundColor = "white";

                logo.style.color = "black";
                dotSpan.style.color = "black";
                line1.style.backgroundColor = "black";
                line2.style.backgroundColor = "black";
                line3.style.backgroundColor = "black";
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const showSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-1800px";
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
        sidebar.style.right = "-1800px";
    }


    return (
        <>
            <nav className="navbar" id={scroll}>

                <a href="#Home" className="logo">Abhi <span className='dotSpan'>.</span></a>

                <div className="pageLinks">
                    <a href='#Home' className='NavLinks'>Home</a>
                    <a href='#projects' className='NavLinks'>Projects</a>
                    <a href='#Testimonials' className='NavLinks'>Testimonials</a >
                    <a href="#contactMe" className='NavLinks'>Contact Me</a >
                </div >

                {/* <a href="#contactMe" style={{ textDecoration: "none" }}><div className="hireMe">Hire me</div></a> */}


                < button className='CvButton' >
                    <a href="https://drive.google.com/file/d/1SPjLdycyyatOYvZiUXoYYLU63y9aDxYR/view?usp=drive_link" className='CV'>Resume</a>
                </button >

                <div class="hamburger" id="hamburger" onClick={() => { showSidebar() }}>
                    <span class="line1" id="line1"></span>
                    <span class="line2" id="line2"></span>
                    <span class="line3" id="line3"></span>
                </div>


            </nav >
            <div className="sidebar">

                <div className="justStylingOnNavbar"></div>

                <ul className="pageLinksPagelinks" onClick={() => { hideSidebar() }}>
                    <li><a href='#Home' className='NavLinks' style={{ textDecoration: "none" }}>Home</a></li>
                    <li><a href='#projects' className='NavLinks' style={{ textDecoration: "none" }}>Projects</a></li>
                    <li><a href='#Testimonials' className='NavLinks' style={{ textDecoration: "none" }}>Testimonials</a ></li>
                    <li> <a href="#contactMe" className='NavLinks' style={{ textDecoration: "none" }}>Contact Me</a ></li>
                    <li><a href="https://drive.google.com/file/d/1SPjLdycyyatOYvZiUXoYYLU63y9aDxYR/view?usp=drive_link">See my Resume</a></li>
                </ul >
            </div >
        </>
    )
}

export default Navbar
