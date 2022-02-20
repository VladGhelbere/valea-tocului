

import InputOrder from './InputOrder/InputOrder';
import './Order.css';

export default function Order() {

    return (
        <>
            <div style={{ backgroundImage: 'url(/order.jpg)' }} className='orderbg' > </div>

            <div className='wrapper' data-aos='fade-down' data-aos-anchor-placement="top-center">
                <div className='order-container' data-aos="fade-in">
                    <span id='order-title'>Vinuri</span>
                    <h2>Selecția noastră</h2>
                    <div className='place-order-wrapper'>
                        <div style={{ width: '100%', height: 100, backgroundColor: 'red' }}>
                        </div>

                        <div className='place-order-cont'>
                            <div style={{ backgroundImage: 'url(/order.jpg)' }} className='order-image'></div>
                            <div className='place-order-form'>
                                <span>Comandă o sticlă</span>

                                <p id='subtitle'>Plasează comanda mai jos și o să vă contactăm pentru confirmare</p>

                                <div className='rowCol'>
                                    <InputOrder title={'Nume complet'} placeholder={'Nume Prenume'} />
                                    <InputOrder title={'Email'} placeholder={'Email'} />
                                </div>

                                <div className='rowCol'>
                                    <InputOrder title={'Telefon'} placeholder={'Nr. Telefon'} />
                                    <InputOrder title={'Adresă'} placeholder={'Eg. Jud. X, Loc Y, Str. Z, nr. 0'} />
                                </div>

                                <div className='rowCol'>
                                    <InputOrder textArea={true} title={'Ce vin(uri) ați dori ?'} placeholder={'Eg. 1 vin alb sec, 2 sticle rosu dulce'} />
                                </div>
                                <a href={'/'} className='btn orderBtn'>Comandă</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
} 
