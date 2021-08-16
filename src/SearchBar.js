import React, {useState} from 'react'
import getWeather from './WeatherData'


function SearchBar(props) {
    const [city, setCity] = useState("")

    function handleChange(event) {
        const {value} = event.target
        setCity(value)
    }

    return (
        <form
            onSubmit={async (event)=> await getWeather(city, event, props, setCity)}
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
