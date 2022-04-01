import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Carts/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt()
    const [carts, setCarts] = useState([])

    const handleCartBtn = (tshirt) => {
        const addedProduct = carts.find(item => item.id === tshirt.id)
        if (!addedProduct) {
            let newCart = [...carts, tshirt]
            setCarts(newCart)
        }
    }
    const removitemFromCart = (item) => {
        const rest = carts.filter(tshirt => tshirt.id !== item.id)
        setCarts(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Shirt key={tshirt.id} tshirt={tshirt}
                        handleCartBtn={handleCartBtn}></Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart removitemFromCart={removitemFromCart} carts={carts}></Cart>
            </div>

        </div>
    );
};

export default Home;