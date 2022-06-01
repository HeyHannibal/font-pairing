export default function primaryFonts(props) {
  const { docFonts } = props;

  return (
    <div id="primaryFonts">
      <label>header</label>
      <h2 id="header" style={{ fontFamily: docFonts.H1 }}>
        {docFonts.H1}
      </h2>
      <label>paragraph</label>
      <p id="paragraph" style={{ fontFamily: docFonts.P }}>
        {docFonts.P}
      </p>
    </div>
  );
}
