import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/TrafficInfo.css";
import TrafficLocationName from "./TrafficLocationName";

const api_key = "pgBrEGAgHf3PCyo7Oytic7Rbz050sGhUaycNiYP2";
const url = "https://apis.openapi.sk.com/transit/routes";

const trafficKor = {
    도보: "WALK",
    버스: "BUS",
    급행버스: "EXPRESSBUS",
    지하철: "SUBWAY",
    비행기: "AIRPLANE",
};

const TrafficInfo = ({ depart, arrival }) => {
    const [findingRoute, setFindingRoute] = useState(false);
    const [routeFound, setRouteFound] = useState(false);
    const [trafficData, setTrafficData] = useState(null);

    const payload = (depart, arrival) => {
        let params = {
            startX: depart.longitude,
            startY: depart.latitude,
            endX: arrival.longitude,
            endY: arrival.latitude,
            lang: 0,
            format: "json",
            count: 1,
        };
        return params;
    };

    const findRouteBtnHandler = async () => {
        console.log("[TrafficInfo] findRouteBtnHandler() CALLED!!!");
        setTrafficData(null);
        if (depart !== undefined && arrival !== undefined) {
            setFindingRoute(true);
            setRouteFound(false);

            try {
                const response = await axios.post(url, payload(depart, arrival), {
                    headers: {
                        "content-Type": "application/json",
                        appKey: api_key,
                        accept: "application/json",
                    },
                });

                setTrafficData(response.data);
                setFindingRoute(false);
                setRouteFound(true);
            } catch (error) {
                console.log("API 호출에 실패했습니다.", error);
                return error;
            }
        }
    };

    const displayRouteResults = () => {
        console.log("[TrafficInfo] displayRouteResults() CALLED!!!");
        if (trafficData === null) {
            return null;
        }

        if ("result" in trafficData) {
            return <p>길찾기 결과가 없습니다.</p>;
        } else {
            const itineraries = trafficData.metaData.plan.itineraries;
            const totalFare = itineraries[0].fare.regular.totalFare;
            const totalTime_hour = parseInt(itineraries[0].totalTime / 60 / 60);
            const totalTime_min = parseInt(itineraries[0].totalTime / 60) - totalTime_hour * 60;
            const totalTime_sec = itineraries[0].totalTime % 60;
            const legs = itineraries[0].legs.filter((i) => i.mode !== "TRANSFER");

            return (
                <div>
                    <p>
                        총 요금:&nbsp;{totalFare}원&nbsp;&nbsp;&nbsp;총 시간:&nbsp;
                        {{ totalTime_hour } === 0
                            ? `${totalTime_min}분 ${totalTime_sec}초`
                            : `${totalTime_hour}시간 ${totalTime_min}분 ${totalTime_sec}초`}
                    </p>
                    {legs.map((i, index) => (
                        <p key={index}>
                            {Object.keys(trafficKor).find((key) => trafficKor[key] === i.mode)}
                            &nbsp;&nbsp;&nbsp;
                            {parseInt(i.sectionTime / 60 / 60) === 0
                                ? `${parseInt(i.sectionTime / 60)}분 ${i.sectionTime % 60}초`
                                : `${parseInt(i.sectionTime / 60 / 60)}시간 ${
                                      parseInt(i.sectionTime / 60) - parseInt(i.sectionTime / 60 / 60) * 60
                                  }분 ${i.sectionTime % 60}초`}
                        </p>
                    ))}
                </div>
            );
        }
    };

    useEffect(() => {
        console.log("[TrafficInfo] useEffect() CALLED!!!");
        if (findingRoute) {
            setRouteFound(false);
            displayRouteResults();
        }
    }, [findingRoute]);

    return (
        <div className='location'>
            <h1>길찾기</h1>
            <div className='location-user-group-wrap'>
                <TrafficLocationName class='location-user-group' name='출발지' location={depart} />
                <TrafficLocationName class='location-user-group' name='목적지' location={arrival} />
                <button type='submit' onClick={findRouteBtnHandler}>
                    길찾기
                </button>
            </div>
            <div className='location-result-group-wrap'>
                <div className='location-result-group'>
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
