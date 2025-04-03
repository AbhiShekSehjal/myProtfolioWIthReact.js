import React, { useState } from 'react'
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';

function Form() {

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
        <form onSubmit={handleSubmit}>
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
    )
}

export default Form
