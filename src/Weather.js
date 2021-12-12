import { useEffect, useState } from 'react';

import Search from './Search';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [currentCity, setCurrentCity] = useState('');

  useEffect(() => {
    if (!currentCity) return;

    async function fetchCurrentCountry() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherApiKey}`);
      const data = await response.json();

      console.log(data);
    }

    fetchCurrentCountry()
  }, [currentCity])

  console.log(currentCity, ':::: search')

  return (
    <div className="Weather">
      <header>Weather App</header>
      <Search onSubmit={setCurrentCity}/>
    </div>
  );
}

export default Weather;
