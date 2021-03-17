import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
      </div>

      <div className="flex">
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">T&deg;C: {weatherData.main.temp}</p>
        <p className="temp">T&deg;C Max: {weatherData.main.temp_max}</p>
        <p className="temp">T&deg;C Min: {weatherData.main.temp_min}</p>
      </div>

      <div className="flex">
        <p className="temp">Pressure: {weatherData.main.pressure} hPa</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        <p className="temp">Wind: {(weatherData.wind.speed * 1.852).toFixed(1)} km/h</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)

export default WeatherCard;