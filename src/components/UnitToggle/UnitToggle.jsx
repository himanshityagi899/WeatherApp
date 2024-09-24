import React from 'react';
import './UnitToggle.css';

const UnitToggle = ({ unit, setUnit }) => {
  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <button className="unit-toggle" onClick={toggleUnit}>
      {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
    </button>
  );
};

export default UnitToggle;
