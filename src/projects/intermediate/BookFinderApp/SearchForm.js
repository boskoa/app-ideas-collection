import { useState } from "react";

const SearchForm = ({ setTerm }) => {
  const [searched, setSearched] = useState("");
  const handleSubmit = () => {
    setTerm(searched);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div id="input-container">
      <div id="input-group">
        <input
          id="term"
          name="term"
          type="text"
          placeholder="Search for books, authors or publication dates"
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <button
          id="clear"
          className="fa fa-times"
          onMouseDown={() => (document.getElementById("term").value = "")}
        />
      </div>
      <button
        onMouseDown={handleSubmit}
        id="search"
        type="submit"
        className="fa fa-search"
      />
    </div>
  );
};

export default SearchForm;
