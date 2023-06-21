import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import SlideButton from './SlideButton';
import '../css/slider/mainPageSlider.css';
import '../css/slider/sliderItem.css';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const CityInfoSlide = ({ showDetail, addKakaoPin, setAddKakaoPin }) => {
    const [windowWidth, windowHeight] = useWindowSize();

    // console.log('showDetail', showDetail);

    const items = [];

    for (let i = 0; i < showDetail.length; i++) {
        const tempData = {};
        tempData.firstimage = showDetail[i].firstimage;
        tempData.addr1 = showDetail[i].addr1;
        tempData.title = showDetail[i].title;
        tempData.mapx = showDetail[i].mapx;
        tempData.mapy = showDetail[i].mapy;

        items.push(tempData);
    }
    console.log('[items]', items);

    // let tempData = {};
    //     let kakaoShowData = [];

    //     for (let i = 0; i < showDetail.length; i++) {
    //         tempData.addr1 = showDetail[i].addr1;
    //         tempData.title = showDetail[i].title;
    //         tempData.mapx = showDetail[i].mapx;
    //         tempData.mapy = showDetail[i].mapy;

    //         //items.push(tempData);
    //     }
    //     console.log('[items]', items);

    const itemSize = showDetail.length;
    const sliderPadding = 40;
    const sliderPaddingStyle = `0 ${sliderPadding}px`;
    const newItemWidth = getNewItemWidth();
    const transitionTime = 500;
    const transitionStyle = `transform ${transitionTime}ms ease 0s`;
    const add_side_data = 3;
    const [currentIndex, setCurrentIndex] = useState(add_side_data);
    const [slideTransition, setTransition] = useState(transitionStyle);
    const [slideX, setSlideX] = useState(null);
    let isResizing = useRef(false);

    let slides = setSlides();

    function setSlides() {
        let addedFront = [];
        let addedLast = [];
        var index = 0;

        while (index < add_side_data) {
            addedLast.push(items[index % items.length].firstimage);
            addedFront.unshift(items[items.length - 1 - (index % items.length)].firstimage);
            index++;
        }
        return [...addedFront, ...items, ...addedLast];
    }

    function getNewItemWidth() {
        let itemWidth = windowWidth * 0.9 - sliderPadding * 2;
        itemWidth = itemWidth > 1060 ? 350 : itemWidth;
        return itemWidth;
    }

    useEffect(() => {
        isResizing.current = true;
        setTransition('');
        setTimeout(() => {
            isResizing.current = false;
        }, 1000);
    }, [windowWidth]);

    const showKakaoMarker = (m_addr1, m_title, m_x, m_y) => {
        console.log('-----[showKakaoMarker]-----'); //setAddKakaoPin
        const showkm = new Array();
        showkm.push(m_addr1);
        showkm.push(m_title);
        showkm.push(m_x);
        showkm.push(m_y);
        setAddKakaoPin(showkm);

        console.log('[addKakaoPin]-->', addKakaoPin);
    };

    function replaceSlide(index) {
        console.log('replaceSlide called!!');
        setTimeout(() => {
            setTransition('');
            setCurrentIndex(index);
        }, transitionTime);
    }

    function handleSlide(index) {
        setCurrentIndex(index);
        if (index - add_side_data < 0) {
            index += itemSize;
            replaceSlide(index);
        } else if (index - add_side_data >= itemSize) {
            index -= itemSize;
            replaceSlide(index);
        }
        setTransition(transitionStyle);
    }

    function handleSwipe(direction) {
        handleSlide(currentIndex + direction);
    }

    function getItemIndex(index) {
        index -= add_side_data;
        if (index < 0) {
            index += itemSize;
        } else if (index >= itemSize) {
            index -= itemSize;
        }
        return index;
    }

    useInterval(() => {
        handleSlide(currentIndex + 1);
    }, 5000);

    return (
        <div className="slider-area">
            <div className="slider">
                <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
                <SlideButton direction="next" onClick={() => handleSwipe(1)} />
                <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(calc(${(-100 / slides.length) * (0.5 + currentIndex)}% + ${
                                slideX || 0
                            }px))`,
                            transition: slideTransition,
                        }}
                    >
                        {slides.map((slide, slideIndex) => {
                            const itemIndex = getItemIndex(slideIndex);
                            return (
                                <div
                                    key={slideIndex}
                                    className={`slider-item ${currentIndex === slideIndex ? 'current-slide' : ''}`}
                                    style={{ width: newItemWidth || 'auto' }}
                                >
                                    <a>
                                        <img
                                            src={items[itemIndex].firstimage}
                                            alt={`banner${itemIndex}`}
                                            onClick={() =>
                                                showKakaoMarker(
                                                    items[itemIndex].addr1,
                                                    items[itemIndex].title,
                                                    items[itemIndex].mapx,
                                                    items[itemIndex].mapy
                                                )
                                            }
                                        />
                                        <span className="slideTitle">{items[itemIndex].title}</span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityInfoSlide;
