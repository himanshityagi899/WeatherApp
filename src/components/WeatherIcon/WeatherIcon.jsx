import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({ icon, condition }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="weather-icon">
      <img src={iconUrl} alt={condition} />
      <p>{condition}</p>
    </div>
  );
};

export default WeatherIcon;
