import React, { useEffect, useState } from 'react';
import '../css/TrafficInfo.css';
import axios from 'axios';

const trafficKor = {
    도보: 'WALK',
    버스: 'BUS',
    급행버스: 'EXPRESSBUS',
    지하철: 'SUBWAY',
    비행기: 'AIRPLANE',
};

const TrafficInfo = ({ depart, arrival }) => {
    const api_key = 'pgBrEGAgHf3PCyo7Oytic7Rbz050sGhUaycNiYP2';
    const url = 'https://apis.openapi.sk.com/transit/routes';

    const [trafficData, setTrafficData] = useState(null);

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

    useEffect(() => {
        console.log('[TrafficInfo.js] useEffect() CALLED!!!');
        console.log(depart);
        console.log(arrival);
    });

    const Data = async (depart, arrival) => {
        try {
            const response = await axios.post(url, payload(depart, arrival), {
                headers: {
                    'content-Type': 'application/json',
                    appKey: api_key,
                    accept: 'application/json',
                },
            });
            setTrafficData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(payload(depart, arrival));
            console.log('API 호출에 실패했습니다.', error);
            return error;
        }
    };

    const findRouteBtnHandler = () => {
        if (depart !== undefined && arrival !== undefined) {
            Data(depart, arrival);
        }
    };

    return (
        <div className="location">
            <h1>길찾기</h1>
            <div className="location-user-group-wrap">
                <div className="location-user-group">
                    <p>출발지</p>
                    <p>{depart === undefined ? '출발지를 눌러주세요' : depart.name}</p>
                </div>
                <div className="location-user-group">
                    <p>목적지</p>
                    <p>{arrival === undefined ? '목적지를 눌러주세요' : arrival.name}</p>
                </div>
                <button type="submit" onClick={findRouteBtnHandler}>
                    길찾기
                </button>
            </div>
            <div className="location-result-group-wrap">
                <div className="location-result-group">
                    {trafficData === null ? null : <p>길찾기 결과</p>}
                    <ul>
                        <li>
                            {trafficData === null
                                ? null
                                : `요금: ${
                                      trafficData.metaData.plan.itineraries[0].fare.regular.totalFare
                                  }원 총 시간: ${parseInt(
                                      trafficData.metaData.plan.itineraries[0].totalTime / 60
                                  )}분  ${trafficData.metaData.plan.itineraries[0].totalTime % 60}초`}
                            {trafficData === null
                                ? null
                                : trafficData.metaData.plan.itineraries[0].legs
                                      .filter((i) => i.mode !== 'TRANSFER')
                                      .map((i, index) =>
                                          i.mode === 'WALK' ? (
                                              <p key={index}>
                                                  {Object.keys(trafficKor).find((key) => trafficKor[key] === i.mode)}{' '}
                                                  &nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                                  {`${parseInt(i.sectionTime / 60)}분 ${i.sectionTime % 60}초`}
                                              </p>
                                          ) : (
                                              <p key={index}>
                                                  {Object.keys(trafficKor).find((key) => trafficKor[key] === i.mode)}{' '}
                                                  &nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                                  {`${parseInt(i.sectionTime / 60)}분 ${i.sectionTime % 60}초`}
                                                  &nbsp;&nbsp;&nbsp;&nbsp; {i.route}
                                              </p>
                                          )
                                      )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TrafficInfo;
