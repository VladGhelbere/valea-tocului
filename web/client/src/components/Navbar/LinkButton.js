import React from 'react'
import Button from '@mui/material/Button';
import ScrollLink from '../ScrollLink/ScrollLink';

export default function LinkButton({ title, to, onClose }) {
    return (
        <ScrollLink to={to}>
            <Button
                key={to}
                onClick={() => onClose()}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Poppins', fontSize: 15 }}>
                {title}
            </Button>
        </ScrollLink>
    )
}
