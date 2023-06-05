import { useState } from "react";

const TeamRadio = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (ev) => {
    const text = ev.currentTarget.value;
    setSelectedOption(text);
    console.log(text)

    if (typeof onChange === 'function') {
      onChange(text);
    }
  };

return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={handleOptionChange}
          value="Student"
          checked={selectedOption === "Student"}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
        Student
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={handleOptionChange}
          value="Teacher"
          checked={selectedOption === "Teacher"}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Teacher
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          onChange={handleOptionChange}
          value="Alumnus"
          checked={selectedOption === "Alumnus"}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
         Alumnus
        </label>
      </div>
    </div>
  );
};

export default TeamRadio;