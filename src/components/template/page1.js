export default function Page1(props) {
  const { docFonts, dropFont, preventDefault } = props;
  function clicked(e) {
    console.log(e.target);
  }
  return (
    <div
      className="page"
      id="1"
      onDragOver={preventDefault}
      onClick={clicked}
      onDrop={dropFont}
    >
      <div style={{ height: "30%" }}></div>
      <div id="author">
        <div id="avatar"></div>
        <div>
          <h3 style={{ fontFamily: docFonts["H3"] }}>Name Lastname</h3>
          <h4 style={{ fontFamily: docFonts["H4"] }}>Title</h4>
        </div>
        <button style={{ fontFamily: docFonts["BUTTON"] }}>Subscribe</button>
      </div>
      <h1 style={{ fontFamily: docFonts["H1"] }} className="templateText">
        Header font is {docFonts.H1}
      </h1>

      <h2 style={{ fontFamily: docFonts["H1"] }} className="templateText">
        Now using {docFonts.H1} + {docFonts.P}
      </h2>
      <p style={{ fontFamily: docFonts["P"] }} className="templateText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        voluptates quos similique minima, fugiat dicta corporis omnis inventore.
        Enim consequatur officia eaque! Maxime accusantium modi ad rerum
        recusandae ducimus veritatis!
      </p>
    </div>
  );
}
