import React, { useState } from "react";
import "./style/templateView.css";
import Page1 from "./page1";
import Page2 from "./page2";
export default function TemplateView() {
  const [docFonts, setDocFonts] = useState({
    H1: "Lato",
    P: "Courier New",
    A: "Courier New",
    BUTTON: "Courier New",
  });

  function preventDefault(e) {
    e.preventDefault();
  }

  function dropFont(e) {
    console.log(e.target);
    setDocFonts((prev) => ({
      ...prev,
      [e.target.nodeName]: e.dataTransfer.getData("font"),
    }));
  }

  function hovering() {
    console.log("hovering");
  }

  function stoppedHovering() {
    console.log("left");
  }
  const passProps = {
    docFonts,
    dropFont,
    preventDefault,
  };
  return (
    <div id="templateView">
      <Page1 {...passProps} />
      {/* <Page2 {...passProps}/> */}
    </div>
  );
}
