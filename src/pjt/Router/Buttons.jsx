import React, { useState, useRef } from 'react';
import './buttons.css';

const Buttons = () => {
    const [angle, setAngle] = useState(0);
    const carouselRef = useRef(null);
    const carouselCardRefs = useRef([]);

    const handlePrevClick = () => {
        setAngle((prevAngle) => prevAngle - rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    const handleNextClick = () => {
        setAngle((prevAngle) => prevAngle + rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    // const handleAxisToggle = () => {
    //     const carousel = carouselRef.current;
    //     carousel.classList.toggle('row');
    //     carousel.style.transform = carousel.classList.contains('row')
    //         ? `rotateX(${-angle}deg)`
    //         : `rotateY(${-angle}deg)`;
    //     if (carousel.classList.contains('row')) {
    //         carousel.style.perspectiveOrigin = 'center';
    //         carouselCardRefs.current.forEach((el, idx) => {
    //             const rowTz = Math.round(140 / 2 / Math.tan(radian));
    //             el.style.transform = `rotateX(${rotateAngle * idx}deg) translateZ(${rowTz}px)`;
    //         });
    //     } else {
    //         carousel.style.perspectiveOrigin = 'center -60%';
    //         carouselCardRefs.current.forEach((el, idx) => {
    //             const colTz = Math.round(210 / 2 / Math.tan(radian));
    //             el.style.transform = `rotateY(${rotateAngle * idx}deg) translateZ(${colTz}px)`;
    //         });
    //     }
    // };

    const rotateAngle = 360 / 10; // 카드 개수에 맞게 수정해야 합니다.
    const radian = ((rotateAngle / 2) * Math.PI) / 180;
    const sceneRef = useRef(null);

    return (
        <div>
            <div className="scene" ref={sceneRef}>
                <div className="carousel" ref={carouselRef}>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[0] = el)}>
                        Card1
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[1] = el)}>
                        Card2
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[2] = el)}>
                        Card3
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[3] = el)}>
                        Card4
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[4] = el)}>
                        Card5
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[5] = el)}>
                        Card6
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[6] = el)}>
                        Card7
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[7] = el)}>
                        Card8
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[8] = el)}>
                        Card9
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[9] = el)}>
                        Card10
                    </div>
                </div>
            </div>
            <br />
            <button className="pre-btn" onClick={handlePrevClick}>
                이전
            </button>
            <button className="next-btn" onClick={handleNextClick}>
                다음
            </button>
            {/* <button className="axis-btn" onClick={handleAxisToggle}>
                축 변경
            </button> */}
        </div>
    );
};

export default Buttons;
