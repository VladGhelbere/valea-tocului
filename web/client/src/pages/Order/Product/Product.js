import React from 'react';
import './Product.css';

export default function Product({ title, description, price, image, currency }) {
    return (
        <div className='productCont'>
            <div className='product' style={{ backgroundImage: `url(${image})` }} ></div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
                <div className='product-title black'  >
                    {title}
                </div>
                <div className='product-description black'  >
                    {description}
                </div>
            </div>
            <div className='price-cont'>
                <p className='price black'>{price}</p>
                <p className='price black'>{currency}</p>
            </div>



        </div>
    )
}
