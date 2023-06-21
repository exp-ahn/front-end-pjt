import React from 'react';
import { Link } from 'react-router-dom';
import './Router/css/subheader.css';

const SubHeader = () => {
    return (
        <div className="subheader_wrap">
            <Link to="/">
                <img className="subheader_img" src="./logo_oneteam.jpg" />
            </Link>
        </div>
    );
};

export default SubHeader;
