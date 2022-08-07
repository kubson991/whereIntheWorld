import { useEffect, useState } from "react";
import "./App.scss";
import useFetch from "../../helpers/fetchInfo";

function Selector() {
  const [show, setShow] = useState(false);
  const { fetchDataByRegion } = useFetch();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id !== "Selector") {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="Selector">
      <select
        id="Selector"
        defaultValue={"all"}
        onClick={() => setShow(!show)}
        onChange={(e) => fetchDataByRegion(e.target.value)}
      >
        <option value="all" disabled style={{ color: "var(--placeHolder)" }}>
          Filter by Region
        </option>
        <option value="europe">Europe</option>
        <option value="america">America</option>
        <option value="africa">Africa</option>
        <option value="oceania">Oceania</option>
        <option value="asia">Asia</option>
      </select>
      <span className="material-icons-outlined">
        {!show ? "expand_more" : "expand_less"}
      </span>
    </div>
  );
}

export default Selector;
