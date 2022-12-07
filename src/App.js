import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import Content from './Content'

import config from './config'

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, getErrorMessage] = useState("");
  console.log(errorMessage);

  useEffect(()=> {
    getErrorMessage("")
  },[errorMessage])

  return (
    <div className="weather-container">
      <SearchBar
        setCity = {setCity}
        setTemperature = {setTemperature}
        setIcon = {setIcon}
        setWeatherCondition = {setWeatherCondition}
        setCountry = {setCountry}
        getErrorMessage = {getErrorMessage}
      />
      <Content
        city={city}
        country = {country}
        icon = {icon}
        weatherCondition = {weatherCondition}
        temperature={temperature}
        errorMessage = {errorMessage}
      />
    </div>
  );
}

export default App;
