import React from 'react'
import "./Header.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {

    const links = {
        InstaLink: "https://www.instagram.com/abhi_sehjal09/",
        FbLink: false,
        GitLink: "https://github.com/AbhiShekSehjal",
        LinkedInLink: "https://www.linkedin.com/in/abhi-shek-4a78a5353/",
    }

    return (
        <div>
            <div className="mainContent">
                <div className="leftMainContent">

                    <h1>I'm <span className='spanText2'>Web Developer</span></h1>
                    <p className='mainPera'>Frontend Developer With A Passion For Creating Visually Stunning And User-Friendly Websites.</p>

                    <div className="socialMedialinks">

                        <a href={links.InstaLink.toString()}><InstagramIcon fontSize='small' /></a>
                        <a href={links.FbLink.toString()}><FacebookIcon fontSize='small' /></a>
                        <a href={links.GitLink.toString()}><GitHubIcon fontSize='small' /></a>
                        <a href={links.LinkedInLink.toString()}><LinkedInIcon fontSize='small' /></a>

                    </div>

                    <div className="hireMe">Hire me</div>

                </div>

                <div className="rightMainContent">
                    <div className="heroImage"></div>
                </div>
            </div>
        </div>
    )
}

export default Header

