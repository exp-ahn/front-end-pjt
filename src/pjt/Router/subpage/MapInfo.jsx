import React, { useEffect } from 'react';

const MapInfo = () => {
    useEffect(() => {
        const kakao = window['kakao'];
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const location = new kakao.maps.LatLng(33.450701, 126.570667);
            const options = {
                center: location,
                level: 3,
            };
            const map = new kakao.maps.Map(mapContainer, options); //맵생성

            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            var mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            // // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
            // if (navigator.geolocation) {
            //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            //     navigator.geolocation.getCurrentPosition(function (position) {
            //         var lat = position.coords.latitude, // 위도
            //             lon = position.coords.longitude; // 경도

            //         var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            //             message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

            //         // 마커와 인포윈도우를 표시합니다
            //         displayMarker(locPosition, message);
            //     });
            // } else {
            //     // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            //     var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
            //         message = 'geolocation을 사용할수 없어요..';

            //     displayMarker(locPosition, message);
            // }

            // // 지도에 마커와 인포윈도우를 표시하는 함수입니다
            // function displayMarker(locPosition, message) {
            //     // 마커를 생성합니다
            //     var marker = new kakao.maps.Marker({
            //         map: map,
            //         position: locPosition,
            //     });

            //     var iwContent = message, // 인포윈도우에 표시할 내용
            //         iwRemoveable = true;

            //     // 인포윈도우를 생성합니다
            //     var infowindow = new kakao.maps.InfoWindow({
            //         content: iwContent,
            //         removable: iwRemoveable,
            //     });

            //     // 인포윈도우를 마커위에 표시합니다
            //     infowindow.open(map, marker);

            //     // 지도 중심좌표를 접속위치로 변경합니다
            //     map.setCenter(locPosition);
            // }
            ///////////////////////////////////////////////////////////////////////////////////
            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places();

            // 키워드로 장소를 검색합니다
            ps.keywordSearch('센텀', placesSearchCB);

            // 키워드 검색 완료 시 호출되는 콜백함수 입니다
            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    var bounds = new kakao.maps.LatLngBounds();

                    for (var i = 0; i < data.length; i++) {
                        displayMarker(data[i]);
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    }

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                    map.setBounds(bounds);
                }
            }
            ///////////////////////////////////////////////////////////////////////////////////
            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places(map);

            // 카테고리로 은행을 검색합니다
            ps.categorySearch('BK9', placesSearchCB, { useMapBounds: true });

            // 키워드 검색 완료 시 호출되는 콜백함수 입니다
            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    for (var i = 0; i < data.length; i++) {
                        displayMarker(data[i]);
                    }
                }
            }
            // 지도에 마커를 표시하는 함수입니다
            function displayMarker(place) {
                // 마커를 생성하고 지도에 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x),
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function () {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                    infowindow.open(map, marker);
                });
            }
        });
    }, []);
    return (
        <div
            id="map"
            className="map"
            style={{ width: '50%', height: '45vh', margin: '20vh auto', borderRadius: '10px' }}
        ></div>
    );
};

export default MapInfo;
