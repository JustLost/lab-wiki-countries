import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';

//import CountriesData from './countries.json'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

const [getCountries, setGetCountries] = useState([]);

useEffect(() => {  
  axios
    .get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      setGetCountries(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={getCountries} />
          {
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={getCountries} />}
              />
            </Routes>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
