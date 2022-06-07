import { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import "./style/page.css";

export default function TemplateController(props) {
  const [pageOneOnTop, setpageOneOnTop] = useState(true);

  const toggle = () => setpageOneOnTop((prev) => !prev);

  return (
    <div id="templateContainer">
      <button onClick={toggle} style={{ position: "fixed", top: "10px" }}>
        toggle
      </button>
      <Page1
        cssClass={pageOneOnTop ? "over" : "under"}
        docFonts={props.docFonts}
      ></Page1>
      <Page2
        cssClass={pageOneOnTop ? "under" : "over"}
        docFonts={props.docFonts}
      ></Page2>
    </div>
  );
}
