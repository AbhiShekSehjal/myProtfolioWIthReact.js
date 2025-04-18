import React from 'react'
import "./PhotoshopProjects.css"

function PhotoshopProjects() {
    return (
        <div className="myProjects">
            {/* <div className="card"><img src="/public/images/psProjects/WEB_BANNER.jpg" alt="" /></div>
            <div className="card"><img src="/public/images/psProjects/SOCIAL_MEDIA_AD2nd.jpg" alt="" /></div> */}
            <a href="/public/images/psProjects/WEB_BANNER.jpg" className='card'>
                <img src="/public/images/psProjects/SOCIAL_MEDIA_AD2nd.jpg" alt="" />
            </a>
        </div>
    )
}

export default PhotoshopProjects
