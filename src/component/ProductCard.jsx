import React from 'react'
import { useState } from 'react'

const ProductCard = ({ item }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card_area"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transition: 'transform 0.3s ease-in-out',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}>
            <img className="product_img" src={item?.img} alt={item} />
            <div className="choice">{item?.choice == true ? "Conscious choice" : "-"}</div>
            <div className="title">{item?.title}</div>
            <div className="price">{item?.price}원</div>
            <div className="new">{item?.new == true ? "신제품" : "-"}</div>
        </div>
    )
}

export default ProductCard