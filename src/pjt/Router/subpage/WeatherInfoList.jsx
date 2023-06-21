import React from 'react';

const weatherDescriptionData = {
    맑음: 'Clear',
    흐림: 'Clouds',
    비: 'Rain',
    가랑비: 'Drizzle',
    '천둥/번개': 'Thunderstorm',
    눈: 'Snow',
    안개: 'Mist',
    황사: 'Dust',
    스모크: 'Smoke',
    토네이도: 'Tornado',
};
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
            <td>{`${month}.${date}.${Object.keys(weatherDayData).find(
                (key) => weatherDayData[key] === day
            )} / ${hour}시`}</td>
            <td>
                <img className="weather-forecast-value-icon" src={`./weather_icon/${icon}.png`} alt="Weather Icon" />
            </td>
            <td>{Object.keys(weatherDescriptionData).find((key) => weatherDescriptionData[key] === main)}</td>
            <td>{`${parseInt(temp - 273.15)}°C`}</td>
            <td>{`${parseInt(feels_like - 273.15)}°C`}</td>
        </tr>
    );
};

export default WeatherInfoList;
