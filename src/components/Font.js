import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { allGoogleFonts } from "../allGoogleFonts";
import Search from "./search";
import TemplateView from "./tepmplateView";

export default function Font() {
  const [allFonts, setAllFonts] = useState(allGoogleFonts);
  const [headerFont, setHeaderFont] = useState("Courier New");

  let doOnce = true;
  useEffect(() => {
    console.log("usedEffect");
    if (allFonts.length > 0 && doOnce) {
      doOnce = false;
      WebFont.load({
        google: {
          families: allFonts.slice(0, 300),
        },
      });
    }
  });

  function changeHeaderFont(e) {
    setHeaderFont(e.target.textContent);
  }

  function handleDrag(e, font) {
    console.log(font);
    e.dataTransfer.setData("font", font);
  }

  const RenderFonts = () => {
    return (
      <div style={{ paddingTop: startIndex * 250 }} id="fontsContainer">
        {allFonts.length > 0
          ? allFonts.slice(startIndex, endIndex).map((font) => (
              <div
                onClick={changeHeaderFont}
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

  return (
    <div>
      <nav>
        <Search setAllFonts={setAllFonts} />
      </nav>
      <div id="main">
        <div id="fontView" style={{ height: (allFonts.length / 3) * 250 }}>
          <RenderFonts />
        </div>
        <TemplateView headerFont={headerFont} />
      </div>
    </div>
  );
}
