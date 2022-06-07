import Search from "./search_bar";
import Select from "./select";

export default function Nav() {
  return (
    <div className="navWrap">
      <nav>
        <Search setAllFonts={setAllFonts} displayAll={setDisplayAll} />
        <Select returnValue={setSampleText} />
        <input
          onChange={changeSample}
          value={sampleText}
          placeholder="Type something"
        ></input>
      </nav>
    </div>
  );
}
