import React, { useState, useEffect } from 'react';
import '../css/common.css';
// import '../css/style.css';
import '../css/sidebar.css';

let Detail_Area = [];

const Seoul_Area = [
    { id: '익선동', area: '익선동' },
    { id: '연남동', area: '연남동' },
    { id: '성수동', area: '성수동' },
    { id: '동대문', area: '동대문' },
    { id: '한남동', area: '한남동' },
    { id: '이태원', area: '이태원' },
    { id: '문래동', area: '문래동' },
    { id: '명동', area: '명동' },
    { id: '홍대', area: '홍대' },
    { id: '강남', area: '강남' },
];

const Busan_Area = [
    { id: '해운대구', area: '해운대구' },
    { id: '강서구', area: '강서구' },
    { id: '사상구', area: '사상구' },
    { id: '사하구', area: '사하구' },
    { id: '영도구', area: '영도구' },
    { id: '연제구', area: '연제구' },
    { id: '수영구', area: '수영구' },
    { id: '동래구', area: '동래구' },
    { id: '금정구', area: '금정구' },
    { id: '기장군', area: '기장군' },
    { id: '서구', area: '서구' },
    { id: '중구', area: '중구' },
    { id: '동구', area: '동구' },
    { id: '북구', area: '북구' },
    { id: '남구', area: '남구' },
    { id: '진구', area: '진구' },
];

const Jeju_Area = [
    { id: '서귀포시', area: '서귀포시' },
    { id: '신제주', area: '신제주' },
    { id: '구제주', area: '구제주' },
];
const Incheon_Area = [
    { id: '미추홀구', area: '미추홀구' },
    { id: '강화군', area: '강화군' },
    { id: '계양구', area: '계양구' },
    { id: '부평구', area: '부평구' },
    { id: '남동구', area: '남동구' },
    { id: '연수구', area: '연수구' },
    { id: '중구', area: '중구' },
    { id: '서구', area: '서구' },
    { id: '동구', area: '동구' },
];

const Yeosu_Area = [
    { id: '광림동', area: '광림동' },
    { id: '대교동', area: '대교동' },
    { id: '동문동', area: '동문동' },
    { id: '둔덕동', area: '둔덕동' },
    { id: '만덕동', area: '만덕동' },
    { id: '문수동', area: '문수동' },
    { id: '중앙동', area: '중앙동' },
    { id: '국동', area: '국동' },
];

const Suwon_Area = [
    { id: '장안구', area: '장안구' },
    { id: '권선구', area: '권선구' },
    { id: '팔달구', area: '팔달구' },
    { id: '영통구', area: '영통구' },
];

const Daejeon_Area = [
    { id: '유성구', area: '유성구' },
    { id: '대덕구', area: '대덕구' },
    { id: '서구', area: '서구' },
    { id: '중구', area: '중구' },
    { id: '동구', area: '동구' },
];

const Gwangju_Area = [
    { id: '광산구', area: '광산구' },
    { id: '북구', area: '북구' },
    { id: '서구', area: '서구' },
    { id: '남구', area: '남구' },
    { id: '동구', area: '동구' },
];

const Daegu_Area = [
    { id: '수성구', area: '수성구' },
    { id: '달서구', area: '달서구' },
    { id: '달성군', area: '달성군' },
    { id: '북구', area: '북구' },
    { id: '동구', area: '동구' },
    { id: '중구', area: '중구' },
    { id: '서구', area: '서구' },
    { id: '남구', area: '남구' },
];

const Sokcho_Area = [
    { id: '영랑동', area: '영랑동' },
    { id: '동명동', area: '동명동' },
    { id: '금호동', area: '금호동' },
    { id: '노학동', area: '노학동' },
    { id: '조양동', area: '조양동' },
    { id: '청호동', area: '청호동' },
    { id: '대포동', area: '대포동' },
    { id: '교동', area: '교동' },
];

const TOUR = [
    { id: '문화시설', tour: '문화시설' },
    { id: '관광지', tour: '관광지' },
    { id: '레포츠', tour: '레포츠' },
    { id: '음식점', tour: '음식점' },
    { id: '행사', tour: '행사' },
    { id: '숙박', tour: '숙박' },
    { id: '쇼핑', tour: '쇼핑' },
    // { id: '여행코스', tour: '여행코스' }, 에러걸림
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
            &nbsp; 필터 숨기기
        </>
    ) : (
        <>
            <img src="./filter01.png" />
            필터
        </>
    );

    useEffect(() => {
        console.log('체크박스 변동!!!');
        if (checkedArea === '서울') {
            Detail_Area = Seoul_Area;
        } else if (checkedArea === '부산') {
            Detail_Area = Busan_Area;
        } else if (checkedArea === '제주') {
            Detail_Area = Jeju_Area;
        } else if (checkedArea === '인천') {
            Detail_Area = Incheon_Area;
        } else if (checkedArea === '여수') {
            Detail_Area = Yeosu_Area;
        } else if (checkedArea === '수원') {
            Detail_Area = Suwon_Area;
        } else if (checkedArea === '대전') {
            Detail_Area = Daejeon_Area;
        } else if (checkedArea === '광주') {
            Detail_Area = Gwangju_Area;
        } else if (checkedArea === '대구') {
            Detail_Area = Daegu_Area;
        } else if (checkedArea === '속초') {
            Detail_Area = Sokcho_Area;
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
            if (item === '서울') {
                Detail_Area = Seoul_Area;
            } else if (item === '부산') {
                Detail_Area = Busan_Area;
            } else if (item === '제주') {
                Detail_Area = Jeju_Area;
            } else if (item === '인천') {
                Detail_Area = Incheon_Area;
            } else if (item === '여수') {
                Detail_Area = Yeosu_Area;
            } else if (item === '수원') {
                Detail_Area = Suwon_Area;
            } else if (item === '대전') {
                Detail_Area = Daejeon_Area;
            } else if (item === '광주') {
                Detail_Area = Gwangju_Area;
            } else if (item === '대구') {
                Detail_Area = Daegu_Area;
            } else if (item === '속초') {
                Detail_Area = Sokcho_Area;
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
            setCheckedTour(item);

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
        <div className={`filter-wrap ${isSidebarOpen ? '' : 'collapsed'}`}>
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
                            if (item.area === checkedArea) {
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
                            if (item.tour === checkedTour) {
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
        </div>
    );
};

export default SideBar_test;
