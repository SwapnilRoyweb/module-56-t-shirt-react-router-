import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../Tshirt/TShirt';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if(exist){
            toast('Already added t-shirt');
        }
        const newCart = [...cart, tShirt];
        setCart(newCart);
    }

    const handleRemoveFromCart = id => {
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    // console.log(tShirts);
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;