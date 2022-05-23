import React from 'react'

import screens from '../../assets/img/gallery/img_53.webp';

export const InteractiveScreens = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">PANTALLAS INTERACTIVAS Y SEÑALIZACIÓN DIGITAL</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Somos un proveedor de herramientas que ayudan a las empresas a conectarse y colaborar con pantallas
                                    interactivas personalizadas. Ya sea que se trate de una sola pantalla táctil o una pequeña pared de video
                                    con retroalimentación táctil, podemos ayudarlo con la instalación y configuración.
                                </p>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Las pantallas interactivas con contenido compartido y toque interactivo al alcance de la mano ayudan a
                                    las empresas a facilitar las presentaciones, la lluvia de ideas y la toma de decisiones. Son una característica
                                    atractiva y atractiva para los clientes cuando se utilizan para encontrar formas, exhibiciones de productos y
                                    experiencia de compra.
                                </p>
                            </div>
                        </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ screens } alt="feature image" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
