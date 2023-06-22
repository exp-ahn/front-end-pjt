import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dots from './Dots';
import Buttons from './Buttons';
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import './css/main.css';

const DIVIDER_HEIGHT = 5;

const Main_01 = ({ checkedArea, setCheckedArea, checkedTour, setCheckedTour }) => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    const [hideButtons, setHideButtons] = useState(false);

    const moveToSubPageBtnClickHandler = (area, tour) => {
        console.log('[Main_01] moveToSubPageBtnClickHandler() CLICKED');
        setCheckedArea(area);
        setCheckedTour(tour);
        setHideButtons(true);
        console.log('checkedArea:', checkedArea);
    };
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault(); //event.preventDefault()는 단순히 html에서 표준으로 제공하는 태그의 기본 이벤트 발생을 막는 메서드
            const { deltaY } = e; // 스크롤 이벤트에서 수직 스크롤 값(deltaY) 가져오기
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                    setHideButtons(true); // 버튼 숨기기
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                    setHideButtons(true); // 버튼 숨기기
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                    setHideButtons(true); // 버튼 숨기기
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                    setHideButtons(false); // 버튼 나타내기
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                    setHideButtons(false); // 버튼 나타내기
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, up');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                    setHideButtons(true); // 버튼 숨기기
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);
    return (
        <>
            <div ref={outerDivRef} className="outer">
                <Dots scrollIndex={scrollIndex} />
                <MainHeader />
                <div className="inner bg-yellow">
                    <Buttons
                        setCheckedArea={setCheckedArea}
                        hideButtons={hideButtons}
                        setHideButtons={setHideButtons}
                    />
                </div>
                <div className="inner bg-blue">
                    <div>
                        놀러 가고 싶어?
                        <br />
                        오늘은 대구 어때?
                        <br />
                        <Link to="/subpage">
                            <button className="nextPage" onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}>
                                대구 보러가기
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div className="first_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/대구/대구01.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="second_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/대구/대구04.webp"
                                    onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="third_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/대구/대구02.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="fourth_img">
                            <Link to="/subpage">
                                <img
                                    src="./pics_area/대구/대구 앞산공원.png"
                                    onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="fifth_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/대구/대구05.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('대구', '관광지')}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="inner bg-pink">
                    <div>
                        <div className="first_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/Busan/night/부산01.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="second_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/Busan/night/부산02.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="third_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/Busan/night/부산03.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="fourth_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/Busan/night/부산04.webp"
                                    onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}
                                />
                            </Link>
                        </div>
                        <div className="fifth_img">
                            <Link to="/subpage">
                                <img
                                    src="./trip_pics/Busan/night/부산05.jpg"
                                    onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        아니면
                        <br />
                        부산은 어때?
                        <br />
                        <Link to="/subpage">
                            <button className="nextPage" onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}>
                                부산 보러가기
                            </button>
                        </Link>
                    </div>
                </div>
                <MainFooter />
            </div>
        </>
    );
};

export default Main_01;
