import React from 'react'
import "./HtmlProjects.css"

function HtmlProjects() {

  const projects = {
    instaUi: "https://insta-ui-dusky.vercel.app/"
  }

  return (
    <div className="container">
      <div className="myProjects">
        <h1>1st</h1>
        <div className="card" style={{ width: "100%", background: "url(/public/images/instaUi.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.instaUi.toString()}>
            <div>
              <p>Show</p>
            </div>
          </a>
        </div>

      </div>

    </div>
  )
}

export default HtmlProjects
