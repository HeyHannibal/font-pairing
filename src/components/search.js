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
          console.log('doinit')
          if(searchInput.length === 0) {
            props.displayAll(true)
            props.setAllFonts(allGoogleFonts)
          }
          else {
          let searched = search();
          props.setAllFonts(
            searched.length > 200 ? searched.slice(0, 200) : searched
          )}
        
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [searchInput]);

  function search() {
    return allGoogleFonts.filter(
      (font) =>
        font.slice(0, searchInput.length).toLowerCase() ===
        searchInput.toLowerCase()
    );
  }


  return (
    <nav>
      <h1>{searchInput}</h1>
      {isTyping ? <p>is Typing</p> : <p>is Not Typing</p>}
      <input type="search" value={searchInput} onChange={handleChange}></input>
    </nav>
  );
}
