import Dot from './Dot';
import './css/dots.css';

const Dots = ({ scrollIndex }) => {
    return (
        <div className="dots_wrap">
            <div className="dots">
                <Dot num={1} scrollIndex={scrollIndex}></Dot>
                <Dot num={2} scrollIndex={scrollIndex}></Dot>
                <Dot num={3} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;
