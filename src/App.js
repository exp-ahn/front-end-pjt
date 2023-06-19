import React from "react";
import { useState } from "react";
import Header from "./pjt/Header";
import Footer from "./pjt/Footer";
import Main_01 from "./pjt/Router/Main_01";
import SubPage from "./pjt/Router/SubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TmapTrans from './pjt/Router/api/TmapTrans';

const AREA_LIST_1 = [
    { id: "서울", area: "서울" },
    { id: "부산", area: "부산" },
    { id: "강릉", area: "강릉" },
    { id: "충북", area: "충북" },
];
const AREA_LIST_2 = [
    { id: "경주", area: "경주" },
    { id: "포항", area: "포항" },
    { id: "대구", area: "대구" },
    { id: "밀양", area: "밀양" },
];
const AREA_LIST_3 = [
    { id: "여수", area: "여수" },
    { id: "거제", area: "거제" },
    { id: "거창", area: "거창" },
    { id: "제주", area: "제주" },
];

// const TOUR_1 = [
//     { id: '테마파크', tour: '테마파크' },
//     { id: '박물관', tour: '박물관' },
// ];
// const RESTAURANT_1 = [
//     { id: '한식', food: '한식' },
//     { id: '양식', food: '양식' },
//     { id: '중식', food: '중식' },
// ];

function App() {
    //SideBar에서 관리 START
    const [checkedArea, setCheckedArea] = useState("");
    const [checkedTour, setCheckedTour] = useState([]);
    //SideBar에서 관리 END

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Main_01
                                areaList1={AREA_LIST_1}
                                areaList2={AREA_LIST_2}
                                areaList3={AREA_LIST_3}
                                checkedArea={checkedArea}
                                setCheckedArea={setCheckedArea}
                                checkedTour={checkedTour}
                                setCheckedTour={setCheckedTour}
                            />
                        }
                    ></Route>
                    <Route
                        path='/subpage'
                        element={
                            <SubPage
                                areaList1={AREA_LIST_1}
                                areaList2={AREA_LIST_2}
                                areaList3={AREA_LIST_3}
                                checkedArea={checkedArea}
                                setCheckedArea={setCheckedArea}
                                checkedTour={checkedTour}
                                setCheckedTour={setCheckedTour}
                            />
                        }
                    ></Route>
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
            {/* <TmapTrans /> */}
        </>
    );
}

export default App;
