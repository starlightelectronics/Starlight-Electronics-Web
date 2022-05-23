import React from 'react'

import Carousel from 'react-elastic-carousel';

import { clients } from '../data/clients';

export const OurClients = () => {
    return (
        <div className='mx-20'>
            <div className='secondary-title sm:ml-5 md:ml-24 mb-4'>
                <h2 id="galeria" className=" text-center md:text-left md:text-3xl text-xl">Nuestros <span className='text-sky-600'>clientes</span></h2>
            </div>
            <div className="p-5 pt-1 flex-wrap flex items-center gap-3 justify-center">

                <Carousel itemsToShow={6} itemsToScroll={1} enableAutoPlay autoPlaySpeed={2000}>
                    {
                        clients.map((client, index) => (
                            <div key={ index } className="bg-white flex-auto  w-42 h-42  shadow-lg mx-2 rounded-lg">
                                <div className="md:p-7 p-4 flex items-center justify-center">
                                    <img src={ client } alt="Disney Plus" className="block object-contain h-12" />
                                </div>
                            </div>
                        ))
                    }
                </Carousel>

            </div>
        </div>
    )
}
