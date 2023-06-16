import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
const { kakao } = window;

//마커 다시 클릭하거나하면 올라온 설명

const KakaoMap = ({ keyword, depart, setDepart, arrival, setArrival }) => {
    // return (
    //     <div>
    //         <br />
    //         카카오맵입니다.
    //         <br />
    //         {checkedArea}
    //         <br />
    //         {checkedTour}
    //     </div>
    // );

    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();

    const departureBtnClickHandler = () => {
        console.log('[MapInfo] departureBtnClickHandler CLICKED!!');
        if (info && info.position) {
            const { lat, lng } = info.position;
            setDepart({ latitude: lat, longitude: lng });
            console.log('출발지 위도:', lat);
            console.log('출발지 경도:', lng);
        }
    };

    const arrivalBtnClickHandler = () => {
        console.log('[MapInfo] arrivalBtnClickHandler CLICKED!!');
        if (info && info.position) {
            const { lat, lng } = info.position;
            setArrival({ latitude: lat, longitude: lng });
            console.log('도착지 위도:', lat);
            console.log('도착지 경도:', lng);
        }
    };
    useEffect(() => {
        if (!map) return;
        const ps = new kakao.maps.services.Places();
        //libraries=services에서 지원하는 Places

        if (keyword == '') {
            //아직 default를 안잡아줘서 오류걸리니 부산으로 임시로 해놓음
            keyword = '부산';
        }

        //ps.keywordSearch("센텀 맛집", (data, status, _pagination) => {
        ps.keywordSearch(keyword, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds();
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
                    });
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    // console.log(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                setMarkers(markers);

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            }
        });
    }, [map, keyword]);

    return (
        <Map // 로드뷰를 표시할 Container
            center={{
                lat: 37.566826,
                lng: 126.9786567,
            }}
            style={{
                width: '700px',
                height: '500px',
            }}
            level={3}
            onCreate={setMap}
        >
            {markers.map((marker) => (
                <MapMarker
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
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
                            <a href={marker.content2} target="_blank" style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
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
            ))}
        </Map>
    );
};

export default KakaoMap;
