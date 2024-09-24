import React from 'react';
import CityDisplay from '../CityDisplay/CityDisplay'; // Correct path
import TemperatureDisplay from '../TemperatureDisplay/TemperatureDisplay'; // Correct path
import WeatherIcon from '../WeatherIcon/WeatherIcon'; 
const CurrentWeather = ({ weather, unit }) => {
  return (
    <div>
      <CityDisplay city={weather.name} />
      <TemperatureDisplay temp={weather.main.temp} unit={unit} />
      <WeatherIcon icon={weather.weather[0].icon} condition={weather.weather[0].description} />
    </div>
  );
};

export default CurrentWeather;
