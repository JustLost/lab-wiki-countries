import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
              />
              <h2>{country.name.common}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
