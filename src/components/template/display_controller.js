import React, { useState } from "react";
import "./style/templateView.css";
import Page1 from "./page1";
import Page2 from "./page2";
import FontList from "./fontList";
import PrimaryFonts from "./primaryFonts";
export default function TemplateView() {
  const [docFonts, setDocFonts] = useState({
    H1: "Lato",
    H2: "Lato",
    H3: "Lato",
    H4: "Lato",
    H5: "Lato",
    P: "Courier New",
    A: "Courier New",
    BUTTON: "Courier New",
  });

  const [showHoverMenu, setHoverMenu] = useState(false);
  const [hoverMenuPosition, setHoverMenuPosition] = useState({
    top: 0,
    left: 0,
    elemHeight: 0,
  });

  function preventDefault(e) {
    e.preventDefault();
  }

  function dropPrimaryFont(e) {
    if (e.target.nodeName !== "P") {
      const updated = { ...docFonts };
      Object.keys(updated).forEach((item) => {
        if (item !== "P") {
          updated[item] = e.dataTransfer.getData("font");
        }
      });
      setDocFonts(updated);
    } else {
      setDocFonts((prev) => ({
        ...prev,
        ["P"]: e.dataTransfer.getData("font"),
      }));
    }
  }

  function dropFont(e) {
    console.log(e.target);
    setDocFonts((prev) => ({
      ...prev,
      [e.target.nodeName]: e.dataTransfer.getData("font"),
    }));
  }

  const hoverOn = (e) => {
    if (showHoverMenu || e.target.nodeName === "DIV") return;
    else {
      const position = e.target.getBoundingClientRect();
      setHoverMenuPosition({
        top: Math.floor(position.y - 50),
        left: Math.floor(position.x + position.width / 2),
      });
      setHoverMenu(true);
    }
  };

  const hoverOff = (e) => {
    setHoverMenu(false);
  };

  function controlWeight(e) {
    let currentWeight = Number(e.target.style.fontWeight);
    if (!currentWeight) {
      currentWeight = 400;
    }

    e.nativeEvent.wheelDelta > 0
      ? (e.target.style.fontWeight = currentWeight + 100)
      : (e.target.style.fontWeight = currentWeight - 100);
  }

  const passProps = {
    docFonts,
    dropFont,
    preventDefault,
  };

  const FontWheelStyle = {
    top: hoverMenuPosition.top,
    left: hoverMenuPosition.left,
    display: showHoverMenu ? "flex" : "none",
    position: "fixed",
    "pointer-events": "none",
  };

  const FontWheel = () => {
    return (
      <div id="fontWheelMenu" style={FontWheelStyle}>
        <p>1</p>
        <p>2</p>
        <p>4</p>
      </div>
    );
  };

  return (
    <div
      id="templateView"
      onWheel={controlWeight}
      onMouseOver={hoverOn}
      onMouseOut={hoverOff}
    >
      <FontWheel></FontWheel>
      <div id="pickedFonts">
        <div
          id="primaryFontEventCatcher"
          onDragOver={preventDefault}
          onDrop={dropPrimaryFont}
        >
          <PrimaryFonts docFonts={docFonts} />
        </div>
        <div id="fontListContainer">
          <FontList {...passProps} />
        </div>
      </div>
      <div id="templateContainer" onDragOver={preventDefault} onDrop={dropFont}>
        <Page1 {...passProps} />
      </div>
    </div>
  );
}
