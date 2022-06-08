import React, { useState, useEffect } from "react";
import { webFontLoaderRequestArray } from "../../../allGoogleFontsArray";

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
          props.setNewRequest(webFontLoaderRequestArray);
        } else {
          let searched = search();
          props.setNewRequest(
            searched.length > 100 ? searched.slice(0, 100) : searched
          );
        }
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [searchInput]);

  function search() {
    return webFontLoaderRequestArray.filter(
      (font) =>
        font.split(":")[0].slice(0, searchInput.length).toLowerCase() ===
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
