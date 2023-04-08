import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart {cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
        </div>
    );
};

export default Cart;