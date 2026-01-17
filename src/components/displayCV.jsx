import { useState } from "react";
import Personal from "./personal.jsx";
import Education from "./edu.jsx";

function Display() {
  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState(null);

  return (
    <>
      {/* CV Preview */}
      <div id="CVPrintout">
        {personalData && (
          <div id="personalDetails">
            <strong>
              {personalData.firstName} {personalData.lastName}
            </strong>
            

            <div id="contactDetails"> 
             Email: {personalData.email} | Phone: {personalData.phoneNumber} 
              </div>
            
          </div>
        )}

        {educationData && (
          <div id="educationDetails">
            <h3>EDUCATION</h3>
            <p>
              {educationData.degree} — {educationData.graduationDate}
            </p>
            <p>
              {educationData.schoolName}, {educationData.location}
            </p>
            <p>{educationData.yesGraduated ? "Graduated" : "Not Graduated"}</p>
          </div>
        )}
      </div>

      {/* Forms (kept in their respective files) */}
      <Personal onSubmit={setPersonalData} />
      <Education onSubmit={setEducationData} />
    </>
  );
}

export default Display;