import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { clients } from '../data/clients';

export const OurClients = () => {

    const responsive = {
        0: { items: 3 },
        600: { items: 3 },
        1024: { items: 8 },
    };

    const items = clients.map((client, index) => (
        <div className='client-item mx-5' key={ index } style={{transition: 'transform 0.3s', cursor: 'pointer'}}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <img src={ client } alt="clientes carousel" style={{maxHeight: '55px', objectFit: 'contain', filter: 'brightness(1.2) contrast(1.1)'}} />
        </div>
    ));

    return (
        <div className='container mx-auto px-8 md:px-14 lg:px-24 mt-16'>
            <div className='font-bold sm:ml-5 md:ml-4 mb-4'>
                <h2 id="galeria" className="text-center md:text-left md:text-3xl text-xl text-white">Nuestros <span className='text-sky-600'>clientes</span></h2>
            </div>
            <div className="pb-5 pt-8 flex-wrap flex items-center gap-2 justify-center rounded-2xl bg-white my-auto">
                <AliceCarousel
                    autoPlay
                    responsive={responsive}
                    autoPlayInterval={1000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                />
            </div>
        </div>
    )
}
