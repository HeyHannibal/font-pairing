import Search from "./search_bar";
import Select from "./select";

export default function Nav(props) {
  return (
    <div className="navWrap">
      <nav>
        <Search setNewRequest={props.setNewRequest} />
        {/* <Select returnValue={setSampleText} />  */}
        <input
          // onChange={changeSample}
          // value={sampleText}
          placeholder="Type something"
        ></input>
        <button id="reset">
          <span class="material-symbols-outlined">restart_alt</span>
        </button>
      </nav>
    </div>
  );
}
