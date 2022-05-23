import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { allGoogleFonts } from "../allGoogleFonts";
import Search from "./search";
import TemplateView from "./tepmplateView";

export default function Font() {
  const [allFonts, setAllFonts] = useState(allGoogleFonts);
  const [displayAll, setDisplayAll] = useState(true);

  useEffect(() => {
    if (allFonts.length > 0 && displayAll) {
      setDisplayAll(false);
      WebFont.load({
        google: {
          families: allFonts.slice(0, 300),
        },
      });
    }
  });

  function handleDrag(e, font) {
    e.dataTransfer.setData("font", font);
  }

  const RenderFonts = () => {
    return (
      <div id="fontsContainer">
        {allFonts.length > 0
          ? allFonts.slice(0, 200).map((font) => (
              <div
                onDragStart={(e) => handleDrag(e, font)}
                draggable
                key={font}
                className="font"
              >
                <p style={{ fontFamily: font, fontSize: "1.5rem" }}>{font}</p>
                <p style={{ fontFamily: font }}>Almost before we....</p>
              </div>
            ))
          : "Loading fonts"}
      </div>
    );
  };
  const log = () => console.log(allFonts);

  return (
    <div id="main">
      <nav>
        <button onClick={log}>Log</button>
        <Search setAllFonts={setAllFonts} displayAll={setDisplayAll} />
      </nav>
      <div id="fontsContainer">
        <div id="fontView">
          <RenderFonts />
        </div>
      </div>
    </div>
  );
}
