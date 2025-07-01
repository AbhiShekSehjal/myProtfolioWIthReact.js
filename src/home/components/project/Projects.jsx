import React from 'react'
import "./Projects.css"
import ProjectCard from './components/ProjectCard'
import { Link } from 'react-router-dom'

function Projects() {

    const data = {
        BlogApp: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750608156/Screenshot_2025-06-22_213158_lmub3o.png",
            name: "Art Blog - A Blog app",
            summary: "The blog platform is developed using Node.js, Express, MongoDB, and EJS Functionalities such as user authentication, blog creation, editing, deletion, comments, and likes",
            link: "https://art-blog-s1lg.onrender.com/"
        },
        ChatApp: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750607082/Screenshot_2025-06-02_165127_p5vqx5.png",
            name: "Social E - Real-Time Chat Application",
            summary: "Built a real-time messaging app using React and Socket.io with JWT-based auth. Users can create accounts, log in securely, and chat in real-time. Tech stack: MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS, DaisyUI.",
            link: "https://github.com/AbhiShekSehjal/MERN_STACK-CHAT-APP"
        },
        InstaUi: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750607082/Screenshot_2025-06-02_172248_dz2uwv.png",
            name: "Insta UI",
            summary: "A static clone of Instagram's interface created with HTML and CSS. This project replicates the platform's layout, including stories, feed, and navigation bar, offering a pixel-perfect design that mirrors the real app. It demonstrates strong front-end development skills, with attention to responsive design and interactive UI behaviors—all without using any frameworks.",
            link: "https://insta-ui-dusky.vercel.app/"
        },
        RkFlex: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1751383540/Screenshot_2025-07-01_123746_xsff2b.png",
            name: "Rk Flex - E-commerce website to buy designing walls",
            summary: "Rk FleX is a real-time e-commerce website using the MERN stack. Implemented payment gateway using Razorpay. User can search the product by name, by color, by pattern of wallpaper and also can filter the product by cost.",
            link: "https://rk-flex-frontend.onrender.com/"
        },
        WeatherApp: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750607082/Screenshot_2025-06-02_174838_ry9e9e.png",
            name: "Weather App (React.js)",
            summary: "This weather application, built with React.js and powered by the OpenWeatherMap API, allows users to check real-time weather conditions for any city worldwide. It showcases temperature, humidity, and wind speed with a clean, modern interface. Developed using Vite for fast performance and deployed on Vercel, the app is responsive and user-friendly across devices.",
            link: "https://weather-app-with-react-js-one.vercel.app/"
        },
        Unit: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750607086/Screenshot_2025-06-02_175028_pl2bum.png",
            name: "Unit - HTML & CSS Project",
            summary: "A responsive and visually appealing website built using HTML5 and CSS3. It showcases a clean layout, well-structured content, and custom styling. This project highlights my understanding of modern frontend design principles, cross-device compatibility, and attention to detail.",
            link: "https://html-css-ui-mu.vercel.app/"
        },
        SpeechApi: {
            image: "https://res.cloudinary.com/dtotogjvb/image/upload/v1750607081/Screenshot_2025-06-02_175323_zny4xg.png",
            name: "Speech Recognition App",
            summary: "I have developed a speech recognition app using JavaScript and an API, enabling seamless voice-to-text conversion. This app leverages advanced speech recognition technology to transcribe spoken words into written text accurately and efficiently. It's a great example of how modern APIs can enhance user experience and simplify communication processes.",
            link: "https://use-speech-api.vercel.app/"
        },
    }

    return (
        <div className="projectContent" id='projects'>
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <a href={data.BlogApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.BlogApp.name} summary={data.BlogApp.summary} image={data.BlogApp.image} />
                </a>

                <a href={data.ChatApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.ChatApp.name} summary={data.ChatApp.summary} image={data.ChatApp.image} />
                </a>


                <a href={data.RkFlex.link} style={{ textDecoration: "none" }}><ProjectCard name={data.RkFlex.name} summary={data.RkFlex.summary} image={data.RkFlex.image} />
                </a>

                <a href={data.WeatherApp.link} style={{ textDecoration: "none" }}><ProjectCard name={data.WeatherApp.name} summary={data.WeatherApp.summary} image={data.WeatherApp.image} />
                </a>

                <a href={data.Unit.link} style={{ textDecoration: "none" }}><ProjectCard name={data.Unit.name} summary={data.Unit.summary} image={data.Unit.image} />
                </a>

                <a href={data.SpeechApi.link} style={{ textDecoration: "none" }}><ProjectCard name={data.SpeechApi.name} summary={data.SpeechApi.summary} image={data.SpeechApi.image} />
                </a>

                <a href={data.InstaUi.link} style={{ textDecoration: "none" }}><ProjectCard name={data.InstaUi.name} summary={data.InstaUi.summary} image={data.InstaUi.image} />
                </a>
            </div>
        </div>
    )
}

export default Projects
