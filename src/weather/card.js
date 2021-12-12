import dayjs from "dayjs";
import { Card, CardContent, CardHeader } from "@mui/material";

import './weather.scss';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function WeatherCard({ city = '', main, sys }) {
  return (
    <div className="weather-card">
      <Card>
        <CardContent className="content">
          <CardHeader className="header" title={capitalizeFirstLetter(city)} />
          <div className="flex">
            <p className="day">Day: {dayjs().format('dddd')}</p>
            <p className="day">{dayjs().format('DD-MM-YYYY')}</p>
          </div>
          <div className="flex">
            <p className="temp">temperature: {main.temp} &deg;C</p>
            <p className="temp">Humidity: {main.humidity} %</p>
          </div>
          <div className="flex">
            <p className="sunrise-sunset">Sunrise: {dayjs(sys.sunrise * 1000).format('hh:mm:ss a')}</p>
            <p className="sunrise-sunset">Sunset: {dayjs(sys.sunset * 1000).format('hh:mm:ss a')}</p>
          </div>
        </CardContent>
      </Card>
      </div>
  )
}

export default WeatherCard;
