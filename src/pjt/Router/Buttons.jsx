import React, { useState, useRef } from 'react';
import './buttons.css';

const Buttons = () => {
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
    // Handler END //

    const rotateAngle = 360 / 10; // 카드 개수에 맞는 각도 계산 값
    const radian = ((rotateAngle / 2) * Math.PI) / 180;
    const sceneRef = useRef(null);

    return (
        <div>
            <div className="scene" ref={sceneRef}>
                <div className="carousel" ref={carouselRef}>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[0] = el)}>
                        <img src="./trip_pics/Busan/부산1.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[1] = el)}>
                        <img src="./trip_pics/Gangneung/강릉1.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[2] = el)}>
                        <img src="./trip_pics/Geoje/거제1.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[3] = el)}>
                        <img src="./trip_pics/Gyeongju/경주1.webp" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[4] = el)}>
                        <img src="./trip_pics/Jeju/제주1.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[5] = el)}>
                        <img src="./trip_pics/Miryang/밀양1.png" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[6] = el)}>
                        <img src="./trip_pics/Pohang/포항2.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[7] = el)}>
                        <img src="./trip_pics/Seoul/서울1.jpg" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[8] = el)}>
                        <img src="./trip_pics/Suwon/수원1.jfif" />
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[9] = el)}>
                        <img src="./trip_pics/Yeosu/여수1.webp" />
                    </div>
                </div>
            </div>
            <br />
            <div className="buttons_wrap">
                <br />
                <button className="pre-btn" onClick={prevBtnClickHander}>
                    이전
                </button>
                <button className="next-btn" onClick={nextBtnClickHander}>
                    다음
                </button>
            </div>
            {/* <button className="axis-btn" onClick={handleAxisToggle}>
                축 변경
            </button> */}
        </div>
    );
};

export default Buttons;
