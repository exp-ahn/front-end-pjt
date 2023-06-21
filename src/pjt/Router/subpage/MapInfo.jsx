import React, { useEffect, useState, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import '../css/mapinfo.css';

const { kakao } = window;

//마커 다시 클릭하거나하면 올라온 설명

const MapInfo = ({ keyword, depart, setDepart, arrival, setArrival, addKakaoPin, checkedTour }) => {
    const [info, setInfo] = useState();
    const [map, setMap] = useState();
    const [markers, setMarkers] = useState([]);

    let marker_src = '';
    let my_marker_src = '';
    if (checkedTour == '') marker_src = './kakao_marker/kakao_travel.png';
    else if (checkedTour == '관광지') marker_src = './kakao_marker/kakao_travel.png';
    else if (checkedTour == '문화시설') marker_src = './kakao_marker/kakao_culture.png';
    else if (checkedTour == '행사') marker_src = './kakao_marker/kakao_festa.png';
    else if (checkedTour == '레포츠') marker_src = './kakao_marker/kakao_reports.png';
    else if (checkedTour == '숙박') marker_src = './kakao_marker/kakao_hotel.png';
    else if (checkedTour == '쇼핑') marker_src = './kakao_marker/kakao_shop.png';
    else if (checkedTour == '음식점') marker_src = './kakao_marker/kakao_restaurant.png';

    if (depart != undefined || arrival != undefined) {
        my_marker_src = './kakao_marker/kakao_my_location.png';
        console.log('depart', depart);
    }

    const markerImage = {
        src: './kakao_marker/kakao_new_Marker.gif', // 마커이미지의 주소
        size: {
            width: 64,
            height: 69,
        }, // 마커이미지의 크기
    };
    const markerImage2 = {
        src: marker_src, // 마커이미지의 주소
        size: {
            width: 40,
            height: 30,
        }, // 마커이미지의 크기
    };
    const markerImage3 = {
        src: my_marker_src, // 마커이미지의 주소
        size: {
            width: 40,
            height: 30,
        }, // 마커이미지의 크기
    };

    const departureBtnClickHandler = () => {
        console.log('[MapInfo] departureBtnClickHandler CLICKED!!');
        if (info && info.position) {
            const { lat, lng } = info.position;
            const { content } = info;
            setDepart({ latitude: lat, longitude: lng, name: content });
            console.log('출발지 위도:', lat);
            console.log('출발지 경도:', lng);
            console.log('출발지 이름:', content);
        }
    };

    const arrivalBtnClickHandler = () => {
        console.log('[MapInfo] arrivalBtnClickHandler CLICKED!!');
        if (info && info.position) {
            const { lat, lng } = info.position;
            const { content } = info;
            setArrival({ latitude: lat, longitude: lng, name: content });
            console.log('도착지 위도:', lat);
            console.log('도착지 경도:', lng);
            console.log('도착지 이름:', content);
        }
    };

    useEffect(() => {
        if (!map) return;
        const ps = new kakao.maps.services.Places();
        //libraries=services에서 지원하는 Places

        if (keyword == '') {
            //아직 default를 안잡아줘서 오류걸리니 부산으로 임시로 해놓음
            keyword = '대구';
        }

        const addPin_data = {};
        const addPin_my_data = {};

        if (addKakaoPin.length > 0) {
            addPin_data.y = addKakaoPin[3];
            addPin_data.x = addKakaoPin[2];
            addPin_data.place_name = addKakaoPin[1];
            addPin_data.place_address = addKakaoPin[0];
            addPin_data.place_url = 'http://place.map.kakao.com';
            addPin_data.new = 'yes';
        }

        if (depart != undefined) {
            addPin_my_data.y = depart.latitude;
            addPin_my_data.x = depart.longitude;
            addPin_my_data.place_name = depart.name;
            addPin_my_data.place_url = 'http://place.map.kakao.com';
            addPin_my_data.my_place = 'yes';
            console.log('addPin_my_data.length', addPin_my_data);
        }
        if (arrival != undefined) {
            addPin_my_data.y = arrival.latitude;
            addPin_my_data.x = arrival.longitude;
            addPin_my_data.place_name = arrival.name;
            addPin_my_data.place_url = 'http://place.map.kakao.com';
            addPin_my_data.my_place = 'yes';
            console.log('addPin_my_data.length', addPin_my_data);
        }

        //ps.keywordSearch("센텀 맛집", (data, status, _pagination) => {
        ps.keywordSearch(keyword, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds();

                if (addKakaoPin.length > 0) {
                    data.push(addPin_data);
                }
                if (depart != undefined || arrival != undefined) {
                    console.log('addPin_my_data called');
                    data.push(addPin_my_data);
                }

                let markers = [];
                console.log('data ---> ', data);

                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        //content: data[i].place_name,
                        content: data[i].place_name,
                        content2: data[i].place_url,
                        new: data[i].new,
                        my_place: data[i].my_place,
                    });
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    // console.log(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                setMarkers(markers);

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);

                console.log('markers', markers);
            }
        });
    }, [map, keyword, addKakaoPin, depart, arrival]);

    return (
        <Map // 로드뷰를 표시할 Container
            center={{
                lat: 35.8714354,
                lng: 128.601445,
            }}
            style={{
                borderRadius: '20px',
                width: '700px',
                height: '500px',
            }}
            level={3}
            onCreate={setMap}
        >
            {markers.map((marker) =>
                marker.new === 'yes' ? (
                    <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        image={markerImage}
                        onClick={() => setInfo(marker)}
                    >
                        {info && info.content === marker.content && (
                            <div
                                style={{
                                    color: '#000',
                                    width: '150px',
                                    height: '70px',
                                    textAlign: 'center',
                                    paddingTop: '8px',
                                }}
                            >
                                <a
                                    href={marker.content2}
                                    target="_blank"
                                    style={{ fontSize: '0.8em', fontWeight: 'bold' }}
                                >
                                    {marker.content}
                                </a>
                                <div
                                    style={{
                                        marginTop: '10px',
                                    }}
                                >
                                    <button
                                        onClick={departureBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#f00',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        출&nbsp;&nbsp;발
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        onClick={arrivalBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#00f',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        도&nbsp;&nbsp;착
                                    </button>
                                </div>
                            </div>
                        )}
                    </MapMarker>
                ) : marker.my_place === 'yes' ? (
                    <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        image={markerImage3}
                        onClick={() => setInfo(marker)}
                    >
                        {info && info.content === marker.content && (
                            <div
                                style={{
                                    color: '#000',
                                    width: '150px',
                                    height: '70px',
                                    textAlign: 'center',
                                    paddingTop: '8px',
                                }}
                            >
                                <a
                                    href={marker.content2}
                                    target="_blank"
                                    style={{ fontSize: '0.8em', fontWeight: 'bold' }}
                                >
                                    {marker.content}
                                </a>
                                <div
                                    style={{
                                        marginTop: '10px',
                                    }}
                                >
                                    <button
                                        onClick={departureBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#f00',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        출&nbsp;&nbsp;발
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        onClick={arrivalBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#00f',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        도&nbsp;&nbsp;착
                                    </button>
                                </div>
                            </div>
                        )}
                    </MapMarker>
                ) : (
                    <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        image={markerImage2}
                        onClick={() => setInfo(marker)}
                    >
                        {info && info.content === marker.content && (
                            <div
                                style={{
                                    color: '#000',
                                    width: '150px',
                                    height: '70px',
                                    textAlign: 'center',
                                    paddingTop: '8px',
                                }}
                            >
                                <a
                                    href={marker.content2}
                                    target="_blank"
                                    style={{ fontSize: '0.8em', fontWeight: 'bold' }}
                                >
                                    {marker.content}
                                </a>
                                <div
                                    style={{
                                        marginTop: '10px',
                                    }}
                                >
                                    <button
                                        onClick={departureBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#f00',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        출&nbsp;&nbsp;발
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        onClick={arrivalBtnClickHandler}
                                        style={{
                                            width: '60px',
                                            height: '30px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#00f',
                                            textAlign: 'center',
                                            lineHeight: '30px',
                                        }}
                                    >
                                        도&nbsp;&nbsp;착
                                    </button>
                                </div>
                            </div>
                        )}
                    </MapMarker>
                )
            )}
        </Map>
    );
};

export default MapInfo;
