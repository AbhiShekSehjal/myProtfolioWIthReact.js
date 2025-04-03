import React from 'react'
import "./Projects.css"
import ProjectCard from './components/ProjectCard'

function Projects() {
    return (
        <div className="projectContent">
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <ProjectCard name="React projects" />
                <ProjectCard name="Js projects" />
                <ProjectCard name="Photoshop projects" />
                <ProjectCard name="XD projects" />
                <ProjectCard name="Html projects" />
                <ProjectCard name="Angular projects" />
            </div>
        </div>
    )
}

export default Projects
