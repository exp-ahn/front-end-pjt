import React from 'react';

const WeatherForecastInfo = ({ month, date, hour, icon, description, feels_like, temp }) => {
    return (
        <ul className="weather-forecast-list">
            <li className="weather-3hourly-list">
                <span>{`${month}월 ${date}일 ${hour}시`}</span>
                <div className="weather-forecast-value">
                    <span>{`예상 기온: ${parseInt(temp - 273.15)}°C`}</span>
                    &nbsp; &nbsp;
                    <span>{`체감 온도: ${parseInt(feels_like - 273.15)}°C`}</span>
                    &nbsp;&nbsp;
                    <img
                        className="weather-icon"
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="Weather Icon"
                    />
                    &nbsp;&nbsp;
                    <span>{description}</span>
                </div>
            </li>
        </ul>
    );
};

export default WeatherForecastInfo;
