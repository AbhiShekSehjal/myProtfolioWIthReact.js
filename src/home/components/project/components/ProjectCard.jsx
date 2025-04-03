import React from 'react'
import "./ProjectCard.css"
import SourceIcon from '@mui/icons-material/Source';

function ProjectCard({name}) {
    return (
        <div className="projectCard">
            <i><SourceIcon fontSize='large' /></i>
            <h2>{name}</h2>
            <div className="outerEffect"></div>
        </div>
    )
}

export default ProjectCard
