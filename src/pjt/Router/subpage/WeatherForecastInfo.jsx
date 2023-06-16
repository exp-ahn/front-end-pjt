import React from 'react';

const WeatherForecastInfo = ({ month, date, hour, icon }) => {
    return (
        <ul className="weather-forecast-list">
            <li className="weather-3hourly-list">
                <span>{`${month}월 ${date}일 ${hour}시`}</span>
                <div className="weather-forecast-value">
                    {/* <span> 날씨 온도</span> */}
                    <img
                        className="weather-icon"
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="Weather Icon"
                    />
                    {/* <span> 흐림, 맑음</span> */}
                </div>
            </li>
        </ul>
    );
};

export default WeatherForecastInfo;
