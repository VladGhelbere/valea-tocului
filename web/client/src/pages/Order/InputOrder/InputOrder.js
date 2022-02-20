import React from 'react'
import './InputOrder.css';

export default function InputOrder({ title, placeholder, textArea, onInput }) {
    return (
        <div className={`inputOrder ${textArea ? 'full-width' : ''}`} >
            <label htmlFor={title}>{title}</label>
            {
                textArea ?
                    <textarea id={title} placeholder={placeholder} required={true} onInput={e => { onInput(e.target.value) }} /> :
                    <input id={title} placeholder={placeholder} required={true} onInput={e => { onInput(e.target.value) }} />
            }
        </div >
    )
}
