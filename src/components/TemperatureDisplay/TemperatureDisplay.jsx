import React from 'react';
import './TemperatureDisplay.css';

const TemperatureDisplay = ({ temp, unit }) => {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  return (
    <div className="temperature-display">
      <h2>{temp.toFixed(1)} {unitSymbol}</h2>
    </div>
  );
};

export default TemperatureDisplay;
