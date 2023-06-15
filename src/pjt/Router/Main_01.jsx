import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dots from './Dots';
import Buttons from './Buttons';
import Header from '../Header';
import './css/main.css';

const DIVIDER_HEIGHT = 5;

function App() {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
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
                {/* <div className="cylinder">
                    <div className="pic">
                        <div>&#171;</div>
                    </div>
                    <div className="pic">
                        <Link to="/subpage">
                            <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                        </Link>
                    </div>
                    <div className="pic">
                        <Link to="/subpage">
                            <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                        </Link>
                    </div>
                    <div className="pic">
                        <Link to="/subpage">
                            <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                        </Link>
                    </div>
                    <div className="pic">
                        <Link to="/subpage">
                            <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                        </Link>
                    </div>
                    <div className="pic">
                        <Link to="/subpage">
                            <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                        </Link>
                    </div>
                    <div className="pic">
                        <div>&#187;</div>
                    </div>
                </div>
                <button className="pre-btn">이전</button>
                <button className="next-btn">다음</button> */}
            </div>
            <div className="inner bg-blue">
                <div>
                    멘트 작성
                    <br />
                    해야함
                    <br />
                    <Link to="/subpage">
                        <button>구경하기</button>
                    </Link>
                </div>
                <div>
                    <div className="first_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="second_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                </div>
                <div>
                    <div className="third_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="fourth_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="fifth_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                </div>
            </div>
            <div className="inner bg-pink">
                <div>
                    <div className="first_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="second_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                </div>
                <div>
                    <div className="third_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="fourth_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                    <div className="fifth_img">
                        <img src="./pjt_draft/main/css/imgs/160x235 - 그리스.jpg" />
                    </div>
                </div>
                <div>
                    멘트 작성
                    <br />
                    해야함
                    <br />
                    <Link to="/subpage">
                        <button>구경하기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
