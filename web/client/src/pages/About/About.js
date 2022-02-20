

import './About.css';
import { about } from '../../common/Locale';

export default function About() {

    return (
        <div className='container' data-aos="fade-in">
            <div style={{ backgroundImage: 'url(/about.jpg)' }} className='image-style'></div>
            <div className='text-container'>
                <span>{about.title}</span>
                <p>{about.description}</p>
            </div>
        </div>
    )
} 
