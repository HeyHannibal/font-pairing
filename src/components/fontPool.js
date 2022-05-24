import { useState } from "react";
import "../stylesheets/fontPool.css";

export default function FontPool(props) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function dropFont(e) {
    const updatePool = [...props.fontsInUse, e.dataTransfer.getData("font")];
    props.setFontsInUse(updatePool);
  }

  return (
    <div onDragOver={preventDefault} onDrop={dropFont} id="fontPoolContainer">
      <ul id="fontPoolList">
        {props.fontsInUse.map((font) => (
          <li style={{ fontFamily: font }}>{font}</li>
        ))}
      </ul>
    </div>
  );
}
