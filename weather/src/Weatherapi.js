import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  useEffect(() => {
    axios.get(`https://api.example.com/weather?apiKey=${apiKey}&location=CityName`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherApp;
