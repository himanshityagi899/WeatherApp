import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '../../Api';
import SearchInput from '../SearchInput/SearchInput';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import UnitToggle from '../UnitToggle/UnitToggle';
import './Check.css'; // New styles

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Berlin', 'Madrid','Shahjahanpur','Muradnagar','Ghaziabad', 'Noida', 'Delhi','Gurgaon','Pune']; // Example cities

const Check = () => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('metric'); // Celsius by default

  useEffect(() => {
    getWeatherData(city, unit);
  }, [city, unit]);

  const getWeatherData = async (cityName, unit) => {
    const weatherData = await fetchWeather(cityName, unit);
    const forecastData = await fetchForecast(cityName, unit);
    
    setWeather(weatherData);
    setForecast(forecastData);
  };

  return (
    <div className="weather-container">
      <div className="left-section">
        <SearchInput onSearch={setCity} cities={cities} />
        {weather && <CurrentWeather weather={weather} unit={unit} />}
        <UnitToggle unit={unit} setUnit={setUnit} />
      </div>
      <div className="right-section">
        <ForecastContainer forecast={forecast} />
      </div>
    </div>
  );
};

export default Check;
