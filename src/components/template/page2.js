import { loremIpsum, LoremIpsum } from "lorem-ipsum";
function Tile(props) {
  return (
    <div className="tile">
      <div>
        <h1 onDrop={props.dropFont} onDragOver={props.preventDefault} style={{fontFamily: props.docFonts}}>{props.content}</h1>
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
      <h5>Trending content</h5>
      <div>
        <Tile docFonts={docFonts.H1} dropFont={dropFont} preventDefault={preventDefault} content={loremIpsum({ count: 2, units: 'words' })}></Tile>
      </div>
    </div>
  );
}
