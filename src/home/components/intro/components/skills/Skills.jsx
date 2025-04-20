import React from 'react'
import "./Skills.css"

function Skills() {
    return (
        <div className='skills'>
            <div className="skillBox">
                <h2>Skills</h2>

                <ul className='list' >
                    <li><h3>Frontend</h3></li>
                    <li className='skill'>HTML</li>
                    <li className='skill'>CSS</li>
                    <li className='skill'>JavaScript</li>
                    <li className='skill'>Bootstrap</li>
                    <li className='skill'>Tailwind</li>
                    <li className='skill'>jQuary</li>
                    <li className='skill'>React.js</li>
                    <li className='skill'>Angular</li>
                </ul>


                <ul className='list' >
                    <li><h3>Backend</h3></li>
                    <li className='skill'>Node.js</li>
                    <li className='skill'>Express.js</li>
                </ul>


                <ul className='list' >
                    <li><h3>Database</h3></li>
                    <li className='skill'>MongoDB</li>
                    <li className='skill'>MySQL</li>
                </ul>

                <ul className='list' >
                    <li><h3>Designing</h3></li>
                    <li className='skill'>AdobePhotoshop</li>
                    <li className='skill'>Adobe XD</li>
                    <li className='skill'>Figma</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
