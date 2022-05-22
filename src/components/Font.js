import { useState, useEffect } from "react";
import WebFont from "webfontloader";

import Search from "./search";

export default function Font() {
  const [allFonts, setAllFonts] = useState([]);
  const [headerFont, setHeaderFont] = useState("Courier New");

  useEffect(() => {
    if (allFonts.length <= 0)
      fetch(
        "https://content-webfonts.googleapis.com/v1/webfonts?sort=popularity&key=AIzaSyDW0w6ucuBcNQXgzhBmyuWXLiDn5R5MqdM"
      )
        .then((res) => res.json())
        .then((res) =>
          setAllFonts(res.items.slice(0, 200).map((font) => font.family))
        );
    if (allFonts.length > 0) {
      WebFont.load({
        google: {
          families: allFonts,
        },
      });
    }
  });

  function conThis() {
    console.log(allFonts);
  }

  function changeHeaderFont(e) {
    console.log(e.target.textContent);
    setHeaderFont(e.target.textContent);
  }

  return (
    <div>
    <nav>
      <Search setAllFonts={setAllFonts}/>
    </nav>
    <div id="main">

      <div id="fontView">
        {allFonts.length > 0
          ? allFonts.map((font) => (
              <div className="font" onClick={changeHeaderFont}>
                <p style={{ "font-family": font }}>{font}</p>
                <p style={{ "font-family": font }}>Almost before we....</p>
              </div>
            ))
          : "Loading fonts"}
        <button onClick={conThis}>Console</button>
      </div>
      <div id="templateView">
        <h1 style={{ "fontFamily": headerFont }}>Header</h1>
        <p style={{ "fontFamily": headerFont }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          voluptates quos similique minima, fugiat dicta corporis omnis
          inventore. Enim consequatur officia eaque! Maxime accusantium modi ad
          rerum recusandae ducimus veritatis!
        </p>
      </div>
    </div>
    </div>
  );
}
