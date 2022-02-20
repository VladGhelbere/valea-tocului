import React from 'react';
import './PersonCard.css';

export default function PersonCard({ image, description, name, title, }) {
    const a = `url(/${image})`;
    return (
        <div className='card-item'>
            <div className='image' style={{ backgroundImage: a }}></div>
            <p className='description'>{description}</p>
            <p className='name'>{name}</p>
            <p className='title'>{title}</p>
        </div>
    )
}
