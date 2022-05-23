import React from 'react'

import ilumination from '../../assets/img/gallery/img_15.webp';

export const Ilumination = () => {
  return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">ILUMINACIÓN</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Ofrecemos soluciones integrales en iluminación que permiten tener un proyecto totalmente integrado,
                                    teniendo en cuenta las necesidades del cliente, el ángulo de apertura requerido, el plano de trabajo y
                                    temperatura buscando el equilibrio perfecto entre la iluminación natural y la instalada, para esto
                                    contamos con luces que permiten protocolos como DMX para entretenimiento, o instalaciones simples en
                                    techo, pared, suelos y decorativas, cuidando la estética y performance.
                                </p>
                            </div>
                        </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ ilumination } alt="feature image" /></div>
                    </div>
                </div>
            </section>
        </div>
  )
}