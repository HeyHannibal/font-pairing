import "./stylesheets/App.css";
import Font from './components/Font';
import TemplateView from "./components/tepmplateView";
import FontPool from './components/fontPool'
import { useState } from "react";
function App() {
  const [fontsInUse, setFontsInUse] = useState([])


  return (
    <div id="app">
     <Font setFontsInUse={setFontsInUse}/>
     <FontPool fontsInUse={fontsInUse} setFontsInUse={setFontsInUse}/>
     {/* <TemplateView/> */}
    </div>
  );
}

export default App;
