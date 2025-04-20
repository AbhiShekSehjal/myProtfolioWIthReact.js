import React from 'react'

function XdProjects() {
    return (
        <div className="xd" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <video width="50%"
                // controls
                autoPlay
                muted
                playsInline
                loop
                style={{ marginTop: "50px", display: 'block' }}>
                <source src="/videos/xdShowcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default XdProjects
