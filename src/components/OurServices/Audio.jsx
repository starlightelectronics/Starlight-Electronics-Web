import React from 'react';

import audio from '../../assets/img/gallery/img_41.webp';

export const Audio = () => {
	return (
        <div className='animate__animated animate__fadeIn'>
            <section className="py-20">
                <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ audio } alt="feature image" /></div>
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md mx-auto">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">AMPLIFICACIÓN Y AUDIO</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                    Ofrecemos soluciones completas de sonido ambiental,
                                    sistemas de audio profesional envolvente y de alta
                                    calidad adaptables a pequeños y grandes espacios que
                                    requieran fidelidad y eficiencia, con el fin de entregar
                                    música o mensajes a través de sistemas de alertas de
                                    emergencia para la evacuación en: edificios, clínicas,
                                    hospitales, centros de entrenamiento y deportes, night
                                    clubs, centros culturales, spas, instituciones educativas,
                                    industria del turismo tales como hoteles, hostales,
                                    restaurantes, iglesias, casinos, entre otros. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
