import axios from 'axios';

const API_KEY = '6e6a50007e7b57aa47c01aeee2829a54';

export const fetchWeather = async (city, unit) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export const fetchForecast = async (city, unit) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data.list;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
};
