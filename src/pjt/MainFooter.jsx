import React from 'react';
import { Link } from 'react-router-dom';
import '../pjt/Router/css/mainfooter.css';

const Footer = () => {
    return (
        <div className="mainfooter-content">
            <div className="mainfooter-company-info">
                {/* <div className="mainfooter-company-name">
                    <strong>ONETEAM COMPANY</strong>&nbsp;
                    <span className="mainfooter__company-kr-name">(주) 원팀컴퍼니</span>
                </div> */}
                <div className="mainfooter_menu">
                    <a href="#none">서비스 약관</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">개인정보 보호정책</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">FAQ</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">취소/환불정책</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">자료실</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">공지사항</a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none">도움말</a>
                </div>
                {/* <div className="mainfooter-emblem">
                    <Link to="/">
                    <img src="./no_background_logo.png" />
                    </Link>
                </div> */}

                {/* <div></div>
                <div></div> */}
            </div>
            {/* <div className="mainfooter_menu">
                <span>
                    <a href="#none">서비스 약관</a>
                </span>
                <span>|</span>
                <span>
                    <a href="#none">개인정보 보호정책</a>
                </span>
                <span>|</span>
                <span>
                    <a href="#none">도움말</a>
                </span>
                <span>|</span>
                <span>
                    <a>서비스 약관</a>
                </span>
                <span>|</span>
                <span>
                    <a>서비스 약관</a>
                </span>
            </div> */}
        </div>
    );
};

export default Footer;
