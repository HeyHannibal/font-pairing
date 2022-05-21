import "./App.css";
import { useState, useEffect } from "react";
import WebFont from "webfontloader";
function App() {
  const [allFonts, setAllFonts] = useState([]);
  const [headerFont, setHeaderFont] = useState("Courier New");

  useEffect(() => {
    if (allFonts.length <= 0)
      fetch(
        "https://content-webfonts.googleapis.com/v1/webfonts?sort=TRENDING&key=AIzaSyDW0w6ucuBcNQXgzhBmyuWXLiDn5R5MqdM"
      )
        .then((res) => res.json())
        .then((res) =>
          setAllFonts(res.items.slice(0, 100).map((font) => font.family))
        );
    if (allFonts.length > 0) {
      WebFont.load({
        google: {
          families: allFonts,
        },
      });
    }
  });

  function conThis() {
    console.log(allFonts);
  }

  function changeHeaderFont(e) {
    console.log(e.target.textContent);
    setHeaderFont(e.target.textContent);
  }

  return (
    <div id="app">
      <div>
        {allFonts.length > 0
          ? allFonts.map((font) => (
              <h1 style={{ "font-family": font }} onClick={changeHeaderFont}>
                {font}
              </h1>
            ))
          : "Loading fonts"}

        <button onClick={conThis}>Console</button>
      </div>
      <div>
        <h1 style={{ "font-family": headerFont }}>Header</h1>
        <p style={{ "font-family": headerFont }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          voluptates quos similique minima, fugiat dicta corporis omnis
          inventore. Enim consequatur officia eaque! Maxime accusantium modi ad
          rerum recusandae ducimus veritatis!
        </p>
      </div>
    </div>
  );
}

export default App;
