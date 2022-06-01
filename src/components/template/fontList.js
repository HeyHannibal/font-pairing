import { useState } from "react";
import "./style/fontPool.css";
export default function FontPool(props) {
  const { docFonts, dropFont, preventDefault } = props;

  function deleteFont(e) {
    props.deleteFont(e.target.dataset.font);
  }

  return <div id="fontPoolContainer"></div>;
}

{
  /* <div id="fontPoolContainer">
<div onDragOver={preventDefault} onDrop={dropFont}>
  <ul id="fontPoolList">
    {props.fontsInUse.map((font) => (
      <li style={{ fontFamily: font }}>
        {font}
        <span
          onClick={deleteFont}
          data-font={font}
          className="material-symbols-outlined"
        >
          remove
        </span>
      </li>
    ))}
  </ul>
</div>
</div> */
}
