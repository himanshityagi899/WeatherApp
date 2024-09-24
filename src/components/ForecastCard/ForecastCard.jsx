import React from 'react';
import './ForecastCard.css';

const ForecastCard = ({ day }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`;

  return (
    <div className="forecast-card">
      <h3>{day.dayOfWeek}</h3>
      <img src={iconUrl} alt={day.weather.description} />
      <p>{day.temp_min.toFixed(1)}° / {day.temp_max.toFixed(1)}°</p>
    </div>
  );
};

export default ForecastCard;





