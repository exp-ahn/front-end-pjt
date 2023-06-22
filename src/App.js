import React from 'react';
import { useState } from 'react';
import Header from './pjt/Header';
import Footer from './pjt/Footer';
import Main_01 from './pjt/Router/Main_01';
import SubPage from './pjt/Router/SubPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TmapTrans from './pjt/Router/api/TmapTrans';

const AREA_LIST = [
    { id: '서울', area: '서울' },
    { id: '부산', area: '부산' },
    { id: '제주', area: '제주' },
    { id: '인천', area: '인천' },
    { id: '수원', area: '수원' },
    { id: '대전', area: '대전' },
    { id: '대구', area: '대구' },
    { id: '경주', area: '경주' },
    { id: '전주', area: '전주' },
    { id: '여수', area: '여수' },
];

function App() {
    //SideBar에서 관리 START
    const [checkedArea, setCheckedArea] = useState('');
    const [checkedTour, setCheckedTour] = useState('');
    //SideBar에서 관리 END

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main_01
                                areaList={AREA_LIST}
                                checkedArea={checkedArea}
                                setCheckedArea={setCheckedArea}
                                checkedTour={checkedTour}
                                setCheckedTour={setCheckedTour}
                            />
                        }
                    ></Route>
                    <Route
                        path="/subpage"
                        element={
                            <SubPage
                                areaList={AREA_LIST}
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
