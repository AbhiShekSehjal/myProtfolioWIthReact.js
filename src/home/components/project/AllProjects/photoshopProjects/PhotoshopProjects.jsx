import React from 'react'
import "./PhotoshopProjects.css"

function PhotoshopProjects() {

    const allimages = {
        image1: "/images/psProjects/cor-e2.jpg",
        Image2: "/images/psProjects/psEdit.jpg",
        Image3: "/images/psProjects/SELECTEDLOGO.jpg",
        Image4: "/images/psProjects/SOCIAL_MEDIA_AD2nd.jpg",
        Image5: "/images/psProjects/WEB_BANNER.jpg",
        Image6: "/images//psProjects/logo.jpg",
        Image7: "/images/psProjects/ps1.png",
        Image8: "/images/psProjects/ps2.png",
    }

    return (
            <div className="myProjects">
                <img src={allimages.Image3} alt="" height={"150px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image4} alt="" height={"350px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image5} alt="" width={"80%"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image7} alt="" height={"150px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image8} alt="" height={"150px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image6} alt="" height={"300px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.image1} alt="" height={"450px"} style={{ margin: "20px 50px" }} />
                <img src={allimages.Image2} alt="" height={"450px"} style={{ margin: "20px 50px" }} />
            </div >
    )
}

export default PhotoshopProjects
