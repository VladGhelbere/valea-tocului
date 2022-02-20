import React from 'react'
import './InputOrder.css';

export default function InputOrder({ title, placeholder, textArea }) {
    return (
        <div className={`inputOrder ${textArea ? 'full-width' : ''}`} >
            <label for={title}>{title}</label>
            {
                textArea ? <textarea id={title} placeholder={placeholder} /> : <input id={title} placeholder={placeholder} />
            }
        </div >
    )
}
