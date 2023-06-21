import React, { useState, useEffect, useRef } from 'react';
import '../css/common.css';
// import '../css/style.css';
import '../css/sidebar.css';

let Detail_Area = [];

const Seoul_Area = [
    { id: '송리단길', area: '송리단길' },
    { id: '강동구', area: '강동구' },
    { id: '강서구', area: '강서구' },
    { id: '관악구', area: '관악구' },
];

const Busan_Area = [
    { id: '서면', area: '서면' },
    { id: '전리단길', area: '전리단길' },
    { id: '해리단길', area: '해리단길' },
    { id: '남구', area: '남구' },
];

const TOUR = [
    { id: '관광지', tour: '관광지' },
    { id: '문화시설', tour: '문화시설' },
    { id: '행사', tour: '행사' },
    // { id: '여행코스', tour: '여행코스' }, 에러걸림
    { id: '레포츠', tour: '레포츠' },
    { id: '숙박', tour: '숙박' },
    { id: '쇼핑', tour: '쇼핑' },
    { id: '음식점', tour: '음식점' },
];

const SideBar_test = ({
    areaList,
    checkedArea,
    setCheckedArea,
    checkedTour,
    setCheckedTour,
    checkedDetailArea,
    setCheckedDetailArea,
    addKakaoPin,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const buttonContent = isSidebarOpen ? (
        <>
            <img src="./filter01.png" />
            필터 숨기기
        </>
    ) : (
        <>
            <img src="./filter01.png" />
            필터 표시
        </>
    );

    useEffect(() => {
        console.log('체크박스 변동!!!');
        if (checkedArea == '서울') {
            Detail_Area = Seoul_Area;
            console.log('[Detail_Area]-->', Detail_Area);
        } else if (checkedArea == '부산') {
            Detail_Area = Busan_Area;
            console.log('[Detail_Area]-->', Detail_Area);
        }
        addKakaoPin.length = 0;

        //Detail_Area = Busan_Area;
    }, [checkedArea, checkedTour, checkedDetailArea]);

    const onCheckedRadioArea = (checked, item) => {
        //라디오용
        if (checked) {
            console.log(item, '체크됨');
            setCheckedArea(item);
            setCheckedDetailArea('');

            //변경
            if (item == '서울') {
                Detail_Area = Seoul_Area;
                console.log('[Detail_Area]-->', Detail_Area);
            } else if (item == '부산') {
                Detail_Area = Busan_Area;
                console.log('[Detail_Area]-->', Detail_Area);
            }

            console.log(checkedArea); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, '체크 헤제됨');

            setCheckedArea(checkedArea.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedArea); // 리스트 테스트용
        }
    };

    const onCheckedRadioTour = (checked, item) => {
        //체크박스용
        if (checked) {
            console.log(item, '체크됨');
            //setCheckedTour([...checkedTour, item]);
            setCheckedTour(item);

            // checkedTour.push(item);
            // let temp = checkedTour.slice();
            // checkedTour(temp);

            console.log(checkedTour); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, '체크 헤제됨');

            setCheckedTour(checkedTour.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedTour); // 리스트 테스트용
        }
    };

    const onCheckedRadio_detail = (checked, item) => {
        if (checked) {
            console.log(item, '체크됨');
            setCheckedDetailArea(item);

            console.log(checkedDetailArea); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, '체크 헤제됨');

            setCheckedDetailArea(checkedDetailArea.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedDetailArea); // 리스트 테스트용
        }
    };

    return (
        <>
            <button className={`filter-head ${isSidebarOpen ? '' : 'collapsed'}`} onClick={toggleSidebar}>
                {buttonContent}
            </button>
            <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
                <hr />
                <br />
                <div className="filter-category">
                    <p>지역</p>
                    <ul className="filter-checkbox">
                        {areaList.map((item) => {
                            if (item.area == checkedArea) {
                                return (
                                    <li key={item.id}>
                                        <label className="box-radio-input">
                                            <input
                                                type="radio"
                                                name="area_radio"
                                                defaultValue={item.area}
                                                defaultChecked
                                                onChange={(e) => {
                                                    onCheckedRadioArea(e.target.checked, e.target.value);
                                                }}
                                            />
                                            <span>{item.area}</span>
                                        </label>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={item.id}>
                                        <label className="box-radio-input">
                                            <input
                                                type="radio"
                                                name="area_radio"
                                                defaultValue={item.area}
                                                onChange={(e) => {
                                                    onCheckedRadioArea(e.target.checked, e.target.value);
                                                }}
                                            />
                                            <span>{item.area}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
                <br />
                <hr />
                <br />
                <div className="filter-category">
                    <p>상세 지역</p>
                    <ul className="filter-checkbox">
                        {Detail_Area.map((item) => {
                            return (
                                <li key={item.id}>
                                    <label className="box-radio-input">
                                        <input
                                            type="radio"
                                            name="area_radio2"
                                            value={item.area}
                                            onChange={(e) => {
                                                onCheckedRadio_detail(e.target.checked, e.target.value);
                                            }}
                                        />
                                        <span>{item.area}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <br />
                <hr />
                <br />
                <div className="filter-category">
                    <p>관광지</p>
                    <ul className="filter-checkbox">
                        {TOUR.map((item) => {
                            if (item.tour == checkedTour) {
                                return (
                                    <li key={item.id}>
                                        <label className="box-radio-input">
                                            <input
                                                type="radio"
                                                name="tour_radio"
                                                defaultValue={item.tour}
                                                defaultChecked
                                                onChange={(e) => {
                                                    onCheckedRadioTour(e.target.checked, e.target.value);
                                                }}
                                            />
                                            <span>{item.tour}</span>
                                        </label>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={item.id}>
                                        <label className="box-radio-input">
                                            <input
                                                type="radio"
                                                name="tour_radio"
                                                defaultValue={item.tour}
                                                onChange={(e) => {
                                                    onCheckedRadioTour(e.target.checked, e.target.value);
                                                }}
                                            />
                                            <span>{item.tour}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SideBar_test;
