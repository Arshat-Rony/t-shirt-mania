import React from 'react';

const Cart = (props) => {
    const { carts, removitemFromCart } = props;
    // Conditional rendering 
    //  1. Element variable 
    let command;
    if (carts.length === 4) {
        command = <p>You have added four items</p>
    } else if (carts.length === 2) {
        command = <p>keep adding to review your order</p>
    }


    return (
        <div>
            <h1>This is your ordered cart</h1>
            <p>Total Item : {carts.length}</p>
            {command}
            {/* // 2.Using ternary operator  */}
            {carts.length < 3 ? <p>You have added 3 items </p> : <p>add to cart for next order</p>}
            {/* 3.using && operator conditon will show only when the condition becomes true */}
            {carts.length < 1 && <p>add item plz</p>}
            {/* 4.using || operator conditon will show only when the condition becomes false */}
            {
                carts.length < 4 || <p>You need more!!</p>
            }
            {

                carts.map(item => <p>{item.name}
                    <button onClick={() => removitemFromCart(item)}>X</button>
                </p>

                )
            }

        </div>
    );
};

export default Cart;