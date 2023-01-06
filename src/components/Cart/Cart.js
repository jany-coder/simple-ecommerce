import React from 'react';

const Cart = ({cart, handleReset}) => {
    
    return (
        <div className='sticky top-0 bg-amber-300 h-screen p-4'>
            <h2>{cart.length}</h2>
            <ul>
                {
                    cart.map (item => 
                    <li> 
                        <div className='flex gap-2 items-center'>
                            <img className='h-20 py-2' src={item.img} alt="" /> <span>{item.name}</span>
                        </div>
                    </li>)
                }
            </ul>
            <button onClick={handleReset} className='bg-green-100 w-1/2 py-2 rounded font-medium'>Reset</button>
        </div>
    );
};

export default Cart;