import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { allGoogleFonts } from "../allGoogleFonts";
import Search from "./search";
import Select from "./select";
import TemplateView from "./tepmplateView";

export default function Font(props) {
  const [allFonts, setAllFonts] = useState(allGoogleFonts);
  const [displayAll, setDisplayAll] = useState(true);
  const [sampleText, setSampleText] = useState("");

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

  function changeSample(e) {
    setSampleText(e.target.value);
  }

  function updateFontsInUse(e) {
    props.setFontsInUse(e.target.dataset.font);
  }

  const RenderFonts = () => {
    return (
      <div id="fontsContainer">
        {allFonts.length > 0
          ? allFonts.slice(0, 150).map((font) => (
              <div
                onDragStart={(e) => handleDrag(e, font)}
                draggable
                key={font}
                className="font"
              >
                <p style={{ fontFamily: font }}>{font}</p>
                <p style={{ fontFamily: font }}>
                  {!sampleText
                    ? "Almost before we knew it, we had left the ground."
                    : sampleText}
                </p>
                <button
                  className="btn font"
                  data-font={font}
                  onClick={updateFontsInUse}
                >
                  <span className="material-symbols-outlined" data-font={font}>
                    add_box
                  </span>
                </button>
              </div>
            ))
          : "Loading fonts"}
      </div>
    );
  };

  return (
    <div id="main">
      <div className="navWrap">
        <nav>
          <Search setAllFonts={setAllFonts} displayAll={setDisplayAll} />
          <Select returnValue={setSampleText} />
          <input
            onChange={changeSample}
            value={sampleText}
            placeholder="Type something"
          ></input>
        </nav>
      </div>
      <div id="fontsContainer">
        <div id="fontView">
          <RenderFonts />
        </div>
      </div>
    </div>
  );
}
