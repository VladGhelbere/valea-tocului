

import './About.css';
import PersonsView from '../../components/PersonsView/PersonsView';

export default function About() {

    return (
        <div data-aos="fade-in">
            <div style={{ height: 'calc(100vh - 100px)', width: '100%', backgroundColor: '#ff0000' }} >Slider</div>
            <div data-aos='fade-down' className='teambg' style={{ backgroundImage: 'url("/team-bg.jpg")' }} id={'trigger-footer'} >
                <PersonsView />
            </div>
        </div>
    )
} 
