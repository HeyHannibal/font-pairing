export default function Page1(props) {
    const {docFonts, dropFont, preventDefault } = props
  return (
    <div className="page" id="1">
      <div style={{ height: "30%" }}></div>
      <div id="author">
        <div id="avatar"></div>
        <div>
          <h3>Name Lastname</h3>
          <h4>Title</h4>
        </div>
        <button>Subscribe</button>
      </div>
      <h1
        style={{ fontFamily: docFonts.H1 }}
        onDrop={dropFont}
        onDragOver={preventDefault}
        className="templateText"
      >
        Header font is {docFonts.H1}
      </h1>

      <h2
        style={{ fontFamily: docFonts.H1 }}
        onDrop={dropFont}
        onDragOver={preventDefault}
        className="templateText"
      >
        Now using {docFonts.H1} + {docFonts.P}
      </h2>
      <p
        style={{ fontFamily: docFonts.P }}
        onDrop={dropFont}
        onDragOver={preventDefault}
        className="templateText"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        voluptates quos similique minima, fugiat dicta corporis omnis inventore.
        Enim consequatur officia eaque! Maxime accusantium modi ad rerum
        recusandae ducimus veritatis!
      </p>
    </div>
  );
}
