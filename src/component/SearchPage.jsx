import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const SearchPage = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`);
        }
    }
    return (
        <div className="search_page" style={{
            position: 'absolute',
            width: '100%',
            height: '300px',
            zIndex: 9,
            background: '#ff0c0c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: isOpen ? '0px' : '-300px',
            transition: 'top 0.5s ease'
        }}>
            <div className="search_box">
                <input type="text" onKeyPress={(event)=>search(event)}/>
                <FontAwesomeIcon size="2x" className="search_icon" icon={faSearch} />
            </div>
            <FontAwesomeIcon size="3x" className="search_close" icon={faXmark} onClick={onClose}/>
        </div>
    )
}

export default SearchPage