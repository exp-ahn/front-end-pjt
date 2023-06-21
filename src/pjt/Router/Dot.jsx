const Dot = ({ num, scrollIndex }) => {
    return (
        <div
            className="dot"
            style={{
                border: '1px solid black',
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? 'black' : 'transparent',
                width: scrollIndex === num ? 10 : 7,
                height: scrollIndex === num ? 10 : 7,
                transitionDuration: 1000,
                transition: 'background-color 0.5s',
            }}
        ></div>
    );
};

export default Dot;
