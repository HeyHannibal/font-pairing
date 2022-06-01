import { loremIpsum } from "lorem-ipsum";

import "./style/page2.css";
function Tile(props) {
  return (
    <div className="tile">
      <div>
        <h1
          onDrop={props.dropFont}
          onDragOver={props.preventDefault}
          style={{ fontFamily: props.docFonts }}
        >
          {loremIpsum({ count: 2, units: "words" })}
        </h1>
      </div>
    </div>
  );
}

export default function Page2(props) {
  const { docFonts, dropFont, preventDefault } = props;

  return (
    <div className="page" id="2">
      <h1>Hello User!</h1>
      <input type="text" placeholder="search something"></input>
      <p>Trending content</p>
      <div id="tiles">
        {Array(10).fill(
          <Tile
            className={"tile"}
            docFonts={docFonts.H1}
            dropFont={dropFont}
            preventDefault={preventDefault}
          ></Tile>
        )}
      </div>
    </div>
  );
}
