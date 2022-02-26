import React, { useEffect, useState } from 'react';
import './CarouselView.css';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Zoom } from "swiper";
import { sliders } from '../../common/Locale';
import ScrollLink from '../ScrollLink/ScrollLink';

export default function CarouselView() {
    const [isPortrait, setIsPortrait] = useState(window.innerWidth < 900);

    useEffect(() => {
        const debouncedHandleResize = () => {
            setIsPortrait(window.innerWidth < 900);
        }
        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, []);

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={0}
            effect={"fade"}
            zoom={true}
            modules={[Autoplay, Zoom, EffectFade]}>
            {
                sliders.map((slider, i) => {
                    return (
                        <SwiperSlide style={{ width: '100%', height: 'calc(100vh - 100px)', display: 'flex', justifyContent: 'flex-end' }} key={i}>
                            {
                                !isPortrait &&
                                <div className='slider-card' >
                                    <p> {slider.caption} </p>
                                    <ScrollLink to={slider.button_url} className='btn'>{slider.button}</ScrollLink>
                                </div>
                            }
                            <div className={isPortrait ? 'slider-image-port' : 'slider-image-land'} style={{ backgroundImage: `url(/${slider.img})` }}>
                                {
                                    isPortrait &&
                                    <div className='slider-card' style={{ backgroundColor: 'transparent' }}>
                                        <p> {slider.caption} </p>
                                        {
                                            slider.button &&
                                            <ScrollLink to={slider.button_url} className='btn'>{slider.button}</ScrollLink>
                                        }
                                    </div>
                                }
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    )
}
