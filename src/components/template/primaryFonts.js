export default function primaryFonts(props) {
  const { docFonts } = props;
  return (
    <div id="primaryFonts">
      <label>header</label>
      <h2 id="header" style={{ fontFamily: docFonts.H1.name }}>
        {docFonts.H1.name}
      </h2>
      <label>paragraph</label>
      <p id="paragraph" style={{ fontFamily: docFonts.P.name }}>
        {docFonts.P.name}
      </p>
    </div>
  );
}
