import React, { useState, useRef, useEffect } from "react";
import WebFont from "webfontloader";
import {
  allGoogleFonts,
  fontList,
  webFontListWithWeight,
} from "../allGoogleFonts";
import Search from "./search";
import Select from "./select";

export default function Font(props) {
  const [allFonts, setAllFonts] = useState(webFontListWithWeight);
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
          families: webFontListWithWeight.slice(0, 100),
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
        {fontList.length > 0
          ? fontList.slice(startIndex, endIndex).map((font, index) => (
              <div
                onDragStart={(e) =>
                  handleDrag(e,JSON.stringify({  name: font.name,  fontWeight: font.variants,}))
                }
                draggable
                key={font.name}
                className="font"
              >
                <p>
                  {font.name}
                </p>
                <p style={{ fontFamily: font.name, fontWeight: 400 }}>
                  {!sampleText
                    ? "Almost before we knew it, we had left the ground."
                    : sampleText}
                </p>
                <p className="fontWeights">{font.variants.join(', ')}</p>
                <button
                  className="btn font"
                  data-font={font.name}
                  onClick={updateFontsInUse}
                >
                  <span
                    className="material-symbols-outlined"
                    data-font={font.name}
                  >
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
