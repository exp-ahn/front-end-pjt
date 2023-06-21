import React from 'react';
import { Link } from 'react-router-dom';
import './Router/css/mainheader.css';

const MainHeader = () => {
    return (
        <div className="header_wrap">
            <Link to="/">
                <img className="header_img" src="./logo_oneteam.jpg" />
            </Link>
        </div>
    );
};

export default MainHeader;
