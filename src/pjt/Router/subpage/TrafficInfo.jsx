import React, { useEffect, useState } from 'react';
import '../css/TrafficInfo.css';
// import TmapTrans from '../api/TmapTrans';

// 출발지, 목적지 => 위도, 경도 받아오기
// 출발지 위도, 출발지 경도, 목적지 위도, 목적지 경도 보내서 대중교통 정보 받아오기
// 어떤 형태로 화면에 보여줄지 생각

const TrafficInfo = () => {
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    // const data = TmapTrans();
    // console.log(data);

    useEffect(() => {
        console.log('[TrafficInfo] useEffect() CALLED!!!');
    });

    return (
        <div className="location">
            <h1>길찾기</h1>
            <div className="location-user-group-wrap">
                <div className="location-user-group">
                    <p>출발지</p>
                    <input
                        type="text"
                        name="start"
                        value={start}
                        placeholder="출발지를 입력하세요"
                        onChange={(e) => setStart(e.target.value)}
                    />
                </div>
                <div className="location-user-group">
                    <p>목적지</p>
                    <input
                        type="text"
                        name="destination"
                        value={destination}
                        placeholder="목적지를 입력하세요"
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <button type="submit">길찾기</button>
            </div>
            <div className="location-result-group-wrap">
                <div className="location-result-group"></div>
            </div>
        </div>
    );
};

export default TrafficInfo;
