import React from 'react'
import "./ProjectCard.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ name, summary, image }) {
    return (
        <>
            <div className="projectCard">
                <i><OpenInNewIcon fontSize='large' /></i>
                <h2>{name}</h2>
                <p>{window.innerWidth < 500 && summary.length > 200 ? summary.substring(0, 200) + '....' : summary} </p>
                <div className="outerEffect"><img src={image} alt="projectImage" /></div>
            </div>
        </>
    )
}

export default ProjectCard
