import React, { useState, useEffect } from "react";
import { defaultRequest } from "../googleFontList";
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
        if (searchInput.length === 0) {
          props.displayAll(true);
          props.setAllFonts(defaultRequest);
        } else {
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
    return defaultRequest.filter(
      (font) =>
        font.slice(0, searchInput.length).toLowerCase() ===
        searchInput.toLowerCase()
    );
  }

  return (
    <nav>
      <input
        type="search"
        placeholder="Search Fonts"
        value={searchInput}
        onChange={handleChange}
      ></input>
    </nav>
  );
}
