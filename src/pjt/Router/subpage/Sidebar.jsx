import React, { useEffect } from "react";
import "../css/common.css";
import "../css/style.css";

let Detail_Area = [];

const Seoul_Area = [
    { id: "송리단길", area: "송리단길" },
    { id: "강동구", area: "강동구" },
    { id: "강서구", area: "강서구" },
    { id: "관악구", area: "관악구" },
];

const Busan_Area = [
    { id: "서면", area: "서면" },
    { id: "전리단길", area: "전리단길" },
    { id: "해리단길", area: "해리단길" },
    { id: "남구", area: "남구" },
];

const TOUR_1 = [
    { id: "관광지", tour: "관광지" },
    { id: "문화시설", tour: "문화시설" },
    { id: "행사", tour: "행사" },
    // { id: '여행코스', tour: '여행코스' }, 에러걸림
];
const TOUR_2 = [
    { id: "레포츠", tour: "레포츠" },
    { id: "숙박", tour: "숙박" },
    { id: "쇼핑", tour: "쇼핑" },
    { id: "음식점", tour: "음식점" },
];

const SideBar_test = ({
    areaList1,
    areaList2,
    areaList3,
    checkedArea,
    setCheckedArea,
    checkedTour,
    setCheckedTour,
    checkedDetailArea,
    setCheckedDetailArea,
}) => {
    useEffect(() => {
        console.log("체크박스 변동!!!");
        console.log(checkedArea);
        console.log(checkedTour);

        //Detail_Area = Busan_Area;
    }, [checkedArea, checkedTour]);

    const onCheckedRadioArea = (checked, item) => {
        //라디오용
        if (checked) {
            console.log(item, "체크됨");
            setCheckedArea(item);

            //변경
            if (item == "서울") {
                Detail_Area = Seoul_Area;
                console.log("[Detail_Area]-->", Detail_Area);
            } else if (item == "부산") {
                Detail_Area = Busan_Area;
                console.log("[Detail_Area]-->", Detail_Area);
            }

            console.log(checkedArea); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, "체크 헤제됨");

            setCheckedArea(checkedArea.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedArea); // 리스트 테스트용
        }
    };

    const onCheckedRadioTour = (checked, item) => {
        //체크박스용
        if (checked) {
            console.log(item, "체크됨");
            //setCheckedTour([...checkedTour, item]);
            setCheckedTour(item);

            // checkedTour.push(item);
            // let temp = checkedTour.slice();
            // checkedTour(temp);

            console.log(checkedTour); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, "체크 헤제됨");

            setCheckedTour(checkedTour.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedTour); // 리스트 테스트용
        }
    };

    const onCheckedRadio_detail = (checked, item) => {
        if (checked) {
            console.log(item, "체크됨");
            setCheckedDetailArea(item);

            console.log(checkedDetailArea); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, "체크 헤제됨");

            setCheckedDetailArea(checkedDetailArea.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedDetailArea); // 리스트 테스트용
        }
    };

    return (
        <div className='sidebar'>
            <div className='filter-head'>필터</div>
            <div className='filter-category'>
                <p>지역</p>
                <ul className='filter-checkbox'>
                    {areaList1.map((item) => {
                        if (item.area == checkedArea) {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        defaultChecked
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        }
                    })}
                </ul>
                <ul className='filter-checkbox'>
                    {areaList2.map((item) => {
                        if (item.area == checkedArea) {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        defaultChecked
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        }
                    })}
                </ul>
                <ul className='filter-checkbox'>
                    {areaList3.map((item) => {
                        if (item.area == checkedArea) {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        defaultChecked
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='area_radio'
                                        defaultValue={item.area}
                                        onChange={(e) => {
                                            onCheckedRadioArea(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.area}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className='filter-category'>
                <p>지역2</p>
                <ul className='filter-checkbox'>
                    {Detail_Area.map((item) => {
                        return (
                            <li key={item.id}>
                                <input
                                    type='radio'
                                    name='area_radio2'
                                    value={item.area}
                                    onChange={(e) => {
                                        onCheckedRadio_detail(e.target.checked, e.target.value);
                                    }}
                                />
                                {item.area}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className='filter-category'>
                <p>관광지</p>
                <ul className='filter-checkbox'>
                    {TOUR_1.map((item) => {
                        if (item.tour == checkedTour) {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='tour_radio'
                                        value={item.tour}
                                        checked
                                        onChange={(e) => {
                                            onCheckedRadioTour(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.tour}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='tour_radio'
                                        value={item.tour}
                                        onChange={(e) => {
                                            onCheckedRadioTour(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.tour}
                                </li>
                            );
                        }
                    })}
                </ul>
                <ul className='filter-checkbox'>
                    {TOUR_2.map((item) => {
                        if (item.tour == checkedTour) {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='tour_radio'
                                        value={item.tour}
                                        checked
                                        onChange={(e) => {
                                            onCheckedRadioTour(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.tour}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <input
                                        type='radio'
                                        name='tour_radio'
                                        value={item.tour}
                                        onChange={(e) => {
                                            onCheckedRadioTour(e.target.checked, e.target.value);
                                        }}
                                    />
                                    {item.tour}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar_test;
