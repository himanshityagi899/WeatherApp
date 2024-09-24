import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastContainer.css';

const groupForecastByDay = (forecast) => {
  const groupedData = {};
  forecast.forEach((entry) => {
    const date = new Date(entry.dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    if (!groupedData[dayOfWeek]) {
      groupedData[dayOfWeek] = {
        dayOfWeek,
        weather: entry.weather[0],
        temp_min: entry.main.temp,
        temp_max: entry.main.temp,
      };
    } else {
      groupedData[dayOfWeek].temp_min = Math.min(groupedData[dayOfWeek].temp_min, entry.main.temp);
      groupedData[dayOfWeek].temp_max = Math.max(groupedData[dayOfWeek].temp_max, entry.main.temp);
    }
  });
  return Object.values(groupedData).slice(0, 5);
};

const ForecastContainer = ({ forecast }) => {
  const groupedForecast = groupForecastByDay(forecast);

  return (
    <div className="forecast-section">
      {groupedForecast.map((day, index) => (
        <ForecastCard key={index} day={day} />
      ))}
    </div>
  );
};

export default ForecastContainer;
