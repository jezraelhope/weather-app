import React from 'react'



function Content(props) {

    return (
        <div className="content-container">
            <h3>{props.city}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.weatherCondition}/>
            <p>{props.weatherCondition}</p>
            <h3>{props.temperature}{props.temperature && <span>&deg;</span>}</h3>
        </div>
    )
}

export default Content
