import React from 'react';
import { Link } from 'react-router-dom';
import '../pjt/Router/css/subfooter.css';

const SubFooter = () => {
    return (
        <div className="subfooter-content">
            <div className="subfooter-company-info">
                <div className="subfooter_menu">
                    <a href="#none">서비스 약관</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">개인정보 보호정책</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">FAQ</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">취소/환불정책</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">자료실</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">공지사항</a>
                </div>
                <div className="subfooter_menu">
                    <a>|</a>
                </div>
                <div className="subfooter_menu">
                    <a href="#none">도움말</a>
                </div>
            </div>
        </div>
    );
};

export default SubFooter;
