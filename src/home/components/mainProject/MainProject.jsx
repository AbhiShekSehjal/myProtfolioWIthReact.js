import React from 'react'
import "./MainProject.css"

function MainProject() {
    return (
        <>
            <div className='MainProject'>My main project</div>
            <div className="card" style={{ width: "50%", margin: "0 auto", background: "url(/images/rk.png)" }}>
                <a className="cardBtn" style={{ textDecoration: "none" }} >
                    <div>
                        <p>Show</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default MainProject
