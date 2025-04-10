import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ menuList, onClose }) => {
    return (
        <div style={{
            position: 'absolute',
            top: '0',
            right: 0,
            width: '200px',
            zIndex: 999,
            background: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            padding: '1rem',
            transition: 'all 0.3s ease',
          }}>
            <button onClick={onClose} style={{ position: 'absolute', right: '1rem'}}><FontAwesomeIcon icon={faXmark}/></button>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
              {menuList.map((menu, index) => (
                <li key={index} style={{ margin: '30px 0', cursor: 'pointer' }}>{menu}</li>
              ))}
            </ul>
          </div>
    )
}

export default MobileMenu