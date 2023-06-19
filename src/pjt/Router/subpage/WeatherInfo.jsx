import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/weather.css';
import WeatherForecastInfo from './WeatherForecastInfo';

const cityEng = {
    Seoul: '서울',
    Busan: '부산',
    Incheon: '인천',
    Jeju: '제주',
    Ulsan: '울산',
    Daejeon: '대전',
    Daegu: '대구',
    Gwangju: '광주',
};

const api = {
    key: '245561218d937df62cc7a4e8d1173a37',
    base: 'https://api.openweathermap.org/data/2.5/',
};

const timeDifference = (time) => {
    const inputDate = new Date(time);
    const koreaTime = new Date(inputDate.getTime() + 8 * 60 * 60 * 1000);

    return koreaTime;
};

const url = (api, city, info) => {
    return `${api.base}${info}?q=${city}&appid=${api.key}`;
};

const WeatherInfo = ({ checkedArea }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const city =
                    checkedArea === '' ? 'Daegu' : Object.keys(cityEng).find((key) => cityEng[key] === checkedArea);
                const currentWeatherResponse = await axios.get(url(api, city, 'weather'));
                const forecastWeatherResponse = await axios.get(url(api, city, 'forecast'));

                const data = {
                    currentWeather: {
                        main: currentWeatherResponse.data.main,
                        weather: currentWeatherResponse.data.weather,
                    },
                    forecastWeather: {
                        forecast: forecastWeatherResponse.data.list,
                    },
                };

                setWeatherData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [checkedArea]);

    if (!weatherData) {
        return null;
    }
    const { currentWeather, forecastWeather } = weatherData;

    const current_temp = parseInt(currentWeather.main.temp - 273.15);

    let month = [];
    let date = [];
    let hour = [];
    let icon = [];
    let description = [];
    let feels_like = [];
    let temp = [];

    let i = 1;
    while (i < 8) {
        const data = timeDifference(forecastWeather.forecast[i].dt_txt);
        month.push(data.getMonth() + 1);
        date.push(data.getDate());
        hour.push(data.getHours());

        icon.push(forecastWeather.forecast[i].weather[0].icon);
        description.push(forecastWeather.forecast[i].weather[0].description);
        feels_like.push(forecastWeather.forecast[i].main.feels_like);
        temp.push(forecastWeather.forecast[i].main.temp);
        i++;
    }

    return (
        <div className="weather-container">
            <div className="weather-current">
                <div className="weather-current-head">
                    <span>{checkedArea === '' ? '부산' : `${checkedArea}`}</span>의 현재 날씨
                </div>
                <div className="weather-current-value">
                    <span>{`현재 온도: ${current_temp}°C`}</span>
                    <img
                        className="weather-icon"
                        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                    />
                </div>
            </div>
            <div className="weather-forecast">
                <div className="weather-forecast-head">예상 날씨</div>
                <div className="weather-forecast-list-wrap">
                    <WeatherForecastInfo
                        month={month[0]}
                        date={date[0]}
                        hour={hour[0]}
                        icon={icon[0]}
                        description={description[0]}
                        feels_like={feels_like[0]}
                        temp={temp[0]}
                    />
                    <WeatherForecastInfo
                        month={month[2]}
                        date={date[2]}
                        hour={hour[2]}
                        icon={icon[2]}
                        description={description[2]}
                        feels_like={feels_like[2]}
                        temp={temp[2]}
                    />
                    <WeatherForecastInfo
                        month={month[4]}
                        date={date[4]}
                        hour={hour[4]}
                        icon={icon[4]}
                        description={description[4]}
                        feels_like={feels_like[4]}
                        temp={temp[4]}
                    />
                    <WeatherForecastInfo
                        month={month[6]}
                        date={date[6]}
                        hour={hour[6]}
                        icon={icon[6]}
                        description={description[6]}
                        feels_like={feels_like[6]}
                        temp={temp[6]}
                    />
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
