
import './Home.css';

import React from "react";
import PersonsView from '../../components/PersonsView/PersonsView';
import CarouselView from '../../components/CarouselView/CarouselView';

export default function Home() {

    return (
        <>
            <CarouselView />

            <div data-aos='fade-down' className='teambg' style={{ backgroundImage: 'url("/team-bg.jpg")' }} id={'trigger-footer'} >
                <PersonsView />
            </div>
        </>
    )
} 
