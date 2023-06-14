import React from 'react';
import CityInfo from './subpage/CityInfo';
import MapInfo from './subpage/MapInfo';
import TrafficInfo from './subpage/TrafficInfo';
import WeatherInfo from './subpage/WeatherInfo';

const SubPage = () => {
    return (
        <>
            <CityInfo />
            <MapInfo />
            <TrafficInfo />
            <WeatherInfo />
        </>
    );
};

export default SubPage;
