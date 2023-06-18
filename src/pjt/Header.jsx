import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">
                <img src="./logo_oneteam.jpg" style={HeaderImgStyle} />
            </Link>
        </div>
    );
};

export default Header;
