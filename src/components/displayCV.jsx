import { useState } from "react";
import Personal from "./personal.jsx";
import Education from "./edu.jsx";

function Display() {
  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState([]); // ✅ ARRAY

  return (
    <>
      {/* CV Preview */}
{personalData && (
  <div id="CVPrintout">
    {/* Personal Details */}
    <div id="personalDetails">
      <strong>
        {personalData.firstName} {personalData.lastName}
      </strong>

      <div id="contactDetails">
        Email: {personalData.email} | Phone: {personalData.phoneNumber}
      </div>
    </div>

    {/* Education Details */}
    {educationData.length > 0 && (
      <div id="educationDetails">
        <h3>EDUCATION</h3>

        {educationData.map((edu, index) => (
          <div key={index} className="educationItem">
            <p>
              <strong>{edu.schoolName}</strong>, {edu.location}
            </p>

            <p>
              {edu.degree} — {edu.graduationDate}
            </p>

            <p>
              {edu.yesGraduated ? "Graduated" : "Not Graduated"}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
)}

     

      {/* Forms */}
      <Personal onSubmit={setPersonalData} />
      <p>
      <Education onSubmit={setEducationData} />
      </p>

    </>
  );
}

export default Display;