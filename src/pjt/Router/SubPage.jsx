import React, { useEffect, useState } from "react";
import CityInfo from "./subpage/CityInfo";
import MapInfo from "./subpage/MapInfo";
import TrafficInfo from "./subpage/TrafficInfo";
import WeatherInfo from "./subpage/WeatherInfo";
import Sidebar from "./subpage/Sidebar";

const SubPage = () => {
    //SideBar에서 관리 START
    const [checkedArea, setCheckedArea] = useState([]);
    const [checkedTour, setCheckedTour] = useState([]);
    //SideBar에서 관리 END

    //SideBar에서 온 훅으로 Keyword 생성 START
    const keyword = checkedArea + checkedTour;
    console.log("keyword ---> ", keyword);
    //SideBar에서 온 훅으로 Keyword 생성 END

    useEffect(() => {
        console.log("[SubPage] 변경 사항 발생!!!");
    });

    return (
        <>
            <div>
                <Sidebar
                    checkedArea={checkedArea}
                    setCheckedArea={setCheckedArea}
                    checkedTour={checkedTour}
                    setCheckedTour={setCheckedTour}
                />
            </div>
            <div>
                <CityInfo />
                <MapInfo keyword={keyword} />
            </div>
            <div>
                <TrafficInfo />
                <WeatherInfo />
            </div>
        </>
    );
};

export default SubPage;
