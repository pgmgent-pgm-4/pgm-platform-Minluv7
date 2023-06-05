import { useState } from "react";

const ProgrammaRadio = ({ onChange }) => {
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
          value="Cloud Application Development"
          checked={selectedOption === "Cloud Application Development"}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
        Cloud Application Development 
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={handleOptionChange}
          value="Interactive Media Development"
          checked={selectedOption === "Interactive Media Development"}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
        Interactive Media Development
        </label>
      </div>
    </div>
  );
};

export default ProgrammaRadio;