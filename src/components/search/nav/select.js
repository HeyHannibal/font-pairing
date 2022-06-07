import React, { useState } from "react";
import "../stylesheets/select.css";

export default function Select(props) {
  const [selected, setSelected] = useState("");

  function toggleHidden() {
    document.querySelector("#dropdown").classList.toggle("hidden");
  }

  function selectValue(e) {
    setSelected(e.target.textContent);
    props.returnValue(e.target.dataset.value);
  }

  return (
    <div id="select" onClick={toggleHidden}>
      <p>{selected}</p>
      <div>
        <ul id="dropdown" className="dropdown hidden">
          <li onClick={selectValue} value="">
            Custom
          </li>
          <li onClick={selectValue} value="">
            Sentence
          </li>
          <li
            onClick={selectValue}
            data-value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          >
            Alphabet
          </li>
          <li onClick={selectValue} value="">
            Paragraph
          </li>
          <li onClick={selectValue} value="">
            Numerals
          </li>
        </ul>
      </div>
    </div>
  );
}
