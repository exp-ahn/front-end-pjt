import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/TrafficInfo.css';
import TrafficLocationName from './TrafficLocationName';
import TrafficResultList from './TrafficResultList';
import Swal from 'sweetalert2';

const api_key = 'uWsrh1zKfT7GAQ1LpsAas5ye2KbeXxPL7oHwuyAX';
const url = 'https://apis.openapi.sk.com/transit/routes';

const TrafficInfo = ({ depart, setDepart, arrival, setArrival }) => {
    const [findingRoute, setFindingRoute] = useState(false);
    const [routeFound, setRouteFound] = useState(false);
    const [trafficData, setTrafficData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

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
        setErrorMessage(null);
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
                // console.log(response.data);
            } catch (error) {
                console.log('API 호출에 실패했습니다.', error);
                setErrorMessage('서버 에러입니다. 다시 시도해주세요.');
                return error;
            }
        } else if (depart === undefined && arrival === undefined) {
            Swal.fire({ title: '출발지와 목적지를 눌러주세요!', confirmButtonColor: '#3085d6' });
        } else if (depart === undefined) {
            Swal.fire({ title: '출발지를 눌러주세요!', confirmButtonColor: '#3085d6' });
        } else if (arrival === undefined) {
            Swal.fire({ title: '목적지를 눌러주세요!', confirmButtonColor: '#3085d6' });
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
                    <div className="traffic-result-top">
                        <p>총 요금:&nbsp;{totalFare}원</p>
                        <p>
                            총 시간:&nbsp;
                            {totalTime_hour === 0
                                ? `${totalTime_min}분 ${totalTime_sec}초`
                                : `${totalTime_hour}시간 ${totalTime_min}분 ${totalTime_sec}초`}
                        </p>
                    </div>
                    <div className="traffic-result-bottom">
                        {legs.map((i, index) => (
                            <div key={index}>
                                <TrafficResultList mode={i.mode} sectionTime={i.sectionTime} route={i.route} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    const currentLocationDepartBtnHandler = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const name = '현위치';
                setDepart({ latitude, longitude, name });
            },
            (error) => {
                setErrorMessage('현재 위치를 가져오는데 실패했습니다.');
            }
        );
    };
    const currentLocationArrivalBtnHandler = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const name = '현위치';
                setArrival({ latitude, longitude, name });
            },
            (error) => {
                setErrorMessage('현재 위치를 가져오는데 실패했습니다.');
            }
        );
    };

    useEffect(() => {
        console.log('[TrafficInfo] useEffect() CALLED!!!');
        if (findingRoute) {
            setRouteFound(false);
            displayRouteResults();
        }
    }, [findingRoute, depart]);

    return (
        <div className="location">
            <h1>길찾기</h1>

            <div className="location-user-group-wrap">
                <img
                    className="location-img"
                    type="button"
                    src="./weather_background/현위치.png"
                    title="현위치 출발"
                    onClick={currentLocationDepartBtnHandler}
                />
                <TrafficLocationName class="location-user-group" name="출발지" location={depart} />
                <img
                    className="location-img"
                    type="button"
                    src="./weather_background/현위치.png"
                    title="현위치 도착"
                    onClick={currentLocationArrivalBtnHandler}
                />
                <TrafficLocationName class="location-user-group" name="목적지" location={arrival} />
                <button type="submit" onClick={findRouteBtnHandler}>
                    길찾기
                </button>
            </div>
            <div className="location-result-group-wrap">
                <div className="location-result-group">
                    {errorMessage
                        ? errorMessage
                        : findingRoute && (
                              <div className="location-result-findingRoute">
                                  <div>
                                      <img src="./pjt_draft/sub/css/imgs/loading-circle.gif" />
                                  </div>
                                  <p>길찾기 중입니다...</p>
                              </div>
                          )}
                    {routeFound && (
                        <div>
                            <p>길찾기 결과</p>
                            {displayRouteResults()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrafficInfo;
