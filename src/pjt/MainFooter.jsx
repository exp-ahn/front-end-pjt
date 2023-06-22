import React from 'react';
import { Link } from 'react-router-dom';
import '../pjt/Router/css/mainfooter.css';
import Swal from 'sweetalert2';

const Footer = () => {
    const serviceTermsBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '서비스 약관 (Service Term)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 이용 약관</span><br><span style="display: inline-block; padding-bottom: 6px;">1.1 본 약관은 [서비스 제공자의 상호 및 주소] (이하 "회사")와 이용자 (이하 "이용자") 간의 서비스 이용에 대한 권리, 의무 및 책임사항을 규정합니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">1.2 이용자는 회사의 서비스를 이용함으로써 본 약관에 동의하는 것으로 간주됩니다. 약관에 동의하지 않는 경우, 이용자는 서비스를 이용할 수 없습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 내용 및 이용</span><br><span style="display: inline-block; padding-bottom: 6px;">2.1 회사는 이용자에게 무료로 제공되는 [관광 정보 제공 등]과 관련된 서비스를 제공합니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">2.2 이용자는 회사의 서비스를 이용하여 관광 목적지에 대한 정보를 확인할 수 있습니다</span><br><span style="display: inline-block; padding-bottom: 6px;">.2.3 이용자는 회사의 서비스를 이용할 때, 관련 법률 및 규정을 준수해야 합니다. 또한, 타인의 권리를 침해하거나 회사의 서비스 운영을 방해하는 행위를 해서는 안됩니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보 처리</span><br><span style="display: inline-block; padding-bottom: 6px;">3.1 회사는 이용자의 개인정보를 수집, 보관, 처리하는 경우 관련 법률 및 규정에 따라 개인정보 보호를 위해 최선을 다할 것입니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">3.2 이용자의 개인정보는 회사의 개인정보 처리방침에 따라 수집, 이용, 제공되며, 이용자는 개인정보 처리에 동의하는 것으로 간주됩니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">책임 제한</span><br><span style="display: inline-block; padding-bottom: 6px;">4.1 회사는 회사의 서비스에 제공되는 정보의 정확성, 완전성, 신뢰성 등을 보장하지 않습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;"> 이용자는 회사의 서비스를 이용함으로써 발생하는 어떠한 손해에 대해서도 회사는 책임지지 않습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 변경 및 중단</span><br><span style="display: inline-block; padding-bottom: 6px;">5.1 회사는 서비스의 일부 또는 전부를 수정, 변경, 중단할 수 있으며, 이에 대해 사전 공지할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">5.2 이용자는 회사의 서비스 변경 또는 중단에 대해 어떠한 권리나 보상을 요구할 수 없습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">기타 조항</span><br><span style="display: inline-block; padding-bottom: 6px;">6.1 본 약관은 대한민국 법령에 따라 해석되고 적용됩니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">6.2 본 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 회사의 정책에 따릅니다.</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };

    const privatePolicyBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '개인정보 보호정책 (Private Policy)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">수집하는 개인정보의 항목 및 목적</span><br><span style="display: inline-block; padding-bottom: 6px;">1.1 회사는 다음과 같은 개인정보 항목을 수집할 수 있습니다: [성명, 연락처, 이메일 주소 등].</span><br><span style="display: inline-block; padding-bottom: 6px;">1.2 수집한 개인정보는 다음과 같은 목적으로 이용될 수 있습니다: [서비스 제공, 문의 응답, 공지사항 전달 등].</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보 수집 방법</span><br><span style="display: inline-block; padding-bottom: 6px;">2.1 회사는 다음과 같은 방법으로 개인정보를 수집할 수 있습니다: [회원가입 시, 문의하기 양식 작성 시, 쿠키 및 로그 파일 등].</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보의 보유 및 이용 기간</span><br><span style="display: inline-block; padding-bottom: 6px;">3.1 회사는 이용자의 개인정보를 개인정보 보유 및 이용기간 동안 보관 및 이용합니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">3.2 개인정보 보유 및 이용기간은 회사의 개인정보 보호 정책에 따라 운영됩니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보의 제공 및 제3자와의 공유</span><br><span style="display: inline-block; padding-bottom: 6px;">4.1 회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다, 제공할 경우에는 이용자의 동의를 받을 것입니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">4.2 단, 법령에 의해 요구되는 경우 또는 이용자의 동의가 있는 경우에는 예외적으로 제3자와의 공유가 이루어질 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보의 보호 조치</span><br><span style="display: inline-block; padding-bottom: 6px;">5.1 회사는 이용자의 개인정보를 안전하게 보호하기 위해 보안 조치를 취하고 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">5.2 회사는 개인정보의 분실, 도난, 누출, 변조 등을 방지하기 위해 기술적, 관리적, 물리적 조치를 적용합니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보 이용자의 권리</span><br><span style="display: inline-block; padding-bottom: 6px;">6.1 이용자는 언제든지 자신의 개인정보에 대한 접근, 수정, 삭제를 요청할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">6.2 이용자는 개인정보 수집 및 이용에 대한 동의 철회를 요청할 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보 보호 정책의 변경</span><br><span style="display: inline-block; padding-bottom: 6px;">7.1 회사는 개인정보 보호 정책을 필요에 따라 수정할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">7.2 변경된 개인정보 보호 정책은 회사의 웹사이트나 앱을 통해 공지됩니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">개인정보 보호 관련 문의</span><br><span style="display: inline-block; padding-bottom: 6px;">8.1 이용자는 개인정보 보호에 관한 문의나 불만을 회사에 제출할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">8.2 회사는 이용자의 문의에 신속하고 성실하게 답변할 것입니다.</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };
    const refundPolicyBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '취소/환불 정책(Refund Policy)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">취소 요청</span><br><span style="display: inline-block; padding-bottom: 6px;">1.1 광고주는 광고를 취소하고 환불을 요청할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">1.2 취소 요청은 서면, 전화 또는 이메일을 통해 회사에 통보해야 합니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">환불 정책</span><br><span style="display: inline-block; padding-bottom: 6px;">2.1 환불 가능 기간: 광고가 시작되기 전까지 취소 요청 시에 한해 환불이 가능합니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">2.2 환불 수수료: 환불 시 일정한 수수료가 적용될 수 있습니다. 수수료는 광고의 종류 및 규모 등에 따라 다를 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">2.3 환불 방법: 환불은 원래 결제 방식을 통해 이루어집니다. 예를 들어, 신용카드 결제로 이루어진 경우에는 해당 신용카드로 환불될 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">2.4 부분 환불: 광고가 시작된 후에는 부분 환불이 불가능할 수 있으며, 환불 가능한 부분에 대해서만 환불이 이루어집니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">예외 사항</span><br><span style="display: inline-block; padding-bottom: 6px;">3.1 광고주의 과실로 인한 문제 또는 규정 위반으로 인해 환불이 요구되는 경우, 회사는 해당 사유를 검토한 후 환불 여부를 결정합니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">3.2 광고가 이미 시작된 후에는 환불이 어려울 수 있으며, 이 경우에는 다른 형태의 보상 또는 조정을 제공할 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">환불 처리 시간</span><br><span style="display: inline-block; padding-bottom: 6px;">4.1 환불 처리 시간은 일반적으로 요청을 받은 후 5-10 영업일 정도 소요될 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">4.2 처리 시간은 광고의 규모와 회사의 내부 절차에 따라 달라질 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">기타 조항</span><br><span style="display: inline-block; padding-bottom: 6px;">5.1 본 정책은 회사의 환불 정책에 대한 일부로서, 회사는 필요한 경우에는 본 정책을 수정할 수 있습니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">5.2 본 정책에 명시되지 않은 사항은 관련 법령 및 회사의 정책에 따릅니다.</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };
    const announcementBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '공지사항 (Announcement)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 출시</span><br><span style="display: inline-block; padding-bottom: 6px;">일시: 2023-06-23</span><br><span style="display: inline-block; padding-bottom: 6px;">내용: ONETEAM-TOURGUIDEFORYOU 출시!</span><br><span style="font-weight:bold; display: inline-block; padding-bottom: 6px;">다양한 기능의 여행 정보 서비스를 경험해보세요!</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 중단 예고</span><br><span style="display: inline-block; padding-bottom: 6px;">일시: 2023-06-24</span><br><span style="display: inline-block; padding-bottom: 6px;">내용: DB 서버 점검</span><br><span style="display: inline-block; padding-bottom: 6px;">잠시 중단: 서비스 업그레이드를 위해 일시적으로 서비스가 중단될 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">문의처</span><br><span style="display: inline-block; padding-bottom: 6px;">문의처: [센텀벤처타운 5층 광안대교 2실]</span><br><span style="display: inline-block; padding-bottom: 6px;">운영시간: [09:00~18:00]</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };
    const HelpBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '도움말 (Help)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 이용 중 문제가 발생했을 때 어떻게 문의해야 하나요?</span><br><span style="display: inline-block; padding-bottom: 6px;">문제 발생 시, 문의처로 문의 바랍니다. 운영시간 내에 담당자가 신속하게 답변해드릴 것입니다.</span><br><span style="display: inline-block; padding-bottom: 6px;">문의처: [센텀벤처타운 5층 광안대교 2실]</span><br><span style="display: inline-block; padding-bottom: 6px;">운영시간: [09:00~18:00]</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">환불은 어떤 조건에서 가능한가요?</span><br><span style="display: inline-block; padding-bottom: 6px;">환불은 일정 기간 내에 서비스 이용 전에 요청하실 경우에 한하여 가능합니다. 자세한 환불 정책은 FAQ의 환불 관련 항목에서 확인하실 수 있습니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 이용 중에도 오프라인에서 접근할 수 있나요?</span><br><span style="display: inline-block; padding-bottom: 6px;">저희 서비스는 온라인 기반으로 제공되어 오프라인에서 접근이 불가능합니다.</span><br><br><span style="font-weight: bold;display: inline-block; padding-bottom: 6px;">개인정보가 안전하게 보호되나요?</span><br><span style="display: inline-block; padding-bottom: 6px;">네,저희는 개인정보 보호를 매우 중요시 여기며, 관련 법규 및 보안 조치를 준수합니다.</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };
    const FAQBtnHandler = () => {
        Swal.fire({
            icon: 'info',
            title: '자주 묻는 질문 (FAQ)',
            html: '<br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서비스 이용 방법</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">메인페이지</span><br><span style=" display: inline-block; padding-bottom: 6px;">캐러셀: 사진 클릭 시 해당 도시의 정보를 보여주도록 이동합니다.</span><br><span style=" display: inline-block; padding-bottom: 6px;">사진 및 버튼: 클릭 시 해당 도시의 정보를 보여주도록 이동합니다.</span><br><br><span style="font-weight: bold; display: inline-block; padding-bottom: 6px;">서브 페이지</span><br><span style=" display: inline-block; padding-bottom: 6px;">필터: 지역명, 세부 지역명, 테마를 설정할 수 있습니다.</span><br><span style=" display: inline-block; padding-bottom: 6px;">서브 캐러셀: 해당 도시의 테마 정보를 보여줍니다.</span><br><span style=" display: inline-block; padding-bottom: 6px;">지도: 해당 정보의 위치를 알려줍니다.</span><br><span style=" display: inline-block; padding-bottom: 6px;">날씨: 해당 도시의 현재, 예상 날씨를 알려줍니다.</span><br><span style=" display: inline-block; padding-bottom: 6px;">빠른 길찾기: 지도에서 위치를 설정하여 대중교통 길찾기 결과를 알려줍니다.</span>',
            confirmButtonColor: '#3085d6',
            customClass: 'swal-footer',
        });
    };

    return (
        <div className="mainfooter-content">
            <div className="mainfooter-company-info">
                {/* <div className="mainfooter-company-name">
                    <strong>ONETEAM COMPANY</strong>&nbsp;
                    <span className="mainfooter__company-kr-name">(주) 원팀컴퍼니</span>
                </div> */}
                <div className="mainfooter_menu">
                    <a href="#none" onClick={serviceTermsBtnHandler}>
                        서비스 약관
                    </a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none" onClick={privatePolicyBtnHandler}>
                        개인정보 보호정책
                    </a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none" onClick={FAQBtnHandler}>
                        FAQ
                    </a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none" onClick={refundPolicyBtnHandler}>
                        취소/환불정책
                    </a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none" onClick={announcementBtnHandler}>
                        공지사항
                    </a>
                </div>
                <div className="mainfooter_menu">
                    <a>|</a>
                </div>
                <div className="mainfooter_menu">
                    <a href="#none" onClick={HelpBtnHandler}>
                        도움말
                    </a>
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
