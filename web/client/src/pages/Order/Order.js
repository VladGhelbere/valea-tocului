

import { useEffect, useState } from 'react';
import InputOrder from './InputOrder/InputOrder';
import './Order.css';
import { toast } from 'react-toastify';
import Product from './Product/Product';

export default function Order() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');

    const placeOrder = (evt) => {
        evt.preventDefault();
        var request = { name, email, phone, address, order };
        toast.promise(new Promise(async (resolve, reject) => {
            fetch('/api/submitOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            }).then(e => e.json()).then(e => {
                if (e.status === 'successful')
                    resolve();
                else if (e.status === 'error')
                    reject(e.msg)
            }).catch(e => reject(e))
        }),
            {
                pending: 'Se comandă...',
                success: 'Comanda a fost plasată.',
                error: {
                    render({ data }) {
                        return `${data}`
                    }
                }
            });
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products').then(e => e.json()).then(e => setProducts(e))
    }, []);

    return (
        <>
            <div style={{ backgroundImage: 'url(/order.jpg)' }} className='orderbg' > </div>

            <div className='wrapper' data-aos='fade-down' data-aos-anchor-placement="top-center">
                <div className='order-container' data-aos="fade-in">
                    <span id='order-title'>Vinurile noastre</span>
                    <div className='place-order-wrapper'>
                        <div className='itemsContainer'>
                            {
                                products.map((product, i) => <Product key={i} image={`${window.location.origin}/cdn/${product.image}`} title={product.name} description={product.description} price={product.price} currency={'lei'} />)
                            }
                            <Product image={'/soon2.png'} title={'More coming soon!'} description={''} price={''} currency={''} />
                        </div>


                        <form onSubmit={placeOrder}>
                            <div className='place-order-cont'>
                                <div style={{ backgroundImage: 'url(/order.jpg)' }} className='order-image'></div>
                                <div className='place-order-form'>
                                    <span>Comandă o sticlă</span>

                                    <p id='subtitle'>Plasează comanda mai jos și o să vă contactăm pentru confirmare</p>

                                    <div className='rowCol'>
                                        <InputOrder title={'Nume complet'} placeholder={'Nume Prenume'} onInput={e => { setName(e) }} />
                                        <InputOrder title={'Email'} placeholder={'Email'} onInput={e => { setEmail(e) }} />
                                    </div>

                                    <div className='rowCol'>
                                        <InputOrder title={'Telefon'} placeholder={'Nr. Telefon'} onInput={e => { setPhone(e) }} />
                                        <InputOrder title={'Adresă'} placeholder={'Eg. Jud. X, Loc Y, Str. Z, nr. 0'} onInput={e => { setAddress(e) }} />
                                    </div>

                                    <div className='rowCol'>
                                        <InputOrder textArea={true} title={'Ce vin(uri) ați dori ?'} placeholder={'Eg. 1 vin alb sec, 2 sticle rosu dulce'} onInput={e => { setOrder(e) }} />
                                    </div>

                                    <button type='submit' className='btn orderBtn'>Comandă</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div >

        </>

    )
} 
