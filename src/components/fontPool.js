import { useState } from "react";
import "../stylesheets/fontPool.css";

export default function FontPool(props) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function dropFont(e) {
    
    props.setFontsInUse(e.dataTransfer.getData("font"));
}

    function deleteFont(e) {
        props.deleteFont(e.target.dataset.font)
    }

  return (
    <div onDragOver={preventDefault} onDrop={dropFont} id="fontPoolContainer">
      <ul id="fontPoolList">
        {props.fontsInUse.map((font) => (
          <li style={{ fontFamily: font }}>{font}  
          <span onClick={deleteFont}  data-font={font} className="material-symbols-outlined">
remove
</span>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
