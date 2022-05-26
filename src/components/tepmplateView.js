import React, { useState } from "react";
import "../stylesheets/templateView.css";

export default function TemplateView(props) {
  const [docFonts, setDocFonts] = useState({
    H1: "Courier New",
    P: "Courier New",
    A: "Courier New",
    BUTTON: "Courier New",
  });

  function preventDefault(e) {
    e.preventDefault();
  }

  function dropFont(e) {
    setDocFonts((prev) => ({
      ...prev,
      [e.target.nodeName]: e.dataTransfer.getData("font"),
    }));
  }

  return (
    <div id="templateView">
      <div id="article">
        <h1
          style={{ fontFamily: docFonts.H1 }}
          onDrop={dropFont}
          onDragOver={preventDefault}
          className="templateText"
        >
          {docFonts.H1}
        </h1>
        <h2
          style={{ fontFamily: docFonts.P }}
          onDrop={dropFont}
          onDragOver={preventDefault}
          className="templateText"
        >
          Now using {docFonts.H1} + {docFonts.P}
        </h2>
        <p
          style={{ fontFamily: docFonts.P }}
          onDrop={dropFont}
          onDragOver={preventDefault}
          className="templateText"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          voluptates quos similique minima, fugiat dicta corporis omnis
          inventore. Enim consequatur officia eaque! Maxime accusantium modi ad
          rerum recusandae ducimus veritatis!
        </p>
        <div id="links" onDrop={dropFont} onDragOver={preventDefault}>
          <a style={{ fontFamily: docFonts.A }}>Link 1</a>
          <a style={{ fontFamily: docFonts.A }}>Link 2</a>
        </div>
        <button
          style={{ fontFamily: docFonts.BUTTON }}
          onDrop={dropFont}
          onDragOver={preventDefault}
        >
          Click Here
        </button>
      </div>
    </div>
  );
}
