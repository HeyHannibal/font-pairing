import Fonts from "./google_fonts_display";
import Nav from "./nav/nav";
import React, { useState, useRef, useEffect } from "react";
import { webFontLoaderRequestArray, fontList } from "../../allGoogleFontsArray";
import WebFont from "webfontloader";

export default function Search() {
  const [webFontLoaderRequest, setWebFontLoaderRequest] = useState(
    webFontLoaderRequestArray
  );
  const [fetchIndex, setFetchIndex] = useState({ start: 0, end: 50 });
  const [sampleText, setSampleText] = useState("");

  const requestToObjectArray = webFontLoaderRequest.map((string) => {
    return {
      name: string.split(":")[0],
      weight: string.split(":")[1].split(","),
    };
  });

  useEffect(() => {
    console.log(webFontLoaderRequest);
    WebFont.load({
      google: {
        families: webFontLoaderRequest.slice(fetchIndex.start, fetchIndex.end),
      },
    });
  }, [webFontLoaderRequest, fetchIndex]);

  function setNewRequest(newList) {
    setWebFontLoaderRequest(newList);
  }

  return (
    <div>
      <Nav setNewRequest={setNewRequest} />
      <Fonts
        allFonts={requestToObjectArray}
        fetchIndex={fetchIndex}
        setFetchIndex={setFetchIndex}
      />
    </div>
  );
}

// const [allFonts, setAllFonts] = useState(fontList);
// const [displayAll, setDisplayAll] = useState(true);
