import React, { useEffect, useState } from 'react';
import SubHeader from '../SubHeader';
import SubFooter from '../SubFooter';
import CityInfo from './subpage/CityInfo';
import MapInfo from './subpage/MapInfo';
import TrafficInfo from './subpage/TrafficInfo';
import WeatherInfo from './subpage/WeatherInfo';
import Sidebar from './subpage/Sidebar';
import './css/subPage.css';

const SubPage = ({ areaList, checkedArea, setCheckedArea, checkedTour, setCheckedTour }) => {
    //MapInfo에서 관리 STAR
    const [depart, setDepart] = useState();
    const [arrival, setArrival] = useState();
    const [checkedDetailArea, setCheckedDetailArea] = useState([]);
    const [showDetail, setShowdetail] = useState([]);
    const [addKakaoPin, setAddKakaoPin] = useState([]);

    //MapInfo에서 관리 END

    //SideBar에서 온 훅으로 Keyword 생성 START

    if (checkedArea === '') {
        setCheckedArea('대구');
    }
    if (checkedTour === '') {
        setCheckedTour('관광지');
    }

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
        <div className='subpage'>
            <SubHeader />
            <div className='sub-wrap'>
                <div>
                    <Sidebar
                        areaList={areaList}
                        checkedArea={checkedArea}
                        setCheckedArea={setCheckedArea}
                        checkedTour={checkedTour}
                        setCheckedTour={setCheckedTour}
                        checkedDetailArea={checkedDetailArea}
                        setCheckedDetailArea={setCheckedDetailArea}
                        addKakaoPin={addKakaoPin}
                    />
                </div>
                <div>
                    {/* {detail_locate} */}
                    <CityInfo
                        detail_locate={detail_locate}
                        checkedArea={checkedArea}
                        checkedTour={checkedTour}
                        showDetail={showDetail}
                        setShowdetail={setShowdetail}
                        addKakaoPin={addKakaoPin}
                        setAddKakaoPin={setAddKakaoPin}
                    />
                    {/* {map_locate} */}
                    <MapInfo
                        map_locate={map_locate}
                        keyword={keyword}
                        depart={depart}
                        setDepart={setDepart}
                        arrival={arrival}
                        setArrival={setArrival}
                        addKakaoPin={addKakaoPin}
                        checkedTour={checkedTour}
                    />
                </div>
                <div>
                    <WeatherInfo checkedArea={checkedArea} />
                    <TrafficInfo depart={depart} setDepart={setDepart} arrival={arrival} setArrival={setArrival} />
                </div>
            </div>
            <SubFooter />
        </div>
    );
};

export default SubPage;
