import React, { useState, useEffect } from "react";
import { allGoogleFonts } from "../allGoogleFonts";
export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        if (search().length > 0) {
          let searched = search();
          props.setAllFonts(
            searched.length > 200 ? searched.slice(0, 200) : searched
          );
        }
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [searchInput]);

  function search() {
    console.log(searchInput);
    return allGoogleFonts.filter(
      (font) =>
        font.slice(0, searchInput.length).toLowerCase() ===
        searchInput.toLowerCase()
    );
  }

  const logThis = () => console.log(searchInput);

  return (
    <nav>
      <button onClick={logThis}>Log</button>
      <h1>{searchInput}</h1>
      {isTyping ? <p>is Typing</p> : <p>is Not Typing</p>}
      <input type="search" value={searchInput} onChange={handleChange}></input>
    </nav>
  );
}
