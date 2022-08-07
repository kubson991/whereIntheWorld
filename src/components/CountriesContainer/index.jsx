import "./App.scss";
import Card from "../CountryCard";
import useFetch from "../../helpers/fetchInfo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import loadingBar from "../../assets/loadingBar.gif";

function CountriesContainer() {
  const countries = useSelector((state) => state.reducer.countries);
  const loading = useSelector((state) => state.reducer.loading);
  const { fetchData } = useFetch();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`CountriesContainer`}>
      {loading && (
        <img src={loadingBar} alt="loading" className="loadingScreen" />
      )}

      {!loading &&
        countries.map((element) => (
          <Card
            key={element.name.official}
            name={element.name.official}
            population={element.population}
            img={element.flags.svg}
            capital={element.capital}
            region={element.region}
          />
        ))}
    </section>
  );
}

export default CountriesContainer;
