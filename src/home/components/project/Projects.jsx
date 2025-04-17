import React from 'react'
import "./Projects.css"
import ProjectCard from './components/ProjectCard'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="projectContent" id='projects'>
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <Link to={"/reactProjects"} style={{ textDecoration: "none" }}><ProjectCard name="React projects" /></Link>
                <Link to={"/jsProjects"} style={{ textDecoration: "none" }}><ProjectCard name="Js projects" /></Link>
                <Link to={"/photoshopProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Photoshop projects" /></Link>
                <Link to={"/xdprojects"} style={{ textDecoration: "none" }}> <ProjectCard name="XD projects" /></Link>
                <Link to={"/htmlProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Html projects" /></Link>
                <Link to={"/angularProjects"} style={{ textDecoration: "none" }}> <ProjectCard name="Angular projects" /></Link>
            </div>
        </div>
    )
}

export default Projects
