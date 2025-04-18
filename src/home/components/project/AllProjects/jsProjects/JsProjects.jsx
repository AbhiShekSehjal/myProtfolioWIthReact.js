import React from 'react'
import "./JsProjects.css"

function JsProjects() {
    const projects = {
        rkFlex: "https://rk-flex-second.vercel.app/",
        SpeechRecognitionApp: "https://use-speech-api-xwbn.vercel.app/",
    }


    return (
        <div className="container">
            <div className="myProjects">
                <h1>1st</h1>
                <div className="card" style={{ width: "100%", background: "url(/public/images/rk.png)" }}>
                    <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.rkFlex.toString()}>
                        <div>
                            <p>Show</p>
                        </div>
                    </a>
                </div>

                <h1>2nd</h1>
                <div className="card" style={{ width: "100%", background: "url(/public/images/SpeechRecognition.webp)" ,backgroundSize:"cover",backgroundPosition:"center"}}>
                    <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.SpeechRecognitionApp.toString()}>
                        <div>
                            <p>Show</p>
                        </div>
                    </a>
                </div>

                <h1>3rd</h1>
                <div className="card" style={{ width: "100%", background: "url(/public/images/rk.png)" }}>
                    <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.rkFlex.toString()}>
                        <div>
                            <p>Show</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default JsProjects
