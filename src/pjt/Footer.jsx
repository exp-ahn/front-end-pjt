import React from 'react';
import { Link } from 'react-router-dom';
import '../pjt/Router/css/footer.css';

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-company-info">
                <div className="footer-company-name">
                    <strong>ONETEAM COMPANY</strong>
                    <span className="footer__company-kr-name">(주) 원팀컴퍼니</span>
                </div>
                <div className="footer-emblem">
                    <Link to="/">
                        <img src="./logo_oneteam.jpg" />
                    </Link>
                </div>
            </div>
            <div className="footer-member-info">
                <div className="member-info01">
                    <p>안지수&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
                <div className="member-info02">
                    <p>김란희&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
                <div className="member-info03">
                    <p>김장훈&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
