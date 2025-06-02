import React from 'react'
import "./ProjectCard.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ name, summery, image }) {
    return (
        <>
            <div className="projectCard">
                <i><OpenInNewIcon fontSize='large' /></i>
                <h2>{name}</h2>
                <p>{summery}</p>
                

                <div className="outerEffect"><img src={image} alt="projectImage" /></div>
            </div>
        </>
    )
}

export default ProjectCard
