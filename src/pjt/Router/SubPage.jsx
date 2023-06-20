import React, { useEffect, useState } from 'react';
import Header from '../Header';
import CityInfo from './subpage/CityInfo';
import MapInfo from './subpage/MapInfo';
import TrafficInfo from './subpage/TrafficInfo';
import WeatherInfo from './subpage/WeatherInfo';
import Sidebar from './subpage/Sidebar';
import Footer from '../Footer';
import './css/subPage.css';

const SubPage = ({ areaList1, areaList2, areaList3, checkedArea, setCheckedArea, checkedTour, setCheckedTour }) => {
    //MapInfo에서 관리 STAR
    const [depart, setDepart] = useState();
    const [arrival, setArrival] = useState();
    const [checkedDetailArea, setCheckedDetailArea] = useState([]);
    const [showDetail, setShowdetail] = useState([]);
    //MapInfo에서 관리 END

    //SideBar에서 온 훅으로 Keyword 생성 START
    const keyword = checkedArea + ' ' + checkedDetailArea + ' ' + checkedTour;

    const detail_locate = checkedTour == '' ? checkedArea : checkedArea + ' > ' + checkedTour;
    const map_locate =
        checkedDetailArea == '' && checkedTour == ''
            ? checkedArea
            : checkedDetailArea == ''
            ? checkedArea + ` >  ${checkedTour}`
            : checkedTour == ''
            ? checkedArea + ' > ' + checkedDetailArea
            : checkedArea + ' > ' + checkedDetailArea + ` >  ${checkedTour}`;

    console.log('keyword ---> ', keyword);
    //SideBar에서 온 훅으로 Keyword 생성 END

    useEffect(() => {
        console.log('[SubPage] 변경 사항 발생!!!');
    });

    return (
        <>
            <Header />
            <div className="sub-wrap">
                <div>
                    <Sidebar
                        areaList1={areaList1}
                        areaList2={areaList2}
                        areaList3={areaList3}
                        checkedArea={checkedArea}
                        setCheckedArea={setCheckedArea}
                        checkedTour={checkedTour}
                        setCheckedTour={setCheckedTour}
                        checkedDetailArea={checkedDetailArea}
                        setCheckedDetailArea={setCheckedDetailArea}
                    />
                </div>
                <div>
                    {detail_locate}
                    <CityInfo
                        checkedArea={checkedArea}
                        checkedTour={checkedTour}
                        showDetail={showDetail}
                        setShowdetail={setShowdetail}
                    />
                    {map_locate}
                    <MapInfo
                        keyword={keyword}
                        depart={depart}
                        setDepart={setDepart}
                        arrival={arrival}
                        setArrival={setArrival}
                    />
                </div>
                <div>
                    <WeatherInfo checkedArea={checkedArea} />
                    <TrafficInfo depart={depart} arrival={arrival} />
                </div>
            </div>
        </>
    );
};

export default SubPage;
