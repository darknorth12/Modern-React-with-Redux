import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
