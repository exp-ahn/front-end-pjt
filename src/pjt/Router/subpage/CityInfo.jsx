// import React from 'react';

// const CityInfo = () => {
//     return <></>;
// };
// export default CityInfo;

//============================================================

import React from "react";
import { useEffect } from "react";

//12:관광지     14:문화시설     15:축제공연행사     25:여행코스(안됨 지금)
//28:레포츠     32:숙박         38:쇼핑             39:음식점

const CityInfo = ({ checkedArea, checkedTour, showDetail, setShowdetail }) => {
    const url = "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?";
    const serviceKey = "t51lRPM28ojei66rhxTvsdJD3NoGauLy2iSnMetoi7TWdAYiyOr3jNo5wtn58txAyGr1IYQlVbXUEFFhOB5ogQ%3D%3D";
    const numOfRows = "200";
    const pageNo = "1";
    const MobileOs = "ETC";
    const MobileApp = "AppTest";
    const type = "json";
    const listYN = "Y";
    const arrange = "A";
    let area = checkedArea; //keyword          //임시로 let
    let tour = checkedTour;

    const contentTypeId = {
        12: "관광지",
        14: "문화시설",
        15: "행사",
        // '25' : '여행코스',
        28: "레포츠",
        32: "숙박",
        38: "쇼핑",
        39: "음식점",
    };
    //const contentTypeId = "12";
    const contentTypeIdKEY = Object.keys(contentTypeId);
    console.log("checkedTour-->", checkedTour);
    let contentTypeIdSellect = contentTypeIdKEY.filter((value) => contentTypeId[value] == checkedTour); //임시로 let
    console.log("contentTypeIdSellect--->", contentTypeIdSellect);

    //잠시 에러잡는 곳
    if (area == "") area = "부산";
    if (tour == "") tour = "관광지";
    if (contentTypeIdSellect == "") {
        console.log("없습니다!!");
        contentTypeIdSellect = "12";
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
    console.log("[city]tour_url", tour_url);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                //`https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=t51lRPM28ojei66rhxTvsdJD3NoGauLy2iSnMetoi7TWdAYiyOr3jNo5wtn58txAyGr1IYQlVbXUEFFhOB5ogQ%3D%3D&numOfRows=10&pageNo=2&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12`
                tour_url
            );

            const json = await response.json();
            //console.log('[city]data 키 값 추가 전',json.response.body.items.item);

            const city_data = json.response.body.items.item;

            console.log("[setShowdetail--->] 작동!!");

            setShowdetail(city_data);

            city_data.length = 10;
            console.log("[city]data", city_data);
        })();
    }, [checkedArea, checkedTour]);
    //}, [checkedArea, contentTypeIdSellect]);

    return (
        <div>
            <hr />
            <br />
            <div>큰거</div>
            {showDetail.map((it, idx) => (
                <div key={idx}>
                    <ul>
                        <li>
                            이미지:
                            <img src={it.firstimage} width='50px' height='50px' />
                        </li>
                        <li>제목: {it.title}</li>
                    </ul>
                </div>
            ))}
            <br />
            <hr />
            <br />
        </div>
    );
};

export default CityInfo;
