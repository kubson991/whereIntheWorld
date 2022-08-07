import "./App.scss";
import Header from "../../components/headerComponent";
import Button from "../../components/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function languagesFormatter(languages) {
  let text = "";
  for (const language in languages) {
    text
      ? (text = text + ", " + languages[language])
      : (text = languages[language]);
  }
  return text;
}
function currenciesFormatter(currencies) {
  let text = "";
  for (const currency in currencies) {
    text
      ? (text = text + ", " + currencies[currency].name)
      : (text = currencies[currency].name);
  }
  return text;
}

function Country() {
  const { country } = useParams();
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountry(country) {
      try {
        let res;
        if (searchParams.get("type") !== "alpha") {
          res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        } else {
          res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
        }

        if (res.ok) {
          const data = await res.json();
          console.log(data[0]);
          setCountryData(data[0]);
          setLoading(false);
        } else {
          throw new Error("algo paso");
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchCountry(country);
  }, [country]);

  return (
    <div className="CountryPage">
      {!loading && (
        <>
          <Header />
          <div className="BackButton" onClick={() => navigate(`/`)}>
            <Button text={"Back"} icon={"west"} />
          </div>
          <div className="imgContainer">
            <img
              className="flag"
              src={countryData.flags.svg}
              alt={countryData.name.official + " flag"}
            />
          </div>
          <section className="rightsite">
            <article className="infoContainer">
              <section className="info">
                <h1>{countryData.name.official}</h1>
                <div>
                  <h5>Native Name:</h5>
                  <p>{countryData.name.common}</p>
                </div>
                <div>
                  <h5>Population:</h5>
                  <p>{countryData.population}</p>
                </div>
                <div>
                  <h5>Region:</h5>
                  <p>{countryData.region}</p>
                </div>
                <div>
                  <h5>Sub Region:</h5>
                  <p>{countryData.subregion}</p>
                </div>
                <div>
                  <h5>Capital:</h5>
                  <p>{countryData.capital[0]}</p>
                </div>
              </section>
              <section className="additionalInfo">
                <div>
                  <h5>Top Level Domain:</h5>
                  <p>{countryData.tld.reduce((b, c) => b + "," + c)}</p>
                </div>
                <div>
                  <h5>Currencies:</h5>
                  <p>{currenciesFormatter(countryData.currencies)}</p>
                </div>
                <div>
                  <h5>Lenguaje:</h5>
                  <p>{languagesFormatter(countryData.languages)}</p>
                </div>
              </section>
            </article>
            {countryData.borders && (
              <footer>
                <h2>Border Countries</h2>
                <nav>
                  {countryData.borders.map((country) => (
                    <div
                      key={country}
                      onClick={() => navigate(`/country/${country}?type=alpha`)}
                    >
                      <Button text={country} />
                    </div>
                  ))}
                </nav>
              </footer>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default Country;
