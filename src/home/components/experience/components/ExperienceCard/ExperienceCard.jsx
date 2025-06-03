import "./ExperienceCard.css"
import LinkIcon from '@mui/icons-material/Link';

function ExperienceCard({
    jobTitle,
    isInternship,
    selectedPDF,
    handleOnClick,
    handlePDFClose,
    companyName,
    timePeriod,
    experienceAboutWork
}) {
    return (
        <>
            {selectedPDF && (
                <div className="selectedPDFBox">
                    <img className="selectedPDFBoxImage" src={selectedPDF} />
                    <button className="selectedPDFBoxCloseBtn" onClick={handlePDFClose}>X</button>
                </div >
            )
            }
            <div className='experienceCard'>
                <div className="title" style={{ marginBottom: "30px" }}>{jobTitle}
                    <div className="isInternship">{isInternship && "Internship"}</div>

                    <div className="certificatePDF" onClick={handleOnClick}><LinkIcon />Certificate PDF</div>

                </div>

                <div className="companyName" style={{ marginBottom: "15px" }}>{companyName}
                    <div className="timePeriod">{timePeriod}</div>
                </div>

                <ul className='experienceAboutWork'>
                    {experienceAboutWork.map((line, index) => (
                        <li key={index} style={{ marginBottom: "10px" }} className="lines">{line}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ExperienceCard
