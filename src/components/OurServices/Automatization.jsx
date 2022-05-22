import React from 'react'

import control from '../../assets/img/content/control.webp';

export const Automatization = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <section className="py-20">
            <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md">
                            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">CONTROL Y AUTOMATIZACIÓN</h2>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Proveemos a nuestros clientes, sistemas de
                                automatización y control para espacios como
                                auditorios, teatros, centros de convenciones, salas
                                de juntas y conferencias, aulas de clases,
                                entretenimiento u hogares.
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Integramos todos los sistemas para el control de
                                dispositivos con protocolos RS232, Infrarrojo e IP
                                mediante interfaces gráficas en pantallas táctiles,
                                teléfonos celulares o paneles alámbricos. 

                            </p>
                        </div>
                    </div>
                <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ control } alt="feature image" /></div>
                </div>
            </div>
        </section>
  </div>
  )
}
