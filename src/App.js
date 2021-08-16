import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Content from './Content'

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="weather-container">
      <SearchBar
        setCity = {setCity}
        setTemperature = {setTemperature}
        setIcon = {setIcon}
        setWeatherCondition = {setWeatherCondition}
        setCountry = {setCountry}
      />
      <Content
        city={city}
        country = {country}
        icon = {icon}
        weatherCondition = {weatherCondition}
        temperature={temperature}
      />
    </div>
  );
}

export default App;
