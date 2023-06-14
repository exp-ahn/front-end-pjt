import React from 'react';
import CityInfo from './subpage/CityInfo';
import MapInfo from './subpage/MapInfo';
import TrafficInfo from './subpage/TrafficInfo';
import WeatherInfo from './subpage/WeatherInfo';
import Sidebar from './subpage/Sidebar';

const SubPage = () => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div>
                <CityInfo />
                <MapInfo />
            </div>
            <div>
                <TrafficInfo />
                <WeatherInfo />
            </div>
        </>
    );
};

export default SubPage;
