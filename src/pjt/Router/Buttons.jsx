import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainSlideButton from './subpage/MainSlideButton';
import './css/buttons.css';
import './css/slider/mainPageSlider.css';

const Buttons = ({ checkedArea, setCheckedArea, hideButtons, setHideButtons }) => {
    const [angle, setAngle] = useState(0);
    const carouselRef = useRef(null);
    const carouselCardRefs = useRef([]);

    // Handler START //
    const prevBtnClickHander = () => {
        console.log('prevBtnClickHander CLICKED!!');
        setAngle((prevAngle) => prevAngle - rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    const nextBtnClickHander = () => {
        console.log('nextBtnClickHander CLICKED!!');
        setAngle((prevAngle) => prevAngle + rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    const moveToSubPageBtnClickHandler = (area) => {
        console.log('[Main_01] moveToSubPageBtnClickHandler() CLICKED');
        setCheckedArea(area);
        console.log('checkedArea:', checkedArea);
    };
    // Handler END //

    const rotateAngle = 360 / 10; // 카드 개수에 맞는 각도 계산 값
    const radian = ((rotateAngle / 2) * Math.PI) / 180;
    const sceneRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    });

    return (
        <div>
            <div className="scene" ref={sceneRef}>
                <div className="carousel" ref={carouselRef}>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[0] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Busan/부산1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('부산')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[1] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Gangneung/강릉1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('강릉')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[2] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Geoje/거제1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('거제')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[3] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Gyeongju/경주1.webp"
                                onClick={() => moveToSubPageBtnClickHandler('경주')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[4] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Jeju/제주1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('제주')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[5] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Miryang/밀양01.png"
                                onClick={() => moveToSubPageBtnClickHandler('밀양')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[6] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Pohang/포항2.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('포항')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[7] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Seoul/서울1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('서울')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[8] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Suwon/수원1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('수원')}
                            />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[9] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Yeosu/여수1.webp"
                                onClick={() => moveToSubPageBtnClickHandler('여수')}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <div className={`buttons_wrap ${hideButtons ? 'hidden' : ''}`}>
                <br />
                <MainSlideButton direction="prev" onClick={prevBtnClickHander} />
                <MainSlideButton direction="next" onClick={nextBtnClickHander} />
            </div>
        </div>
    );
};

export default Buttons;
