import React from 'react'

/**
 * Default values across all pages (fade in for now)
 */
export default function GenericPage({ children }) {
    return (
        <div data-aos="fade-in">
            {children}
        </div>
    )
}
