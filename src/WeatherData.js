import config from './config'

async function  getWeather(getErrorMessage, city, event, props, setCity) {
    event.preventDefault()
    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.API_KEY}`)
        const jsonResp = await resp.json();
        if(jsonResp.cod !== 200){
            getErrorMessage(jsonResp.message)
        } else {
            props.setCity(jsonResp.name)
            props.setTemperature(Math.round(jsonResp.main.temp))
            props.setIcon(jsonResp.weather[0].icon)
            props.setWeatherCondition(jsonResp.weather[0].description)
            props.setCountry(jsonResp.sys.country)
            setCity("")
        }
    } catch (err) {
        console.log(err)
    }
}

export default getWeather
