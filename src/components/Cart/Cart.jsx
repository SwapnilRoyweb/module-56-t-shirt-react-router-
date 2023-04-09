import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }else{
        message = <div>
            <h3>Thanks for giving your money</h3>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary {cart.length}</h3>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>Double</p>
            }
            {
                cart.length === 3 || <h3>tinta to hoilo nah</h3>
            }
        </div>
    );
};

export default Cart;

//conditional rendering
//1. use if else to set a variable that will contain an element, component
//2. ternary: condition ? 'for true' : 'false"
//3. Logical && : (if the condition is true then the next thing displayed)
//4.Logical || (if the condition is false then the next thing will displayed)
//5. conditional CSS Class
//a. use ternary
//b. ternary inside template string