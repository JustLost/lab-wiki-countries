import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';

import CountriesData from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={CountriesData} />
          {
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails />}
              />
            </Routes>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
