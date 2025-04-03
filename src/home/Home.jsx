import React from 'react'
import Header from './components/header/Header'
import About from './components/intro/About'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function Home() {
    return (
        <div>
            <>
                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </>
        </div>
    )
}

export default Home
