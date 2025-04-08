import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = ({ onSearchClick }) => {

    const [isHovered, setIsHovered] = useState(false);

    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ]
    return (
        <div className="ccc">
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
                        {menuList.map((menu) => (
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