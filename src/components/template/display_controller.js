import React, { useState } from "react";
import "./style/templateView.css";

import FontList from "./fontList";
import PrimaryFonts from "./primaryFonts";
import TemplateController from "./template_controller";
export default function TemplateView() {
  const defaultFont = {
    name: "Roboto",
    fontWeight: ["100", "300", "500", "700", "900"],
  };

  const [docFonts, setDocFonts] = useState({
    H1: defaultFont,
    H2: defaultFont,
    H3: defaultFont,
    H4: defaultFont,
    H5: defaultFont,
    P: defaultFont,
    A: defaultFont,
    BUTTON: defaultFont,
  });

  const [showHoverMenu, setHoverMenu] = useState(false);
  const [hoverMenuContent, setHoverMenuContent] = useState([
    "100",
    "300",
    "500",
    "700",
    "900",
  ]);
  const [selectedValue, setSelectedValue] = useState(1);
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
          updated[item] = JSON.parse(e.dataTransfer.getData("font"));
        }
      });
      setDocFonts(updated);
    } else {
      setDocFonts((prev) => ({
        ...prev,
        ["P"]: JSON.parse(e.dataTransfer.getData("font")),
      }));
    }
  }

  function dropFont(e) {
    setDocFonts((prev) => ({
      ...prev,
      [e.target.nodeName]: JSON.parse(e.dataTransfer.getData("font")),
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

      Object.keys(docFonts).forEach((item) => {
        if (docFonts[item].name === e.target.textContent) {
          setHoverMenuContent(docFonts[item].fontWeight);
        }
      });

      setHoverMenu(true);
    }
  };

  const hoverOff = (e) => {
    setHoverMenu(false);
  };

  function controlWeight(e) {
    if (e.nativeEvent.wheelDelta > 0) {
      if (selectedValue + 1 < hoverMenuContent.length)
        setSelectedValue((prev) => prev + 1);
    } else {
      if (selectedValue - 1 >= 0) setSelectedValue((prev) => prev - 1);
    }
    e.target.style.fontWeight = hoverMenuContent[selectedValue];
  }

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
        {hoverMenuContent.map((fontWeight) =>
          fontWeight === hoverMenuContent[selectedValue] ? (
            <p style={{ backgroundColor: "lightblue" }}>{fontWeight}</p>
          ) : (
            <p>{fontWeight}</p>
          )
        )}
      </div>
    );
  };

  return (
    <div
      id="templateView"
      onWheel={controlWeight}
      onMouseOver={hoverOn}
      onMouseOut={hoverOff}
      onDrop={dropPrimaryFont}
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
          <FontList docFonts={docFonts} />
        </div>
      </div>

      <TemplateController
        
        docFonts={docFonts}
        onDragOver={preventDefault}
        onDrop={dropFont}
      />
    </div>
  );
}
