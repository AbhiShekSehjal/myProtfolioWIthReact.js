import React from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import "./Contact.css"
import Form from './components/Form';

function Contact() {
    return (
        <div className="ContactMe" style={{ textAlign: "center"}}>
            <div className='ContactMeText' id='contactMe' >Contact Me</div>
            <p className='ContactMeTextPera'>Do you have a project in your mind,contact me here.</p>
            <div className="boxes">
                <div className="addressBox">
                    <h2 className='findMe'>Find me <i className='iconFindMe'><NearMeIcon /></i></h2>
                    <div className='email'><i className='EmailIcon'><EmailIcon /></i> Email: shek54112@gmail.com</div>
                    <div className='mobileNO'><i className='CallIcon'><CallIcon /></i> Mobile: +91 78883-39102</div>
                    <div className="outerEffect2"></div>
                </div>
                
                <div className="ContactBox">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
