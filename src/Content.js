import React from 'react'



function Content(props) {
    if(props.errorMessage) {
        return (
            <h2>{props.errorMessage}</h2>
        )
    } else {
        return (
            <div className="content-container">
                <h3>{props.city}</h3>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.weatherCondition}/>
                <p>{props.weatherCondition}</p>
                <h4>{props.temperature}{props.temperature && <span>&deg;</span>}</h4>
            </div>
        )

    }

}

export default Content
