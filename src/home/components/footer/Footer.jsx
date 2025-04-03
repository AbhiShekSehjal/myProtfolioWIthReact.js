import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    const links = {
        InstaLink: "https://www.instagram.com/abhi_sehjal09/",
        FbLink: false,
        GitLink: "https://github.com/AbhiShekSehjal",
        LinkedInLink: "https://www.linkedin.com/in/abhi-shek-4a78a5353/",
    }

    return (
        <div className="footer">
            <div className="MyName" >Abhisehk Sehjal</div>

            <div className="pageLinksOfFooter">
                <ul>
                    <li><a href="#pageLinks">Home</a></li>
                    <li><a href="#pageLinks">About</a></li>
                    <li><a href="#pageLinks">Project</a></li>
                    <li><a href="#pageLinks">Contact</a></li>
                </ul>
            </div>

            <div className="socialMedialinks">

                <a href={links.InstaLink.toString()}><InstagramIcon fontSize='small' /></a>
                <a href={links.FbLink.toString()}><FacebookIcon fontSize='small' /></a>
                <a href={links.GitLink.toString()}><GitHubIcon fontSize='small' /></a>
                <a href={links.LinkedInLink.toString()}><LinkedInIcon fontSize='small' /></a>

            </div>


            <p className='footerLastLine'>Created by © <a href="#" style={{ color: "blue" }}>Abhishek Sehjal</a></p>
        </div>
    )
}

export default Footer
