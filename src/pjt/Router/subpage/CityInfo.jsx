// import React from 'react';

// const CityInfo = () => {
//     return <></>;
// };
// export default CityInfo;

//============================================================

import React, { useState } from 'react';
import { useEffect } from 'react';
import CityInfoSlide from './CityInfoSlide';
import fetchRetry from 'fetch-retry';
import '../css/cityInfo.css';

//12:관광지     14:문화시설     15:축제공연행사     25:여행코스(안됨 지금)
//28:레포츠     32:숙박         38:쇼핑             39:음식점

const CityInfo = ({
    detail_locate,
    checkedArea,
    checkedTour,
    showDetail,
    setShowdetail,
    addKakaoPin,
    setAddKakaoPin,
}) => {
    const [errorMessage, setErrorMessage] = useState();

    const url = 'http://apis.data.go.kr/B551011/KorService1/searchKeyword1?';
    //const serviceKey = 't51lRPM28ojei66rhxTvsdJD3NoGauLy2iSnMetoi7TWdAYiyOr3jNo5wtn58txAyGr1IYQlVbXUEFFhOB5ogQ%3D%3D';
    const serviceKey =
        '27OBq9gerU7kv8KyoUPqpx%2BMxulovNT9oB%2BW2TqT%2BmADO2tHpBWvWMUuGQWVrKNem4qRs3Huen4r95BigFILzA%3D%3D';
    const numOfRows = '200';
    const pageNo = '1';
    const MobileOs = 'ETC';
    const MobileApp = 'AppTest';
    const type = 'json';
    const listYN = 'Y';
    const arrange = 'A';
    let area = checkedArea; //keyword          //임시로 let
    let tour = checkedTour;

    const contentTypeId = {
        12: '관광지',
        14: '문화시설',
        15: '행사',
        // 25: '여행코스', 데이터가 없음
        28: '레포츠',
        32: '숙박',
        38: '쇼핑',
        39: '음식점',
    };
    //const contentTypeId = "12";
    const contentTypeIdKEY = Object.keys(contentTypeId);
    console.log('checkedTour-->', checkedTour);
    let contentTypeIdSellect = contentTypeIdKEY.filter((value) => contentTypeId[value] == checkedTour); //임시로 let
    console.log('contentTypeIdSellect--->', contentTypeIdSellect);

    //잠시 에러잡는 곳
    if (area === '') area = '부산';
    if (tour === '') tour = '관광지';
    if (contentTypeIdSellect == '') {
        console.log('없습니다!!');
        contentTypeIdSellect = '12';
    }

    //

    const tour_url =
        `${url}` +
        `serviceKey=${serviceKey}` +
        `&numOfRows=${numOfRows}` +
        `&pageNo=${pageNo}` +
        `&MobileOS=${MobileOs}` +
        `&MobileApp=${MobileApp}` +
        `&_type=${type}` +
        `&listYN=${listYN}` +
        `&arrange=${arrange}` +
        `&keyword=${area}` +
        //   `&contentTypeId=${contentTypeId}`;
        `&contentTypeId=${contentTypeIdSellect}`;
    console.log('[city]tour_url', tour_url);

    const [findingData, setFindingData] = useState(false);
    const retryOptions = {
        retries: 3,
        retryDelay: 1000,
    };

    useEffect(() => {
        const retryFetch = fetchRetry(fetch, retryOptions);

        (async () => {
            setFindingData(true);

            try {
                const response = await retryFetch(tour_url);
                const json = await response.json();
                const city_data = json.response.body.items.item;

                console.log('city_data==>', city_data);
                console.log('[setShowdetail--->] 작동!!');

                const cityData = city_data.filter((i) => i.firstimage !== '' && i.modifiedtime > '2000101000000');
                setShowdetail(cityData);

                if (cityData.length > 10) {
                    cityData.length = 10;
                }
                console.log('[city]data', cityData);
            } catch (error) {
                console.error('fetch 실패:', error);
                setErrorMessage('서버 에러입니다. 잠시 후 다시 시도해주세요');
            } finally {
                setFindingData(false);
                console.log('showdetail', showDetail);
            }
        })();
    }, [checkedArea, checkedTour]);

    useEffect(() => {
        if (findingData) {
            detailList();
        }
    }, [findingData]);

    //}, [checkedArea, contentTypeIdSellect]);

    const detailList = () => {
        return (
            <>
                {showDetail.length > 0 ? (
                    <CityInfoSlide showDetail={showDetail} addKakaoPin={addKakaoPin} setAddKakaoPin={setAddKakaoPin} />
                ) : (
                    ''
                )}
            </>
        );
    };

    return (
        <div className='city_info_wrap'>
            {detail_locate}
            <hr />
            <br />
            <div></div>
            {errorMessage !== null
                ? errorMessage
                : findingData && (
                      <div className='location-result-findingRoute'>
                          <div>
                              <img src='./pjt_draft/sub/css/imgs/loading-circle.gif' />
                          </div>
                          <p>로딩 중...</p>
                      </div>
                  )}
            {!findingData && detailList()}
            <br />
        </div>
    );
};

export default CityInfo;
