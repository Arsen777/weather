import { useEffect, useState } from 'react';

import Search from './search';
import WeatherCard from './card';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState('');

  const handleSearch = value => {
    setWeather(null);
    setIsLoading(true);
    setCurrentCity(value)
  }

  useEffect(() => {
    if (!currentCity) return;

    setIsLoading(true);

    async function fetchCurrentCountry() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherApiKey}&units=metric`);
        const data = await response.json();
  
        setWeather(data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrentCountry()
  }, [currentCity])

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <Search onSubmit={handleSearch}/>
      {!isLoading && (weather.cod !== '404' ? <WeatherCard city={currentCity} {...weather}/> : 'City not found')}
    </div>
  );
}

export default Weather;
