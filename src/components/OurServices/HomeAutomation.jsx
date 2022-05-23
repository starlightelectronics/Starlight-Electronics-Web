import React from 'react'

import homeautomation from '../../assets/img/gallery/img_44.webp';

export const HomeAutomation = () => {
  return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">DOMÓTICA</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Tenemos los recursos tecnológicos y el conocimiento para automatizar tu hogar, oficina, edificio u
                                    locación en la que se requiera la integración de sistemas de audio, video, iluminación, cortinas,
                                    ambientadores o elementos de SmartHome en general, para este segmento se manejan diferentes
                                    tecnologías que de acuerdo al presupuesto y espacios a integrar se ofrece una solución eficiente y que
                                    satisfaga tus necesidades.
                                </p>
                            </div>
                        </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ homeautomation } alt="feature image" /></div>
                    </div>
                </div>
            </section>
        </div>
  )
}