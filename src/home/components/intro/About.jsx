import React from 'react'
import "./About.css"
import Skills from './components/skills/Skills'
import Intro from './components/intro/Intro'

function About() {
    return (
        <div className="aboutContent">
            <div className='AboutText'>About me</div>

            <div className="aboutBoxes">
                <Intro />

                <Skills />
            </div>
        </div>
    )
}

export default About
