import React, { useEffect } from 'react';
import '../css/common.css';
import '../css/style.css';

const AREA_LIST_1 = [
    { id: '서울', area: '서울' },
    { id: '부산', area: '부산' },
    { id: '광주', area: '광주' },
    { id: '울산', area: '울산' },
];
const AREA_LIST_2 = [
    { id: '대전', area: '대전' },
    { id: '대구', area: '대구' },
    { id: '인천', area: '인천' },
    { id: '제주', area: '제주' },
];
const TOUR_1 = [
    { id: '테마파크', tour: '테마파크' },
    { id: '박물관', tour: '박물관' },
];
const RESTAURANT_1 = [
    { id: '한식', food: '한식' },
    { id: '양식', food: '양식' },
    { id: '중식', food: '중식' },
];

const SideBar_test = ({ checkedArea, setCheckedArea, checkedTour, setCheckedTour }) => {
    useEffect(() => {
        console.log('체크박스 변동!!!');
    }, [checkedArea]);

    const onCheckedRadio = (checked, item) => {
        //라디오용
        if (checked) {
            console.log(item, '체크됨');
            setCheckedArea(item);

            console.log(checkedArea); // 리스트 테스트용
        } else if (!checked) {
            console.log(item, '체크 헤제됨');

            setCheckedArea(checkedArea.filter((el) => el !== item)); //체크박스 전용

            console.log(checkedArea); // 리스트 테스트용
        }
    };
    const onCheckedCheckBox = (checked, item) => {
        //체크박스용
        if (checked) {
            console.log(item, '체크됨');
            setCheckedTour([...checkedTour, item]);

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

    return (
        <div className="sidebar">
            <div className="filter-head">필터</div>
            <div className="filter-category">
                <p>지역</p>
                <ul className="filter-checkbox">
                    {AREA_LIST_1.map((item) => {
                        return (
                            <li key={item.id}>
                                <input
                                    type="radio"
                                    name="area_radio"
                                    value={item.area}
                                    onChange={(e) => {
                                        onCheckedRadio(e.target.checked, e.target.value);
                                    }}
                                />
                                {item.area}
                            </li>
                        );
                    })}
                </ul>
                <ul className="filter-checkbox">
                    {AREA_LIST_2.map((item) => {
                        return (
                            <li key={item.id}>
                                <input
                                    type="radio"
                                    name="area_radio"
                                    value={item.area}
                                    onChange={(e) => {
                                        onCheckedRadio(e.target.checked, e.target.value);
                                    }}
                                />
                                {item.area}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="filter-category">
                <p>관광지</p>
                <ul className="filter-checkbox">
                    {TOUR_1.map((item) => {
                        return (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    value={item.tour}
                                    onChange={(e) => {
                                        onCheckedCheckBox(e.target.checked, e.target.value);
                                    }}
                                />
                                {item.tour}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="filter-category">
                <p>맛집</p>
                <ul className="filter-checkbox">
                    {RESTAURANT_1.map((item) => {
                        return (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    value={item.food}
                                    onChange={(e) => {
                                        onCheckedCheckBox(e.target.checked, e.target.value);
                                    }}
                                />
                                {item.food}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar_test;
