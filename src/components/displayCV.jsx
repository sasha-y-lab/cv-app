import { useState } from "react";
import Personal from "./personal.jsx";
import Education from "./edu.jsx";
import Work from "./work.jsx";

function Display() {
  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState([]); // ✅ ARRAY
  const [workData, setWorkData] = useState([]);

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

    {/* Work Details */}
    {workData.length > 0 && (
      <div id="workDetails">
        <h3>WORK</h3>

        {workData.map((work, index) => (
          <div key={index} className="workItem">
           

            <p>
              {work.position}
            </p>

 <p>
              <strong>{work.companyName}</strong>, {work.location}
            </p>

             <p>
              {work.startDate} — {work.endDate}
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
<p>
      <Work onSubmit={setWorkData} />
</p>

    </>
  );
}

export default Display;