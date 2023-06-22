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
            <div className='scene' ref={sceneRef}>
                <div className='carousel' ref={carouselRef}>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[0] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/대구/대구 스파크랜드.png'
                                onClick={() => moveToSubPageBtnClickHandler('대구')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[1] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/대전/대전 오월드.png'
                                onClick={() => moveToSubPageBtnClickHandler('대전')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[2] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/부산/부산 감천문화마을.png'
                                onClick={() => moveToSubPageBtnClickHandler('부산')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[3] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/서울/서울 은평 한옥마을.png'
                                onClick={() => moveToSubPageBtnClickHandler('서울')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[4] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/수원/수원 광교호수공원.png'
                                onClick={() => moveToSubPageBtnClickHandler('수원')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[5] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/여수/여수 종포해양공원.png'
                                onClick={() => moveToSubPageBtnClickHandler('여수')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[6] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/제주/제주 천지연폭포.png'
                                onClick={() => moveToSubPageBtnClickHandler('제주')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[7] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/부산/부산 오륙도.png'
                                onClick={() => moveToSubPageBtnClickHandler('부산')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[8] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/서울/서울 청계천.png'
                                onClick={() => moveToSubPageBtnClickHandler('서울')}
                            />
                        </Link>
                    </div>
                    <div className='carousel-card' ref={(el) => (carouselCardRefs.current[9] = el)}>
                        <Link to='/subpage'>
                            <img
                                className='carousel-card-img'
                                src='./pics_area/제주/제주 성산일출봉.png'
                                onClick={() => moveToSubPageBtnClickHandler('제주')}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <div className={`buttons_wrap ${hideButtons ? 'hidden' : ''}`}>
                <br />
                <MainSlideButton direction='prev' onClick={prevBtnClickHander} />
                <MainSlideButton direction='next' onClick={nextBtnClickHander} />
            </div>
        </div>
    );
};

export default Buttons;
