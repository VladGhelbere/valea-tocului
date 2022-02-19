import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function LinkButton({ title, to, onClose }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Button
                key={to}
                onClick={() => onClose()}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Poppins', fontSize: 15 }}>
                {title}
            </Button>
        </Link>
    )
}
