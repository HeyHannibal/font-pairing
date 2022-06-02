export default function Page1(props) {
  const { docFonts } = props;

  return (
    <div className="page" id="1">
      <div style={{ height: "30%" }}></div>
      <div id="author">
        <div id="avatar"></div>
        <div>
          <h3 style={{ fontFamily: docFonts["H3"].name }}>Name Lastname</h3>
          <h4 style={{ fontFamily: docFonts["H4"].name }}>Title</h4>
        </div>
        <button style={{ fontFamily: docFonts["BUTTON"].name }}>
          Subscribe
        </button>
      </div>
      <h1 style={{ fontFamily: docFonts["H1"].name }} className="templateText">
        Header font is {docFonts.H1.name}
      </h1>

      <h2 style={{ fontFamily: docFonts["H1"].name }} className="templateText">
        Now using {docFonts.H1.name} + {docFonts.P.name}
      </h2>
      <p style={{ fontFamily: docFonts["P"].name }} className="templateText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        voluptates quos similique minima, fugiat dicta corporis omnis inventore.
        Enim consequatur officia eaque! Maxime accusantium modi ad rerum
        recusandae ducimus veritatis!
      </p>
    </div>
  );
}
