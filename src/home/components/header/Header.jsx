import React from 'react'
import "./Header.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {

    const links = {
        GitLink: "https://github.com/AbhiShekSehjal",
        LinkedInLink: "https://www.linkedin.com/in/abhishek-singh-4a78a5353/",
    }

    return (
        <>
            <div id='Home'>
                <div className="mainContent">

                    <div className="justStylingforHeader1"></div>
                    <div className="justStylingforHeader2"></div>


                    <div className="leftMainContent">

                        <h1>I'm <span className='spanText2'>Web Developer</span></h1>
                        <p className='mainPera'>Full Stack Developer passionate about crafting visually appealing, user-friendly, and fully functional web applications from front to back.</p>

                        <div className="socialMedialinks">

                            <a href={links.GitLink.toString()}><GitHubIcon fontSize='small' /></a>
                            <a href={links.LinkedInLink.toString()}><LinkedInIcon fontSize='small' /></a>

                        </div>

                        <a href="#contactMe" className='contactMe' style={{ textDecoration: "none" }}><div className="hireMe">Hire me</div></a>

                    </div>

                    <div className="rightMainContent">
                        <div className="heroImage">
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

