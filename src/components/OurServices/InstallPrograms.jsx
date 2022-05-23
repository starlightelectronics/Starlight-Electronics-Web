import React from 'react'

import installation from '../../assets/img/gallery/img_27.webp';

export const InstallPrograms = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <section className="py-20">
            <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ installation } alt="feature image" /></div>
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md mx-auto">
                            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">INSTALACIÓN, PROGRAMACIÓN Y PUESTA EN MARCHA</h2>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Starlight Electronics se enorgullece de sus equipos
                                técnicos y de la calidad de nuestros productos
                                terminados. Cada uno de los miembros de nuestro
                                equipo es un profesional experimentado que
                                entiende que, como empresa, solo somos tan
                                buenos como nuestro último trabajo. 
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                La instalación de alta calidad es solo el
                                comienzo; La 'usabilidad' de cualquier sistema está
                                determinada por la calidad de la
                                programación. Nuestros sistemas están
                                programados para proporcionar interfaces de
                                usuario intuitivas y facilidad de uso 
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Una vez completado, nuestros sistemas se prueban
                                completamente durante la puesta en marcha y se
                                mantienen registros para facilitar el mantenimiento
                                y las actualizaciones futuras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
