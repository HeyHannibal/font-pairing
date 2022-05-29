import React, { useState, useRef, useEffect } from "react";
import WebFont from "webfontloader";
import { allGoogleFonts } from "../allGoogleFonts";
import Search from "./search";
import Select from "./select";

export default function Font(props) {
  const [allFonts, setAllFonts] = useState(allGoogleFonts);
  const [displayAll, setDisplayAll] = useState(true);
  const [sampleText, setSampleText] = useState("");

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(50);
  const [paddingTop, setPaddingTop] = useState(0);

  const scrollRef = useRef(null);

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
          ? allFonts.slice(startIndex, endIndex).map((font) => (
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

  function infiniteScroll() {
    const scrollTop = scrollRef.current.scrollTop;
    const topVisibleRow = Math.floor(scrollTop / 250);
    if (topVisibleRow + 12 > endIndex || topVisibleRow - 12 < startIndex) {
      setStartIndex(topVisibleRow - 14 > 0 ? topVisibleRow - 14 : 0);
      setEndIndex(topVisibleRow + 14);
      console.log({ topVisibleRow, startIndex, endIndex });

      setPaddingTop(startIndex * 250 + 16);
    }
  }

  return (
    <div id="main" ref={scrollRef} onScroll={infiniteScroll}>
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
      <div
        id="fontsContainer"
        style={{ height: 250 * 1400 }}
        onScroll={infiniteScroll}
      >
        <div id="fontView" style={{ marginTop: paddingTop }}>
          <RenderFonts />
        </div>
      </div>
    </div>
  );
}
