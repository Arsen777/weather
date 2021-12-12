import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from './search';
import WeatherCard from './card';
import { getWeatherByCity } from '../store/selectors';
import { saveWeather } from '../store/actions/weather';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState('');
  const currentWeather = useSelector(store => getWeatherByCity(store, currentCity));

  const handleSearch = value => {
    setCurrentCity(value)
  }

  useEffect(() => {
    if (!currentCity) return;

    if (currentWeather) {
      setError(false);

      return;
    }

    setIsLoading(true);

    async function fetchCurrentCountry() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherApiKey}&units=metric`);
        const data = await response.json();
  
        if (data.cod !== '404') {
          dispatch(saveWeather({city: currentCity, weather: data}));
          setError(false);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrentCountry()
  }, [currentCity, currentWeather, dispatch])

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <Search onSubmit={handleSearch}/>
      {!isLoading && !error && currentWeather && <WeatherCard city={currentCity} {...currentWeather}/>}
      {error && 'City not found'}
    </div>
  );
}

export default Weather;
