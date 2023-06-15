import React from 'react';

const Header = () => {
    const HeaderDivStyle = {
        paddingTop: '1vh',
        paddingLeft: '3vh',
        height: '5vh',
    };
    const HeaderImgStyle = {
        width: '7%',
    };
    return (
        <div style={HeaderDivStyle}>
            <img src="./logo_oneteam.jpg" style={HeaderImgStyle} />
        </div>
    );
};

export default Header;
