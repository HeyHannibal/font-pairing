import React, { useState, useRef, useEffect } from "react";
import WebFont from "webfontloader";
import {
  allGoogleFonts,
  fontList,
  webFontListWithWeight,
} from "../../allGoogleFontsArray";

export default function Font(props) {
  const [allFonts, setAllFonts] = useState(webFontListWithWeight);
  const [displayAll, setDisplayAll] = useState(true);
  const [sampleText, setSampleText] = useState("");

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(50);
  const [marginTop, setMarginTop] = useState(0);

  const [fetchIndex, setFetchIndex] = useState({ start: 0, end: 200 });

  const scrollRef = useRef(null);

  useEffect(() => {
    if (allFonts.length > 0 && displayAll) {
      setDisplayAll(false);
      WebFont.load({
        google: {
          families: webFontListWithWeight.slice(
            fetchIndex.start,
            fetchIndex.end
          ),
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

  const RenderFonts = (props) => {
    return (
      <div id="googleFonts" style={{ marginTop: props.marginTop }}>
        {fontList.length > 0
          ? fontList.slice(startIndex, endIndex).map((font, index) => (
              <div
                onDragStart={(e) =>
                  handleDrag(
                    e,
                    JSON.stringify({
                      name: font.name,
                      fontWeight: font.variants,
                    })
                  )
                }
                draggable
                key={font.name}
                className="font"
              >
                <p>{font.name}</p>
                <p style={{ fontFamily: font.name, fontWeight: 400 }}>
                  {!sampleText
                    ? "Almost before we knew it, we had left the ground."
                    : sampleText}
                </p>
                <p className="fontWeights">{font.variants.join(", ")}</p>
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
    const topVisibleRow = Math.floor(scrollTop / 270);
    if (topVisibleRow + 12 > endIndex || topVisibleRow - 12 < startIndex) {
      setStartIndex(topVisibleRow - 14 > 0 ? topVisibleRow - 14 : 0);
      setEndIndex(topVisibleRow + 14);
      console.log({ topVisibleRow, startIndex, endIndex });
      setMarginTop(startIndex * 270);
    }
  }

  return (
    <div id="main" ref={scrollRef} onScroll={infiniteScroll}>
      <div id="fontsContainer" style={{ height: 270 * 1400 }}>
        <RenderFonts marginTop={marginTop} />
      </div>
    </div>
  );
}
