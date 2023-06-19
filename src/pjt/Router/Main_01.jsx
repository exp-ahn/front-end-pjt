import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dots from './Dots';
import Buttons from './Buttons';
import Header from '../Header';
import Footer from '../Footer';
import './css/main.css';

const DIVIDER_HEIGHT = 5;

const Main_01 = ({ checkedArea, setCheckedArea, checkedTour, setCheckedTour }) => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    const moveToSubPageBtnClickHandler = (area, tour) => {
        console.log('[Main_01] moveToSubPageBtnClickHandler() CLICKED');
        setCheckedArea(area);
        setCheckedTour(tour);
        console.log('checkedArea:', checkedArea);
    };
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
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
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
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
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log('현재 2페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, up');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
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
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex} />
            <Header />
            <div className="inner bg-yellow">
                <Buttons />
            </div>
            <div className="inner bg-blue">
                <div>
                    멘트 작성
                    <br />
                    해야함
                    <br />
                    <Link to="/subpage">
                        <button onClick={() => moveToSubPageBtnClickHandler('부산', '관광지')}>구경하기</button>
                    </Link>
                </div>
                <div>
                    <div className="first_img">
                        <img src="./trip_pics/대구/대구01.jpg" />
                    </div>
                    <div className="second_img">
                        <img src="./trip_pics/대구/대구04.webp" />
                    </div>
                </div>
                <div>
                    <div className="third_img">
                        <img src="./trip_pics/대구/대구02.jpg" />
                    </div>
                    <div className="fourth_img">
                        <img src="./trip_pics/대구/대구03.gif" />
                    </div>
                    <div className="fifth_img">
                        <img src="./trip_pics/대구/대구05.jpg" />
                    </div>
                </div>
            </div>
            <div className="inner bg-pink">
                <div>
                    <div className="first_img">
                        <img src="./trip_pics/Busan/night/부산01.jpg" />
                    </div>
                    <div className="second_img">
                        <img src="./trip_pics/Busan/night/부산02.jpg" />
                    </div>
                </div>
                <div>
                    <div className="third_img">
                        <img src="./trip_pics/Busan/night/부산03.jpg" />
                    </div>
                    <div className="fourth_img">
                        <img src="./trip_pics/Busan/night/부산04.webp" />
                    </div>
                    <div className="fifth_img">
                        <img src="./trip_pics/Busan/night/부산05.jpg" />
                    </div>
                </div>
                <div>
                    멘트 작성
                    <br />
                    해야함
                    <br />
                    <Link to="/subpage">
                        <button onClick={() => moveToSubPageBtnClickHandler('거창')}>구경하기</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main_01;
