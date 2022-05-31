import "./stylesheets/App.css";
import Font from "./components/Font";
import TemplateView from "./components/template/display";
import FontPool from "./components/fontPool";
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

  return (
    <div id="app" >
      <SplitPane>
        <Font {...props} />

        <div id='pickAndDisplay'>
          <FontPool {...props} fontsInUse={fontsInUse} deleteFont={deleteFont} />

          <TemplateView />
        </div>
      </SplitPane>

    </div>
  );
}

export default App;
