import "./stylesheets/App.css";
import Font from "./components/Font";
import TemplateView from "./components/template/display_controller";
import { useState } from "react";
import SplitPane from "./split-pane/splitPane";

function App() {
  const [fontsInUse, setFontsInUse] = useState([]);
  function addFont(font) {
    if (fontsInUse.find((usedFont) => usedFont === font)) {
    } else {
      setFontsInUse((prev) => [...prev, font]);
    }
  }

  function deleteFont(delFont) {
    const filtered = [...fontsInUse.filter((font) => font !== delFont)];
    setFontsInUse(filtered);
  }

  const props = {
    setFontsInUse: addFont,
  };

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

  return (
    <div id="app">
      <SplitPane>
        <Font />

        <TemplateView />
      </SplitPane>
    </div>
  );
}

export default App;
