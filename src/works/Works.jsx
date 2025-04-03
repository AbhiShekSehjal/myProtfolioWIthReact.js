import React from 'react'
import "./Works.css"

function Works() {
    return (
        <div className="works">
            <div className="image">
                <div className="overshade"></div>
                <h1>Works</h1>
            </div>

            <div className="myProjects">
                <div className="card"><div className="cardBtn"><p>Show</p></div></div>
                <div className="card">card 1 <div className="cardBtn"><p>Show</p></div></div>
                <div className="card">card 1 <div className="cardBtn"><p>Show</p></div></div>
                <div className="card">card 1 <div className="cardBtn"><p>Show</p></div></div>
                <div className="card">card 1 <div className="cardBtn"><p>Show</p></div></div>
            </div>
        </div>
    )
}

export default Works