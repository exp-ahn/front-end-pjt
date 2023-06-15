import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/weather.css';

const cityEng = {
    Seoul: '서울',
    Busan: '부산',
    Incheon: '인천',
    Jeju: '제주',
    Ulsan: '울산',
    Daejeon: '대전',
    Daegu: '대구',
};

const weatherIcon = {
    clouds: {
        charcoal:
            'M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892',
        white: 'M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48',
    },
    sunny: {
        red: 'M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117',
    },
    'cloudy-rainy': {
        red: 'M112.411 57.87c0 11.433-9.27 20.702-20.7 20.702-11.435 0-20.702-9.27-20.702-20.702 0-11.433 9.267-20.701 20.702-20.701 11.43 0 20.7 9.268 20.7 20.701',
        white: 'M48.874 61.244c.612 0 1.21.055 1.805.137a14.679 14.679 0 01-.332-3.087c0-8.152 6.607-14.759 14.759-14.759 7.93 0 14.38 6.26 14.725 14.104a8.81 8.81 0 015.936-2.298 8.854 8.854 0 018.854 8.856 8.772 8.772 0 01-.59 3.157 10.425 10.425 0 012.065-.207c5.707 0 10.331 4.625 10.331 10.33 0 5.706-4.624 10.331-10.33 10.331H48.873c-7.335 0-13.285-5.948-13.285-13.282s5.95-13.282 13.285-13.282',
        rain: 'M83.052 95.131l.423-1.13a2.172 2.172 0 10-4.069-1.523l-.422 1.132a2.172 2.172 0 104.068 1.521M77.548 109.845l1.483-3.962a1.517 1.517 0 00-.89-1.953l-1.226-.46a1.517 1.517 0 00-1.951.89l-1.483 3.965a1.515 1.515 0 00.889 1.951l1.226.459a1.514 1.514 0 001.952-.89M68.555 100.83l1.781-4.766a1.516 1.516 0 00-.89-1.953l-1.226-.458a1.515 1.515 0 00-1.952.89l-1.781 4.765a1.516 1.516 0 00.889 1.952l1.227.46a1.517 1.517 0 001.952-.89M65.864 108.023l.272-.73a2.173 2.173 0 00-4.068-1.523l-.274.732a2.172 2.172 0 004.07 1.521M60.885 89.073l.724-1.935a2.17 2.17 0 10-4.068-1.52l-.723 1.934a2.173 2.173 0 104.068 1.52M55.884 102.45l1.781-4.763a1.517 1.517 0 00-.889-1.955l-1.227-.458a1.519 1.519 0 00-1.953.89l-1.78 4.765a1.516 1.516 0 00.89 1.952l1.224.46a1.519 1.519 0 001.954-.89',
    },
};

const api = {
    key: '90421f0bcb30ace3868661cd944d3635',
    base: 'https://api.openweathermap.org/data/2.5/',
};

const WeatherInfo = ({ checkedArea }) => {
    const [weather, setWeather] = useState([]);
    var city;

    useEffect(() => {
        console.log('[WeatherInfo] useEffect() CALLED!!!');
        if (checkedArea === '') {
            city = 'Seoul';
        } else {
            city = Object.keys(cityEng).find((key) => cityEng[key] === checkedArea);
        }
        axios.get(url(api, city)).then((responseData) => {
            const data = responseData.data;
            console.log(data);
            setWeather({
                date: data.list[0].dt_txt,
                clouds: data.list[0].clouds.all,
                'feels-like': data.list[0].main.feels_like,
                humidity: data.list[0].main.humidity,
                temp: data.list[0].main.temp,
                temp_max: data.list[0].main.temp_max,
                temp_min: data.list[0].main.temp_min,
                weather: data.list[0].weather[0].main,
                loading: false,
            });
        });
    }, [checkedArea]);

    const url = (api, city) => {
        return `${api.base}forecast?q=${city}&appid=${api.key}`;
    };
    let c = weather.temperature - 273.15;

    return (
        <div className="weather-container">
            <div className="weather-head">향후 5일 날씨</div>
            <ul className="weather-daily-list">
                <li className="weather-list">
                    <span>날짜</span>
                    <div className="weather-list-value">
                        <svg className="weather-icon cloud" viewBox="0 0 148 148">
                            <path className="charcoal" d={weatherIcon.clouds.charcoal}></path>
                            <path className="white" d={weatherIcon.clouds.white}></path>
                        </svg>
                        <span> 날씨 온도</span>
                        <span> 흐림, 맑음</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default WeatherInfo;
