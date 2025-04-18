import React from 'react'
import "./Skills.css"

function Skills() {
    return (
        <div className='skills'>
            <div className="skillBox">
                <h2>Skills</h2>

                <ul className='list' >
                    <li><h3>Frontend</h3></li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>jQuary</li>
                    <li>React.js</li>
                    <li>Angular</li>
                </ul>


                <ul className='list' >
                    <li><h3>Backend</h3></li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                </ul>


                <ul className='list' >
                    <li><h3>Database</h3></li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>

                <ul className='list' >
                    <li><h3>Designing</h3></li>
                    <li>AdobePhotoshop</li>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
