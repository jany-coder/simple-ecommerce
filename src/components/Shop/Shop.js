import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import ProductCard from '../ProductCard/ProductCard';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
    }

    const handleReset = () => {
        setCart([]);
    }
    return (
        <div className='container mx-auto px-2 lg:px-20 bg-gray-100'>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 bg-red-50 p-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                       {
                        products.map(product => <ProductCard key={product._id} handleAddToCart={handleAddToCart} product={product}></ProductCard>)
                       }
                    </div>
                </div>
                <div className='col-span-4'>
                     <Cart handleReset={handleReset} cart={cart}></Cart>
                </div>
             </div>
        </div>
    );
};

export default Shop;