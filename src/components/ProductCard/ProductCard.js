import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const ProductCard = ({handleAddToCart, product}) => {
    const {name, img} = product;
    return (
        <div className='bg-white p-2'>
           <img className='w-full' src={img} alt="" />
           <p className='text-center font-medium'>{name}</p>
           <button onClick={() => handleAddToCart(product)} className='w-full uppercase font-medium text-sky-600 text-center bg-gray-200 py-2 mt-2'>Add to cart <span><FontAwesomeIcon icon={faCartPlus} /></span></button>
        </div>
    );
};

export default ProductCard;