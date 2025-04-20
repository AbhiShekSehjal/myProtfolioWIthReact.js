import React from 'react'
import "./HtmlProjects.css"

function HtmlProjects() {

  const projects = {
    instaUi: "https://insta-ui-dusky.vercel.app/",
    UnitFarmUI: "https://html-css-ui-mu.vercel.app/"
  }

  return (
    <div className="container">
      <div className="myProjects">
        <div className="card" style={{ width: "60%", background: "url(/images/instaUi.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.instaUi.toString()}>
            <div>
              <p>Show</p>
            </div>
          </a>
        </div>
      </div>
      <div className="myProjects">
        <div className="card" style={{ width: "60%", background: "url(/images//UnitFarm.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <a className="cardBtn" style={{ textDecoration: "none" }} href={projects.UnitFarmUI.toString()}>
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
