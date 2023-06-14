import React from "react";
import { useEffect } from "react";

const url = "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?";
const serviceKey = "t51lRPM28ojei66rhxTvsdJD3NoGauLy2iSnMetoi7TWdAYiyOr3jNo5wtn58txAyGr1IYQlVbXUEFFhOB5ogQ%3D%3D";
const numOfRows = "10";
const pageNo = "2";
const MobileOs = "ETC";
const MobileApp = "AppTest";
const type = "json";
const listYN = "Y";
const arrange = "A";
const keyword = "%EA%B0%95%EC%9B%90";
const contentTypeId = "12";

const Tour = () => {

  const tour_url = `${url}serviceKey=${serviceKey}` +
              `&numOfRows=${numOfRows}` + 
              `&pageNo=${pageNo}` +
              `&MobileOS=${MobileOs}` + 
              `&MobileApp=${MobileApp}` + 
              `&_type=${type}` + 
              `&listYN=${listYN}` + 
              `&arrange=${arrange}` + 
              `&keyword=${keyword}` + 
              `&contentTypeId=${contentTypeId}`;
  //console.log("tour_url",tour_url);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        //`https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=t51lRPM28ojei66rhxTvsdJD3NoGauLy2iSnMetoi7TWdAYiyOr3jNo5wtn58txAyGr1IYQlVbXUEFFhOB5ogQ%3D%3D&numOfRows=10&pageNo=2&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12`
        tour_url
      );

      const json = await response.json();
      console.log(json.response.body.items.item);
    })();
  }, []);
}

export default Tour;

