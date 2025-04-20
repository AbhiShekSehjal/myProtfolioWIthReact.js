import React from 'react'
import "./ReactProjects.css"

function ReactProjects() {

    const projects = {
        weatherApp: "https://weather-app-with-react-js-one.vercel.app/",
        JokeApi: "https://jokes-api-pearl.vercel.app/"
    }
    return (
        <div className="container">
            <div className="myProjects">
                <div className="card" style={{ width: "60%", background: "url(https://cdn.prod.website-files.com/5f52cb73016fed9a30bb4d95/662be4644d01b0954a16e557_og-weather.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.weatherApp.toString()}>
                        <div>
                            <p>Show</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="myProjects">
                <div className="card" style={{ width: "60%", background: "url(https://assets3.thrillist.com/v1/image/3002368/792x416/scale;webp=auto;jpeg_quality=60;progressive.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.JokeApi.toString()}>
                        <div>
                            <p>Show</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ReactProjects
