import React from 'react'

import cruceros from '../../assets/img/gallery/img_40.webp';

export const Cruceros = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <section className="py-20">
            <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ cruceros } alt="feature image" /></div>
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md mx-auto">
                            <h2 id='cruceros' className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">CRUCEROS</h2>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Proporcionar tecnología de
                                entretenimiento altamente especializada,
                                señalización digital, video wall de gran
                                formato, videoconferencia, seguridad y
                                control de acceso y PA en la industria de
                                cruceros es una disciplina exigente y
                                especializada. Los cruceros modernos se
                                han comparado con una "porción" de la
                                franja de Las Vegas, pero con una
                                diferencia muy importante; La nave se
                                mueve.
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                Podemos ver un barco en el puerto aquí
                                en Florida durante unas horas una vez a la
                                semana, pero el resto del tiempo está
                                constantemente en movimiento.
                                Diseñar para el mercado de cruceros
                                significa diseñar para el entorno más
                                exigente, para operar las 24 horas, los 7
                                días de la semana y para brindar de
                                manera confiable y consistente el factor
                                'WOW' de la más alta calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
