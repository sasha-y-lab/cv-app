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
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [yesGraduated, setYesGraduated] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => setIsVisible(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data UP to Display.jsx
    onSubmit({ schoolName, location, degree, graduationDate, yesGraduated });
    setIsVisible(false); // hide form after submit
  };

  return (
    <div id="educationSection">
      {/* Toggle button */}
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

      {/* Form below toggle */}
      {isVisible && (
        <div id="formbox">
          <form onSubmit={handleSubmit}>
            <label>
              School Name:
              <input placeholder="Colburt High" value={schoolName} onChange={e => setSchoolName(e.target.value)} />
            </label>

            <label>
              Location:
              <input value={location} placeholder="Toronto,ON" onChange={e => setLocation(e.target.value)} />
            </label>

            <label>
              Degree:
              <input value={degree} placeholder="Bachelors of Arts" onChange={e => setDegree(e.target.value)} />
            </label>

            <label>
              Graduation Date:
              <input value={graduationDate} placeholder="2010" onChange={e => setGraduationDate(e.target.value)} />
            </label>

            <label>
              Graduated?
              <input type="checkbox" checked={yesGraduated} onChange={e => setYesGraduated(e.target.checked)} />
            </label>

            <Button text="Update" color="blue" fontSize={12} width="70px" type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Education;
