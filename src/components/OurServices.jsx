import React from 'react';

import control from '../assets/img/content/control.webp';
import audio from '../assets/img/content/audio.webp';
import iluminacion from '../assets/img/content/iluminacion.webp';

export const OurServices = () => {
	return (
        <div className='animate__animated animate__fadeIn'>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Nuestros <span className='text-sky-600'>servicios</span></h2>
            
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
                                    entretenimiento u hogares.</p>
                                <ul>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                        <span className="font-medium text-gray-500">Planificación minuciosa detalle </span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                        <span className="font-medium text-gray-500"> Integración de estandares de calidad</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        <span className="font-medium text-gray-500">100% de eficiencia y seguridad en cada proceso</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ control } alt="feature image" /></div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ audio } alt="feature image" /></div>
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">AMPLIFICACIÓN Y AUDIO</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 ">
                                    Ofrecemos soluciones completas de sonido ambiental,
                                    sistemas de audio profesional envolvente y de alta
                                    calidad adaptables a pequeños y grandes espacios que
                                    requieran fidelidad y eficiencia, con el fin de entregar
                                    música o mensajes a través de sistemas de alertas de
                                    emergencia para la evacuación en: edificios, clínicas,
                                    hospitales, centros de entrenamiento y deportes, night
                                    clubs, centros culturales, spas, instituciones educativas,
                                    industria del turismo tales como hoteles, hostales,
                                    restaurantes, iglesias, casinos, entre otros. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
	);
};
