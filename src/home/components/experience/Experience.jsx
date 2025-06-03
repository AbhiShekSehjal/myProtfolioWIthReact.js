import "./Experience.css"
import ExperienceCard from './components/ExperienceCard/ExperienceCard'

function Experience({ selectedPDF, setSelectedPDF }) {

    const Certificates = {
        UnifiedMentor: "https://res.cloudinary.com/dtotogjvb/image/upload/v1748936591/1748573539396-edf8a15a-f94a-4143-9209-40998ee40f79_1_zph75p.jpg"
    }

    const handleOnClick = (PDF) => {
        if (!selectedPDF) {
            setSelectedPDF(PDF);
        } else {
            setSelectedPDF(null)
        }
    };

    const closePDF = () => {
        if (selectedPDF) {
            setSelectedPDF(null);
        }
    }

    const experienceAboutWork = [
        "Developed and deployed Art Blog, a full-featured blog application using Node.js, Express.js, MongoDB, and EJS",
        "Implemented complete user authentication with login/signup, blog CRUD operations, and like/comment functionalities",
        "Focused on writing clean, modular code and solving real-world web development problems"
    ];


    return (
        <div className="experienceContent" id='experience'>
            <div className='experienceText'>Experience</div>

            <div className="experienceBoxes">
                <ExperienceCard
                    jobTitle="Full stack developer"
                    isInternship={true}
                    handleOnClick={() => handleOnClick(Certificates.UnifiedMentor)}
                    handlePDFClose={() => closePDF()}
                    selectedPDF={selectedPDF}
                    setSelectedPDF={setSelectedPDF}
                    companyName="Unified Mentor"
                    timePeriod="1 Month"
                    experienceAboutWork={experienceAboutWork} />
            </div>
        </div>
    )
}

export default Experience
