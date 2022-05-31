import React from 'react';

import audio from '../../assets/img/gallery/img_41.webp';
import das from '../../assets/img/content/das.png';

export const Audio = () => {
	return (
        <section className="py-20 animate__animated animate__fadeIn border-b-2 sm:border-none">
            <fieldset className="container items-center max-w-screen-xl 4xl:max-w-screen-2xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-10 sm:border sm:border-dashed sm:rounded-xl sm:pt-8 sm:pb-16">
                <legend className='px-10 text-center mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading uppercase'>AMPLIFICACIÓN Y AUDIO</legend>
                <div className="flex flex-wrap items-center -mx-3 4xl:mx-0">
                    <div className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'>
                        <img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg hover:shadow-2xl hover:scale-110 transition duration-300" src={ audio } alt="Servicio de amplificación de audio" title='imagen de audio'/>
                    </div>
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md mx-auto 4xl:text-xl">
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
                            <img src={ das } className="h-24" alt="logo DAS" title='das audio' />
                        </div>
                    </div>
                </div>        
            </fieldset>
        </section>
        // <div className='animate__animated animate__fadeIn'>
        //     <section className="py-20 border-b-2 sm:border-none">
        //         <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-0">
        //             <h2 className="text-center sm:text-left mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading uppercase">AMPLIFICACIÓN Y AUDIO</h2>
        //             <div className="flex flex-wrap items-center -mx-3 4xl:-mx-40">
        //             <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg hover:shadow-2xl hover:scale-110 transition duration-300" src={ audio } alt="audio starlight electronics" /></div>
        //                 <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        //                     <div className="w-full lg:max-w-md mx-auto">
        //                         <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
             
        //                         </p>
        //                         <img src={ das } className="h-24" alt="logo DAS" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>


    );
};
