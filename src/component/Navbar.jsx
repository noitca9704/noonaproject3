import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ onSearchClick }) => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    const [isHovered, setIsHovered] = useState(false);

    const fullMenuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "신제품",
    ]
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredMenuList = isMobile
        ? fullMenuList.filter((menu) => menu === "여성" || menu === "남성")
        : fullMenuList;


    return (
        <div className="nav_wrap">
            <div className="logo_area">
                <img
                    src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
                    alt="로고 이미지"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        transition: 'transform 0.3s ease-in-out',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                />
            </div>
            <div className="sec2">
                <div className="menu_area">
                    <ul className="menu_list">
                        {filteredMenuList.map((menu) => (
                            <li key={menu}>{menu}</li>
                        ))}
                    </ul>
                </div>
                <div className="sec3">
                    <div className="search_button" onClick={onSearchClick}>
                        <FontAwesomeIcon size="2x" icon={faSearch} />
                        <div>검색</div>
                    </div>
                    <div className="login_button">
                        <FontAwesomeIcon size="2x" icon={faUser} />
                        <div>로그인</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar