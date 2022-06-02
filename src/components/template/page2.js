import { loremIpsum } from "lorem-ipsum";

function Tile(props) {
  return (
    <div className="tile">
      <div>
        <h1
          onDrop={props.dropFont}
          onDragOver={props.preventDefault}
          style={{ fontFamily: props.docFonts }}
        >
          Content 
        </h1>
      </div>
    </div>
  );
}

export default function Page2(props) {
  const { docFonts, cssClass } = props;

  return (
    <div className={"page " + cssClass} id="2">
      <h1>Hello User!</h1>
      <input type="text" placeholder="search something"></input>
      <p>Trending content</p>
      <div id="tiles">
        {Array(10).fill(
          <Tile
            className={"tile"}
            docFonts={docFonts.H1.name}
          ></Tile>
        )}
      </div>
    </div>
  );
}
