import { useState } from 'react';

const DataCard = ({ data }) => {
  const name = data.name;
  const country = data['sys']['country'];
  const imagen = data.weather[0]['icon'];
  const description = data.weather[0]['description'];
  const main = data.weather[0]['main'];
  const vel = Math.round(data['wind']['speed'] * 3.6);
  const kelvin = Math.round(data['main']['temp']);
  const centigrade = Math.round(kelvin - 273.15, 4);
  const humidity = data['main']['humidity'];

  const [temperature, setTemperature] = useState(true);

  return (
    <div className="principal">
      <div className="card">
        <div className="temperature-info">
          {temperature ? (
            <p className="temperature-info__temp">{centigrade} °C</p>
          ) : (
            <p className="temperature-info__temp">{kelvin} °K</p>
          )}
          <img
            className="temperature-info__image"
            src={`https://openweathermap.org/img/wn/${imagen}.png`}
            alt="weather"
          />
        </div>
        <p className="more-info more-info__first">{main}</p>
        <p className="more-info">Velocidad del viento: {vel} km/h</p>
        <p className="more-info">Humedad: {humidity}%</p>
        <div className="country">
          <p>
            {name}, {country}
          </p>
          <p>{description}</p>
        </div>
      </div>
      <div className="button">
        <button onClick={() => setTemperature(!temperature)} className="change-temp">
          Cambiar a {temperature ? '°K' : '°C'}
        </button>
      </div>
    </div>
  );
};

export default DataCard;
