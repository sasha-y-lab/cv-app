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

function Work({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  const [works, setWorks] = useState([
    {
      companyName: "",
      location: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const toggleView = () => setIsVisible(prev => !prev);

  const addWork = () => {
    setWorks(prev => [
      ...prev,
      {
        companyName: "",
      location: "",
      position: "",
      startDate: "",
      endDate: "",

      },
    ]);
  };

const deleteWork = (index) => {
  setWorks(prev => {
    const updated = prev.filter((_, i) => i !== index);
    onSubmit(updated); // 🔥 live sync
    return updated;
  });
};

  const handleChange = (index, field, value) => {
    setWorks(prev =>
      prev.map((work, i) =>
        i === index ? { ...work, [field]: value } : work
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(works); // send ALL work entries up
    setIsVisible(false);
  };

  return (
    <div id="workSection">
      <div id="header2">
        <h3>
          Work Experience{" "}
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
            {works.map((work, index) => (
              <div key={index} className="workForm">
                
                
     <h4>
  Work #{index + 1}
  {works.length > 1 && (
    <button
      type="button"
      onClick={() => deleteWork(index)}
      style={{ marginLeft: "10px", color: "red" }}
    >
      ✕
    </button>
  )}
</h4>


                <label>
                  Company Name:
                  <input
                  type="text"
                    value={work.companyName}
                    placeholder="Fortinos"
                    onChange={e =>
                      handleChange(index, "companyName", e.target.value)
                    }
                  />
                </label>

                <label>
                  Location:
                  <input
                  type="text"
                    value={work.location}
                    placeholder="Toronto, ON"
                    onChange={e =>
                      handleChange(index, "location", e.target.value)
                    }
                  />
                </label>

                <label>
                  Position:
                  <input
                  type="text"
                    value={work.position}
                    placeholder="Dietian"
                    onChange={e =>
                      
                      handleChange(index, "position", e.target.value)
                    }
                  />
                </label>

                <label>
                  Start Date:
                  <input
                  type="calendar"
                    value={work.startDate}
                    placeholder="2010"
                    onChange={e =>
                      handleChange(index, "startDate", e.target.value)
                    }
                  />
                </label>

                <label>
                  End Date:
                  <input
                    type="calendar"
                    placeholder="2023"
                    value={work.endDate}
                    onChange={e =>
                      handleChange(index, "endDate", e.target.value)
                    }
                  />
                </label>

                <hr />
              </div>
            ))}
<div id="addDelSect">
           <Button
  text="+ Add Work"
  
  color="green"
  borderColor="green"
  fontSize={12}
  width="120px"
  type="button"   // 🔥 THIS IS REQUIRED
  onClick={addWork}
/>

{/*
       <Button
  text="- Delete Education"
  color="green"
  borderColor="green"
  fontSize={12}
  width="120px"
  type="button"   // 🔥 THIS IS REQUIRED
  onClick={deleteWork}
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





export default Work;
