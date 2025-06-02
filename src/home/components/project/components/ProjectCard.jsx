import React from 'react'
import "./ProjectCard.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ name, summery }) {
    return (
        <>
            <div className="projectCard">
            <i><OpenInNewIcon fontSize='large' /></i>
                <h2>{name}</h2>
                <p>{summery}</p>

                <div className="outerEffect"></div>
            </div>
        </>
    )
}

export default ProjectCard
