import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </div>
        <Dropdown
          label="Select a Language"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </form>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
