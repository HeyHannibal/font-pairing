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

  const [primaryFonts, setPrimaryFonts] = useState({
    header: "Quicksand",
    paragraph: "Lora",
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

  const passProps = {
    docFonts,
    dropFont,
    preventDefault,
  };

  return (
    <div id="templateView">
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
