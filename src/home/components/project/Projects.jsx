import React from 'react'
import "./Projects.css"
import ProjectCard from './components/ProjectCard'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="projectContent" id='projects'>
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                {/* <Link to={"/reactProjects"} style={{ textDecoration: "none" }}><ProjectCard name="React projects" /></Link>
                <Link to={"/jsProjects"} style={{ textDecoration: "none" }}><ProjectCard name="Js projects" /></Link>
                <Link to={"/photoshopProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Photoshop projects" /></Link>
                <Link to={"/xdprojects"} style={{ textDecoration: "none" }}> <ProjectCard name="XD projects" /></Link>
                <Link to={"/htmlProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Html projects" /></Link>
                <Link to={"/angularProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Angular projects" /></Link> */}


                <a className='project1' href="https://art-blog-s1lg.onrender.com/" style={{ textDecoration: "none" }}><ProjectCard name="Art Blog - A Blog app" summery="The blog platform is developed using Node.js, Express, MongoDB, and EJS
                Functionalities such as user authentication, blog creation, editing, deletion,
                comments, and likes"/>
                </a>

                <a className='project2' href="https://github.com/AbhiShekSehjal/MERN_STACK-CHAT-APP" style={{ textDecoration: "none" }}><ProjectCard name="Social E - Real-Time Chat Application" summery="Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI." />
                </a>

                <a className='project' href="https://art-blog-s1lg.onrender.com/" style={{ textDecoration: "none" }}><ProjectCard name="Art Blog" summery="The blog platform is developed using Node.js, Express, MongoDB, and EJS
                Functionalities such as user authentication, blog creation, editing, deletion,
                comments, and likes"/>
                </a>
            </div>
        </div>
    )
}

export default Projects
