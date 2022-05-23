import React from 'react'

import television from '../../assets/img/gallery/img_35.webp';

export const CircuitsTelevision = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ television } alt="feature image" /></div>
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">CIRCUITOS CERRADOS DE TELEVISIÓN</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Ofrecemos sistemas con cámaras de alta definición que permiten mantener tus bienes, familia y tus
                                    colaboradores seguros en las locaciones importantes para ti, tenemos aliados de calidad superior para
                                    que puedas tener acceso a tu sistema desde cualquier parte del mundo a un solo click, te asesoramos
                                    durante todo el proceso y aseguramos la eficiencia del proyecto. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
