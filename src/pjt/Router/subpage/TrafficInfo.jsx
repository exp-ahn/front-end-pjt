import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/TrafficInfo.css';
import TrafficLocationName from './TrafficLocationName';

const api_key = 'uWsrh1zKfT7GAQ1LpsAas5ye2KbeXxPL7oHwuyAX';
const url = 'https://apis.openapi.sk.com/transit/routes';

const trafficKorData = {
    도보: 'WALK',
    버스: 'BUS',
    급행버스: 'EXPRESSBUS',
    지하철: 'SUBWAY',
    비행기: 'AIRPLANE',
};
const trafficImgData = {
    'M14.032 3.622a1.622 1.622 0 11-3.243-.001 1.622 1.622 0 013.243.001zm3.405 8.306a.564.564 0 01.111.765l-.365.523a.567.567 0 01-.753.161l-1.818-1.092v1.066l1.995 7.977a.541.541 0 01-.525.672h-1.096a.539.539 0 01-.505-.35l-2.305-6.146-2.304 6.146a.543.543 0 01-.507.35H8.27a.54.54 0 01-.524-.672l1.994-7.977V9.66l-.214.21-1.544 3.182a.567.567 0 01-.698.285l-.559-.199a.56.56 0 01-.32-.29.556.556 0 01-.022-.431L7.632 8.91a.853.853 0 01.171-.285l1.673-1.84a1.41 1.41 0 011.043-.462h2.964a1.13 1.13 0 011.129 1.13v2.222l2.825 2.252z':
        'WALK',
    'M16 15.39a1 1 0 112 0 1 1 0 01-2 0zm-10 0a1 1 0 112 0 1 1 0 01-2 0zm0-3.89h12v-5H6v5zM15.884 4a21.397 21.397 0 01-.14-.325.656.656 0 00-.479-.388C14.569 3.116 13.491 3 12 3c-1.49 0-2.568.115-3.265.287a.656.656 0 00-.48.388c-.042.102-.09.214-.14.325H5.5A1.5 1.5 0 004 5.5v15a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1.36h12v1.36a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-15A1.5 1.5 0 0018.5 4h-2.616z':
        'Bus',
    'M11.75 11.567a.813.813 0 111.626 0 .813.813 0 01-1.626 0zm-8.125 0a.813.813 0 111.626 0 .813.813 0 01-1.626 0zm0-3.16h9.75V4.343h-9.75v4.062zm8.031-6.095c-.04-.09-.08-.18-.114-.264a.533.533 0 00-.389-.315C10.586 1.593 9.711 1.5 8.5 1.5s-2.086.094-2.653.233a.533.533 0 00-.39.315 9.95 9.95 0 01-.113.264H3.219A1.22 1.22 0 002 3.532V16.1c0 .224.182.4.406.4h.813a.401.401 0 00.406-.4V15h9.75v1.1c0 .224.182.4.406.4h.813a.401.401 0 00.406-.4V3.531a1.22 1.22 0 00-1.219-1.219h-2.125z':
        'EXPRESSBUS',
    'M17.265 3c.424 0 .79.269.908.652l.028.118 1.334 8.048c.027.162.032.325.014.487l-.026.16-.918 3.514a.936.936 0 01-.808.728l-.122.007h-2.117L20 21h-2.243l-1.645-1.77h-8.25L6.21 21H4l4.442-4.286h-2.1a.945.945 0 01-.898-.621l-.031-.114-.919-3.513a1.76 1.76 0 01-.032-.486l.02-.162L5.814 3.77a.933.933 0 01.812-.762L6.752 3h10.513zm-3.493 13.714h-3.554l-1.336 1.428H15.1l-1.327-1.428zM15.6 12.43c-.52 0-.94.405-.94.907 0 .501.42.908.94.908.519 0 .94-.407.94-.908 0-.502-.421-.908-.94-.908zm-7.16 0c-.49 0-.888.383-.888.857 0 .473.398.857.889.857.49 0 .888-.384.888-.857 0-.474-.398-.857-.888-.857zm7.996-7.715H7.553l-.888 5.143h10.66l-.888-5.143z':
        'SUBWAY',
    'M16.5 13v1.5H.5V13h16zM5.346 3a.59.59 0 01.22.043l5.262 2.686 4.116-2.044a1.444 1.444 0 111.22 2.62L5.516 10.971H2.727S.092 8.457.056 8.42A.236.236 0 010 8.258c0-.11.065-.203.157-.246l.886-.409a.358.358 0 01.29-.01H1.33l2.83 1.446 1.71-.849 1.552-.77-1.028-.981-.468-.447a1404.84 1404.84 0 01-1.92-1.836c-.061-.06-.09-.167-.09-.267 0-.178.104-.331.256-.402l.921-.429A.59.59 0 015.346 3z':
        'AIRPLANE',
};

const TrafficInfo = ({ depart, arrival }) => {
    const [findingRoute, setFindingRoute] = useState(false);
    const [routeFound, setRouteFound] = useState(false);
    const [trafficData, setTrafficData] = useState(null);

    const currentLocationBtnHandler = () => {
        console.log('[TrafficInfo] currentLocationBtnHandler() CALLED!!!');
    };

    const payload = (depart, arrival) => {
        let params = {
            startX: depart.longitude,
            startY: depart.latitude,
            endX: arrival.longitude,
            endY: arrival.latitude,
            lang: 0,
            format: 'json',
            count: 1,
        };
        return params;
    };

    const findRouteBtnHandler = async () => {
        console.log('[TrafficInfo] findRouteBtnHandler() CALLED!!!');
        setTrafficData(null);
        if (depart !== undefined && arrival !== undefined) {
            setFindingRoute(true);
            setRouteFound(false);

            try {
                const response = await axios.post(url, payload(depart, arrival), {
                    headers: {
                        'content-Type': 'application/json',
                        appKey: api_key,
                        accept: 'application/json',
                    },
                });

                setTrafficData(response.data);
                setFindingRoute(false);
                setRouteFound(true);
                console.log(response.data);
            } catch (error) {
                console.log('API 호출에 실패했습니다.', error);
                return error;
            }
        }
    };

    const displayRouteResults = () => {
        console.log('[TrafficInfo] displayRouteResults() CALLED!!!');
        if (trafficData === null) {
            return null;
        }

        if ('result' in trafficData) {
            return <p>길찾기 결과가 없습니다.</p>;
        } else {
            const itineraries = trafficData.metaData.plan.itineraries;
            const totalFare = itineraries[0].fare.regular.totalFare;
            const totalTime_hour = parseInt(itineraries[0].totalTime / 60 / 60);
            const totalTime_min = parseInt(itineraries[0].totalTime / 60) - totalTime_hour * 60;
            const totalTime_sec = itineraries[0].totalTime % 60;
            const legs = itineraries[0].legs.filter((i) => i.mode !== 'TRANSFER');

            return (
                <div className="traffic-result-wrap">
                    <p>총 요금:&nbsp;{totalFare}원</p>
                    <p>
                        총 시간:&nbsp;
                        {{ totalTime_hour } === 0
                            ? `${totalTime_min}분 ${totalTime_sec}초`
                            : `${totalTime_hour}시간 ${totalTime_min}분 ${totalTime_sec}초`}
                    </p>
                    {legs.map((i, index) => (
                        <div key={index}>
                            <img className="trarffic-result-picture" src={`./pjt_draft/sub/css/imgs/${i.mode}.png`} />
                            {Object.keys(trafficKorData).find((key) => trafficKorData[key] === i.mode)}
                            &nbsp;&nbsp;&nbsp;
                            {parseInt(i.sectionTime / 60 / 60) === 0
                                ? `${parseInt(i.sectionTime / 60)}분 ${i.sectionTime % 60}초`
                                : `${parseInt(i.sectionTime / 60 / 60)}시간 ${
                                      parseInt(i.sectionTime / 60) - parseInt(i.sectionTime / 60 / 60) * 60
                                  }분 ${i.sectionTime % 60}초`}
                            &nbsp;&nbsp;&nbsp; {i.route}
                            <div className={`traffic-result-list-line ${index} ${i.mode}`}></div>
                        </div>
                    ))}
                </div>
            );
        }
    };

    useEffect(() => {
        console.log('[TrafficInfo] useEffect() CALLED!!!');
        if (findingRoute) {
            setRouteFound(false);
            displayRouteResults();
        }
    }, [findingRoute]);

    return (
        <div className="location">
            <h1>길찾기</h1>
            {/* <button type="button" onClick={currentLocationBtnHandler}>
                현위치
            </button> */}
            <div className="location-user-group-wrap">
                <TrafficLocationName class="location-user-group" name="출발지" location={depart} />
                <TrafficLocationName class="location-user-group" name="목적지" location={arrival} />
                <button type="submit" onClick={findRouteBtnHandler}>
                    길찾기
                </button>
            </div>
            <div className="location-result-group-wrap">
                <div className="location-result-group">
                    {findingRoute && <p>길찾기 중...</p>}
                    {routeFound && (
                        <>
                            <p>길찾기 결과</p>
                            {displayRouteResults()}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrafficInfo;
