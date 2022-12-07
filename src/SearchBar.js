import React, {useState} from 'react'
import getWeather from './WeatherData'


function SearchBar(props) {
    const [city, setCity] = useState("");
    const getErrorMessage = props.getErrorMessage;

    function handleChange(event) {
        const {value} = event.target
        setCity(value)
    }

    return (
        <form
            onSubmit={async (event)=> await getWeather(getErrorMessage, city, event, props, setCity)}
        >
            <input
                type="text"
                placeholder="Search City"
                value={city}
                onChange={handleChange}
            />
            <button>Get Weather</button>
        </form>
    )
}

export default SearchBar
