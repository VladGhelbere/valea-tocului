import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import './Navbar.css';
import Collapse from "@mui/material/Collapse";
import LinkButton from './LinkButton';
import routes from '../../common/Routes';
import { title } from '../../common/Locale';
import ScrollLink from '../ScrollLink/ScrollLink';

export const Navbar = () => {
    const [navOpened, setNavOpened] = useState(false);

    useEffect(() => {
        const debouncedHandleResize = () => {
            if (window.innerWidth > 900) setNavOpened(false);
        }
        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, []);

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar style={{ height: 100 }}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 900, fontSize: 22 }}>
                        <ScrollLink to={'/'} style={{ textDecoration: 'none' }}>{title}</ScrollLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setNavOpened(!navOpened)}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        onClick={() => setNavOpened(false)}
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <ScrollLink to={'/'} style={{ textDecoration: 'none' }}>{title}</ScrollLink>

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {
                            routes.map((route, i) => <LinkButton onClose={() => setNavOpened(false)} title={route.title} to={route.path} key={i} />)
                        }
                    </Box>

                </Toolbar>


                <Collapse in={navOpened} timeout={700}>
                    {
                        routes.map((route, i) => <LinkButton onClose={() => setNavOpened(false)} title={route.title} to={route.path} key={i} />)
                    }
                </Collapse>
            </Container>
        </AppBar >
    );
};