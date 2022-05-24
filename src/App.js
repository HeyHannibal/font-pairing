import "./stylesheets/App.css";
import Font from './components/Font';
import TemplateView from "./components/tepmplateView";
import FontPool from './components/fontPool'
import { useState } from "react";
function App() {
  const [fontsInUse, setFontsInUse] = useState([])
  function addFont(font) {
     if(fontsInUse.find(usedFont => usedFont === font)) {
      console.log('already in use')
    } else {
       setFontsInUse(prev => [...prev, font])
    }
  }
  function deleteFont(delFont) {
    const filtered = [...fontsInUse.filter(font => font !== delFont)]
    setFontsInUse(filtered)
  }

  return (
    <div id="app">
     <Font setFontsInUse={addFont}/>
     <FontPool fontsInUse={fontsInUse} setFontsInUse={addFont} deleteFont={deleteFont}/>
     {/* <TemplateView/> */}
    </div>
  );
}

export default App;
