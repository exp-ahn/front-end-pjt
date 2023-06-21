import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/weather.css';
import WeatherInfoList from './WeatherInfoList';

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
const weatherDescriptionData = {
    맑음: 'clear',
    흐림: 'clouds',
    '매우 흐림': 'overcast clouds',
    비: 'rain',
    가랑비: 'drizzle',
    '천둥/번개': 'thunderstorm',
    눈: 'snow',
    안개: 'mist',
    황사: 'dust',
    스모크: 'smoke',
    토네이도: 'tornado',
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
    let day = [];
    let hour = [];
    let icon = [];
    let main = [];
    let feels_like = [];
    let temp = [];

    let i = 1;
    while (i < 8) {
        const data = timeDifference(forecastWeather.forecast[i].dt_txt);
        month.push(data.getMonth() + 1);
        date.push(data.getDate());
        day.push(data.getDay());
        hour.push(data.getHours());

        icon.push(forecastWeather.forecast[i].weather[0].icon);
        main.push(forecastWeather.forecast[i].weather[0].main);
        feels_like.push(forecastWeather.forecast[i].main.feels_like);
        temp.push(forecastWeather.forecast[i].main.temp);
        i++;
    }

    return (
        <div
            className="weather-container"
            style={{
                backgroundImage: url(`./weather_background/${currentWeather.weather[0].icon}.jpg`),
            }}
        >
            <div className="weather-current">
                <div className="weather-current-head">
                    <span>{checkedArea === '' ? '대구' : `${checkedArea}`}</span>의 현재 날씨
                </div>
                <div className="weather-current-value">
                    <div className="weather-current-value-temp">{`현재 온도: ${current_temp}°C`}</div>
                    <div className="weather-current-value-img">
                        <img
                            className="weather-current-value-icon"
                            src={`./weather_icon/${currentWeather.weather[0].icon}.png`}
                            alt="Weather Icon"
                        />
                    </div>
                    <div className="weather-current-value-description">
                        {Object.keys(weatherDescriptionData).find(
                            (key) => weatherDescriptionData[key] === currentWeather.weather[0].description
                        )}
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>날짜 / 시간</th>
                        <th colSpan={2}>날씨</th>
                        <th>예상 기온</th>
                        <th>체감 온도</th>
                    </tr>
                </thead>
                <tbody className="weather-forecast">
                    <WeatherInfoList
                        month={month[0]}
                        date={date[0]}
                        day={day[0]}
                        hour={hour[0]}
                        icon={icon[0]}
                        main={main[0]}
                        feels_like={feels_like[0]}
                        temp={temp[0]}
                    />
                    <WeatherInfoList
                        month={month[2]}
                        date={date[2]}
                        day={day[2]}
                        hour={hour[2]}
                        icon={icon[2]}
                        main={main[2]}
                        feels_like={feels_like[2]}
                        temp={temp[2]}
                    />
                    <WeatherInfoList
                        month={month[4]}
                        date={date[4]}
                        day={day[4]}
                        hour={hour[4]}
                        icon={icon[4]}
                        main={main[4]}
                        feels_like={feels_like[4]}
                        temp={temp[4]}
                    />
                    <WeatherInfoList
                        month={month[6]}
                        date={date[6]}
                        day={day[6]}
                        hour={hour[6]}
                        icon={icon[6]}
                        main={main[6]}
                        feels_like={feels_like[6]}
                        temp={temp[6]}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default WeatherInfo;
