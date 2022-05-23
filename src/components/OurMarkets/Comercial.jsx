import React from 'react'

import comercial from '../../assets/img/gallery/img_23.webp';

export const Comercial = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ comercial } alt="feature image" /></div>
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 id='comercial' className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">COMERCIAL</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Desde oficinas corporativas y casas privadas, hasta casinos y
                                    estadios, nuestra experiencia en tierra es tan avanzada como en el
                                    agua.
                                </p>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Podemos ofrecer la última tecnología y avances en comunicación
                                    para empresas, teatros de lujo de primera línea, iluminación para
                                    espectáculos para cualquier tipo de lugar o simplemente un
                                    sonido increíble para las personas que buscan solo lo mejor.
                                </p>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Guiamos a nuestros clientes desde una idea básica hasta el
                                    sistema terminado que buscan, mientras nos enfocamos en cada
                                    detalle a lo largo del camino.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
