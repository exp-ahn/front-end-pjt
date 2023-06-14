import { useEffect, useState } from 'react';
import axios from 'axios';

const api = {
    key: '90421f0bcb30ace3868661cd944d3635',
    base: 'https://api.openweathermap.org/data/2.5/',
};

const Weather = () => {
    // const city = 'Seoul';
    const url = `${api.base}forecast?lat=37.5683&lon=126.9778&appid=${api.key}`;
    const [weather, setWeather] = useState('');

    useEffect(() => {
        axios.get(url).then((responseData) => {
            const data = responseData.data;
            console.log(data);
            setWeather({
                id: data.list[0].dt_txt,
                temperature: data.list[0].main.temp,
                main: data.list[0].main,
                loading: false,
            });
        });
    }, []);

    let c = weather.temperature - 273.15;

    return <div></div>;
};

export default Weather;
