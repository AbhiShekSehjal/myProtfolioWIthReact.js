import React, { useState } from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import "./Contact.css"
import { v4 as uuidv4 } from 'uuid';

function Contact() {

    const [user, setUser] = useState({
        id: uuidv4(),
        name: "",
        email: "",
        msg: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: "",
            email: "",
            msg: ""
        });
    }

    const handleInputChange = (e) => {
        setUser((currentValue) => {
            return { ...currentValue, [e.target.name]: e.target.value }
        });
    }

    return (
        <div className="ContactMe" style={{ textAlign: "center" }}>
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
                    <form onSubmit={() => handleSubmit()}>
                        <input
                            id='name'
                            type="text"
                            placeholder='Name'
                            value={user.name}
                            onChange={handleInputChange}
                            name='name'
                        />
                        <input
                            id='email'
                            type="email"
                            placeholder='Eamil'
                            value={user.email}
                            onChange={handleInputChange}
                            name='email'
                        />
                        <textarea
                            id='msg'
                            type="text"
                            placeholder='Message !'
                            value={user.msg}
                            onChange={handleInputChange}
                            name='msg'
                        />

                        <button className='sendBtn' type='submit'><a href="#hireButton">Send</a></button>

                    </form>
                </div>

            </div>
            <p className='extraInfo' style={{ margin: "60px auto", width: "40%", textAlign: "center", fontStyle: 'italic', lineHeight: "50px" }}>Full Stack Developer with
                expertise in modern web
                technologies, including React.js,
                i18n, Node.js, Express.js, MySQL,
                MongoDB and EJS. Passionate about
                building scalable applications and
                solving complex problems. Adept at
                collaborating in team environments
                and continuously expanding
                technical knowledge.</p>
        </div>
    )
}

export default Contact
