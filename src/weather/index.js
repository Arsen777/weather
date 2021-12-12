import { useEffect, useState } from 'react';

import Search from './search';
import WeatherCard from './card';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [currentCity, setCurrentCity] = useState('');
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (!currentCity) return;

    async function fetchCurrentCountry() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherApiKey}&units=metric`);
      const data = await response.json();

      setWeather(data);
      console.log(data);
    }

    fetchCurrentCountry()
  }, [currentCity])

  console.log(currentCity, ':::: search')

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <Search onSubmit={setCurrentCity}/>
      {weather && (weather.cod !== '404' ? <WeatherCard city={currentCity} {...weather}/> : 'City not found')}
    </div>
  );
}

export default Weather;
