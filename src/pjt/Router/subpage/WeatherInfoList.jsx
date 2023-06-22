import React from 'react';

const weatherDayData = {
    일: 0,
    월: 1,
    화: 2,
    수: 3,
    목: 4,
    금: 5,
    토: 6,
};

const WeatherInfoList = ({ month, date, day, hour, icon, main, feels_like, temp }) => {
    return (
        <tr className="weather-forecast-value">
            <td>{`${month}.${date}(${Object.keys(weatherDayData).find(
                (key) => weatherDayData[key] === day
            )}) ${hour}시`}</td>
            <td>
                <img className="weather-forecast-value-icon" src={`./weather_icon/${icon}.png`} alt="Weather Icon" />
            </td>
            <td>{`${parseInt(temp - 273.15)}°C / ${parseInt(feels_like - 273.15)}°C`}</td>
        </tr>
    );
};

export default WeatherInfoList;
