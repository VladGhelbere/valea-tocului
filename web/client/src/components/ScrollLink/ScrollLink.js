import React from 'react'
import { Link } from 'react-router-dom';

export default function ScrollLink({ to, children, className }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)} className={className}>{children}</Link>
    )
}
