import { useState } from "react";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      style={{
        color: props.color,
        fontSize: props.fontSize + "px",
        width: props.width,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function Education({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  const [educations, setEducations] = useState([
    {
      schoolName: "",
      location: "",
      degree: "",
      graduationDate: "",
      yesGraduated: false,
    },
  ]);

  const toggleView = () => setIsVisible(prev => !prev);

  const addEducation = () => {
    setEducations(prev => [
      ...prev,
      {
        schoolName: "",
        location: "",
        degree: "",
        graduationDate: "",
        yesGraduated: false,
      },
    ]);
  };

const deleteEducation = (index) => {
  setEducations(prev => {
    const updated = prev.filter((_, i) => i !== index);
    onSubmit(updated); // 🔥 live sync
    return updated;
  });
};

  const handleChange = (index, field, value) => {
    setEducations(prev =>
      prev.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(educations); // send ALL education entries up
    setIsVisible(false);
  };

  return (
    <div id="educationSection">
      <div id="header2">
        <h3>
          Educational History{" "}
          <Button
            text={isVisible ? "Hide" : "View"}
            color="blue"
            fontSize={12}
            width="70px"
            onClick={toggleView}
          />
        </h3>
      </div>

 


      {isVisible && (
        <div id="formbox">
          <form onSubmit={handleSubmit}>
            {educations.map((edu, index) => (
              <div key={index} className="educationForm">
                
                
     <h4>
  Education #{index + 1}
  {educations.length > 1 && (
    <button
      type="button"
      onClick={() => deleteEducation(index)}
      style={{ marginLeft: "10px", color: "red" }}
    >
      ✕
    </button>
  )}
</h4>


                <label>
                  School Name:
                  <input
                  type="text"
                    value={edu.schoolName}
                    placeholder="Colburt High"
                    onChange={e =>
                      handleChange(index, "schoolName", e.target.value)
                    }
                  />
                </label>

                <label>
                  Location:
                  <input
                  type="text"
                    value={edu.location}
                    placeholder="Toronto, ON"
                    onChange={e =>
                      handleChange(index, "location", e.target.value)
                    }
                  />
                </label>

                <label>
                  Degree:
                  <input
                  type="text"
                    value={edu.degree}
                    placeholder="Bachelor of Arts"
                    onChange={e =>
                      
                      handleChange(index, "degree", e.target.value)
                    }
                  />
                </label>

                <label>
                  Graduation Date:
                  <input
                  type="text"
                    value={edu.graduationDate}
                    placeholder="2010"
                    onChange={e =>
                      handleChange(index, "graduationDate", e.target.value)
                    }
                  />
                </label>

                <label>
                  Graduated?
                  <input
                    type="checkbox"
                    checked={edu.yesGraduated}
                    onChange={e =>
                      handleChange(index, "yesGraduated", e.target.checked)
                    }
                  />
                </label>

                <hr />
              </div>
            ))}
<div id="addDelSect">
           <Button
  text="+ Add Education"
  
  color="green"
  borderColor="green"
  fontSize={12}
  width="120px"
  type="button"   // 🔥 THIS IS REQUIRED
  onClick={addEducation}
/>

{/*
       <Button
  text="- Delete Education"
  color="green"
  borderColor="green"
  fontSize={12}
  width="120px"
  type="button"   // 🔥 THIS IS REQUIRED
  onClick={deleteEducation}
/>
*/}
</div>

            <br /><br />

            <Button
              text="Update"
              color="blue"
              fontSize={12}
              width="70px"
              type="submit"
            />
          </form>
        </div>
      )}
    </div>
  );
}





export default Education;
