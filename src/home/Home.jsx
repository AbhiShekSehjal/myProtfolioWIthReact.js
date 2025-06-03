import Header from './components/header/Header'
import About from './components/intro/About'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import { useState } from 'react'

function Home() {

    const [selectedPDF, setSelectedPDF] = useState(null);

    return (
        <div
        // style={{ opacity: selectedPDF ? "0.5" : "1" }}
        >
            <Header />
            <About />
            <br />
            <br />
            <br />
            <br />
            <Experience selectedPDF={selectedPDF} setSelectedPDF={setSelectedPDF} />
            <br />
            <br />
            <br />
            <br />
            <Projects />
            <br />
            <br />
            <br />
            <br />
            <Contact />
            {/* <Tools /> */}
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Home
