import React from 'react';
import '../pjt/Router/css/footer.css';

const Footer = () => {
    return (
        <div class="footer-content">
            <div class="footer-company-info">
                <div class="footer-company-name">
                    <strong>ONETEAM COMPANY</strong>
                    <span class="footer__company-kr-name">(주) 원팀컴퍼니</span>
                </div>
                <div class="footer-emblem">
                    <img src="./logo_oneteam.jpg" />
                </div>
            </div>
            <div class="footer-member-info">
                <div class="member-info01">
                    <p>안지수&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
                <div class="member-info02">
                    <p>김란희&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
                <div class="member-info03">
                    <p>김장훈&nbsp;&nbsp;&nbsp;phone : 010-2499-8682</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
