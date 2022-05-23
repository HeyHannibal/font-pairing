import React, { useState } from "react";

export default function TemplateView(props) {

  const [docFonts, setDocFonts] = useState({
    H1: 'Courier New',
    P: 'Courier New',
  })

  function log(e) {
    e.preventDefault();
  }

  function dropFont(e) {
    console.log(e.target.nodeName)
    setDocFonts(prev => ({
      ...prev,
      [e.target.nodeName]: e.dataTransfer.getData('font')
    }))
  }

  return (
    <div id="templateView" >
      <h1 style={{ fontFamily: docFonts.H1 }} onDrop={dropFont} onDragOver={log}>Header</h1>
      <p style={{ fontFamily: docFonts.P }} onDrop={dropFont} onDragOver={log}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        voluptates quos similique minima, fugiat dicta corporis omnis inventore.
        Enim consequatur officia eaque! Maxime accusantium modi ad rerum
        recusandae ducimus veritatis!
      </p>
    </div>
  );
}
