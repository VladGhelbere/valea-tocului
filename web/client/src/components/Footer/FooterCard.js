import React from 'react'

export default function FooterCard({ title, description }) {
    return (
        <div className='footer-card'>
            <div className='footer-title'>{title}</div>
            <div className='footer-description'>{description}</div>
        </div>
    )
}
