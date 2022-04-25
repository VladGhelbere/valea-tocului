import React, { useState } from 'react';
import './Product.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#ffffff',
    boxShadow: 24,
    p: 4,
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
};

export default function Product({ title, description, price, image, currency, dontOpenModal }) {
    const [open, setOpen] = useState(false);
    return (
        <div className='productCont'>
            <div className='product' style={{ backgroundImage: `url(${image})`, cursor: dontOpenModal ? 'default' : 'pointer' }} onClick={() => {
                if (!dontOpenModal)
                    setOpen(true)
            }}></div>
            <Modal
                open={open}
                onClose={() => {
                    if (!dontOpenModal)
                        setOpen(false)
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style} onClick={() => {
                        if (!dontOpenModal)
                            setOpen(false)
                    }}>
                        <div className='product-modal' style={{ backgroundImage: `url(${image})` }} ></div>
                        <p style={{ color: 'black' }}>{description}{description}{description}</p>
                    </Box>
                </Fade>
            </Modal>

            <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }} >
                <div className='product-title black'  >
                    {title}
                </div>
                <div className='product-description black'  >
                    {description}
                </div>
            </div>
            <div className='price-cont'>
                <p className='price black'>{price}</p>
                <p className='curency black'>{currency}</p>
            </div>



        </div>
    )
}
