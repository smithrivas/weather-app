import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataCard from './components/DataCard';
import Spinner from './components/Spinner';

const App = () => {
  const [countryData, setCountryData] = useState(null);

  const getCountryData = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=722c0d4cce8f445f730c2d81ebd1095f&lang=es`;

      const res = await axios.get(url);
      setCountryData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCountryData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <div className="card-main">
      <h1>Weather app</h1>
      {countryData && <DataCard data={countryData} />}
      {!countryData && <Spinner />}
    </div>
  );
};

export default App;
