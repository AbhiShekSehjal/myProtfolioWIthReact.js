import React from 'react'
import "./Projects.css"
import ProjectCard from './components/ProjectCard'
import { Link } from 'react-router-dom'

function Projects() {

    const data = {
        BlogApp: {
            image: "/images/projectsImages/blog.png",
            name: "Art Blog - A Blog app",
            summery: "The blog platform is developed using Node.js, Express, MongoDB, and EJS Functionalities such as user authentication, blog creation, editing, deletion, comments, and likes",
            link: "https://art-blog-s1lg.onrender.com/"
        },
        ChatApp: {
            image: "/images/projectsImages/Chat.png",
            name: "Social E - Real-Time Chat Application",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://github.com/AbhiShekSehjal/MERN_STACK-CHAT-APP"
        },
        InstaUi: {
            image: "/images/projectsImages/instaUi.png",
            name: "Insta UI",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://insta-ui-dusky.vercel.app/"
        },
        RkFlex: {
            image: "/images/projectsImages/Rkflex.png",
            name: "Insta UI",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://github.com/AbhiShekSehjal/RkFlexThird"
        },
        WeatherApp: {
            image: "/images/projectsImages/Weather.png",
            name: "Insta UI",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://weather-app-with-react-js-one.vercel.app/"
        },
        Unit: {
            image: "/images/projectsImages/Unit.png",
            name: "Insta UI",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://html-css-ui-mu.vercel.app/"
        },
        SpeechApi: {
            image: "/images/projectsImages/SpeechApi.png",
            name: "Insta UI",
            summery: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://use-speech-api.vercel.app/"
        },
    }

    return (
        <div className="projectContent" id='projects'>
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <a className='project1' href={data.BlogApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.BlogApp.name} summery={data.BlogApp.summery} image={data.BlogApp.image} />
                </a>

                <a className='project2' href={data.ChatApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.ChatApp.name} summery={data.ChatApp.summery} image={data.ChatApp.image} />
                </a>

                <a className='project3' href={data.InstaUi.link} style={{ textDecoration: "none" }}><ProjectCard name={data.InstaUi.name} summery={data.InstaUi.summery} image={data.InstaUi.image} />
                </a>

                <a className='project3' href={data.RkFlex.link} style={{ textDecoration: "none" }}><ProjectCard name={data.RkFlex.name} summery={data.RkFlex.summery} image={data.RkFlex.image} />
                </a>

                <a className='project3' href={data.WeatherApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.WeatherApp.name} summery={data.WeatherApp.summery} image={data.WeatherApp.image} />
                </a>

                <a className='project3' href={data.Unit.link} style={{ textDecoration: "none" }}><ProjectCard name={data.Unit.name} summery={data.Unit.summery} image={data.Unit.image} />
                </a>

                <a className='project3' href={data.SpeechApi.link} style={{ textDecoration: "none" }}><ProjectCard name={data.SpeechApi.name} summery={data.SpeechApi.summery} image={data.SpeechApi.image} />
                </a>
            </div>
        </div>
    )
}

export default Projects
