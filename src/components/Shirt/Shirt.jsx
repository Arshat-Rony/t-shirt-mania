import React from 'react';
import './Shirt.css'

const Shirt = (props) => {
    const { handleCartBtn, tshirt } = props;
    const { picture, name, price, gender } = tshirt;
    return (
        <div className='shirt'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price : ${price}</p>
            <p>Gender : {gender}</p>
            <button
                className='cart_btn'
                onClick={() => handleCartBtn(tshirt)}
            >Add to Cart</button>
        </div>
    );
};

export default Shirt;