import "./App.scss";
import useFetch from "../../helpers/fetchInfo";

function InputSearch() {
  let timer;
  const { fetchDataByFilter } = useFetch();

  function inputChange(value) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fetchDataByFilter(value);
    }, 700);
  }

  return (
    <div className="InputSearch">
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        placeholder="Search for a country..."
        onInput={(e) => inputChange(e.target.value)}
      />
    </div>
  );
}

export default InputSearch;
