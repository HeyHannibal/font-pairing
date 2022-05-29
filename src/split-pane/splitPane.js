import React, { useState } from "react";
import "../stylesheets/splitPane.css";
export default function SplitPane({ children }) {
  const [leftPane, setLeftPane] = useState(49);
  const [middlePane, setMiddlePane] = useState(33);
  const [rightPane, setRightPane] = useState(51);

  function setPaneSize(value) {
    setLeftPane(value);
    setRightPane(100 - value);
  }

  function hideDragGhost(e) {
    setTriggerAnimation(false);

    const img = new Image();
    img.scr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  function resizePane(e) {
    const precentageOfScreen = (e.clientX / window.innerWidth) * 100;
    if (precentageOfScreen < 1) {
      return;
    }
    setPaneSize(precentageOfScreen);
  }
  // drag momentum animation
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  function addMonentum(e) {
    //console.log({leftPane, currentMousePosition })
    const currentMousePosition = (e.clientX / window.innerWidth) * 100;
    if (Math.floor(leftPane) === Math.floor(currentMousePosition)) return;
    setTriggerAnimation(true);
    if (leftPane > currentMousePosition) {
      setPaneSize(leftPane - 5);
    } else {
      setPaneSize(leftPane + 5);
    }
  }
  function resize() {
    setLeftPane((prev) => prev + 0.1);
    setRightPane((prev) => prev - 0.1);
  }

  return (
    <div id="splitPane">
      <div
        id="leftPane"
        style={{
          width: leftPane + "%",
          transition: triggerAnimation
            ? "width 0.5s cubic-bezier(0.05, 0.08, 0, 0.65) 0s"
            : "none",
        }}
      >
        {children[0]}
      </div>

      {/* <div className="resizer" id="0"></div>
      <div id="leftPane" style={{ width: middlePane + "vw" }}>
        {children[1]}
      </div> */}
      <div
        className="resizer"
        id="0"
        onDrag={resizePane}
        onDragStart={hideDragGhost}
        onDragEnd={addMonentum}
        draggable
      ></div>
      <div
        id="leftPane"
        style={{
          width: rightPane + "%",
          transition: triggerAnimation
            ? "width 0.5s cubic-bezier(0, 0, 0.21, 0.96) 0s"
            : "none",
        }}
      >
        {children[2]}
      </div>
    </div>
  );
}
