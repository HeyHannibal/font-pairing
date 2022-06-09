import React, { useState, useRef, useEffect } from "react";
import { allGoogleFonts, fontList } from "../../allGoogleFontsArray";

export default function Fonts(props) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(50);
  const [marginTop, setMarginTop] = useState(0);

  const scrollRef = useRef(null);

  function handleDrag(e, font) {
    e.dataTransfer.setData("font", font);
  }

  const { allFonts } = props;
  const RenderFonts = () => {
    return (
      <div id="googleFonts" style={{ marginTop: marginTop }}>
        {allFonts.length > 0
          ? allFonts.slice(startIndex, endIndex).map((font) => (
              <div class="fontContainer">
                <div
                  onDragStart={(e) =>
                    handleDrag(e, {
                      name: font.name,
                      fontWeight: font.weight,
                    })
                  }
                  draggable
                  key={font.name}
                  className="font"
                >
                  <p>{font.name}</p>
                  <p style={{ fontFamily: font.name, fontWeight: 400 }}>
                    "Almost before we knew it, we had left the ground."
                  </p>
                  <p className="fontWeights">{font.weight.join(", ")}</p>
                  <button className="btn font" data-font={font.name}>
                    <span className="material-symbols-outlined">add_box</span>
                  </button>
                </div>
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
      setMarginTop(startIndex * 270);
      if (
        topVisibleRow > props.fetchIndex.end ||
        topVisibleRow < props.fetchIndex.start
      ) {
        props.setFetchIndex({
          start: topVisibleRow - 25,
          end: topVisibleRow + 25,
        });
      }
    }
  }

  return (
    <div id="main" ref={scrollRef} onScroll={infiniteScroll}>
      <div id="fontsContainer" style={{ height: 270 * 1400 }}>
        <div style={{ height: 120 }}></div>
        <RenderFonts marginTop={marginTop + 12} />
      </div>
    </div>
  );
}
