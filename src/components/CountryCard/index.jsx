import "./App.scss";
import { useNavigate } from "react-router-dom";

const numberFormat = new Intl.NumberFormat("es-ES");

function CountryCard({ name, population, region, img, capital }) {
  let navigate = useNavigate();
  return (
    <article
      className="CardCountry"
      onClick={() => navigate(`/country/${name}`)}
    >
      <img src={img} alt={`${name} flag`} />
      <h1>{name}</h1>
      <section>
        <div>
          <h6>Population:</h6>
          <p>{numberFormat.format(population)}</p>
        </div>
        <div>
          <h6>Region:</h6>
          <p>{region}</p>
        </div>
        <div>
          <h6>Capital:</h6>
          <p>{capital}</p>
        </div>
      </section>
    </article>
  );
}

export default CountryCard;
