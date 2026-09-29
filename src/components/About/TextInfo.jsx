import React from 'react';
import ISO9001 from '../../assets/img/content/Bureau veritas.png';
import avixamember from '../../assets/img/content/avixamember.png';

export const TextInfo = () => {
    return (
        <>
            {/* Párrafo central */}
            <section className="flex items-center justify-center mt-5 sm:mt-auto py-10 text-white sm:py-16 animate__animated animate__fadeIn">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div className="my-12 border-b border-gray-700 lg:my-14"></div>
                    <div className='grid gap-y-4 text-justify'>
                        <h2 className="text-gray-400 xl:text-xl" id='info'>
                            Brindamos a las compañías y clientes individuales servicios de <span className='text-white font-bold'>automatización</span> y soluciones de control en sistemas de <span className='text-white font-bold'>audio</span>,
                            <span className='text-white font-bold'> video</span> e <span className='text-white font-bold'>iluminación</span> o <span className='text-white font-bold'>sistemas integrales</span> que se adapten a mejorar la calidad de vida, a través de los
                            avances tecnológicos, así mismo contribuimos en el desarrollo sostenible del planeta integrando eficiencia
                            energética en la prestación de nuestros servicios.
                        </h2>
                    </div>
                    <div className="my-12 border-b border-gray-700 lg:my-14"></div>
                </div>
            </section>

            {/* Sección certificaciones */}
            <section className="py-16 px-8 md:px-14 lg:px-24 text-white">
                <div className="max-w-5xl mx-auto">

                    {/* Encabezado */}
                    <div className="text-center mb-12">
                        <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-3">Certificaciones</p>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Nuestro compromiso con la calidad</h2>
                        <p className="text-gray-400 text-base max-w-2xl mx-auto">
                            Contamos con certificaciones que respaldan nuestros procesos y garantizan soluciones confiables, alineadas con los más altos estándares internacionales.
                        </p>
                    </div>

                    {/* Tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

                        {/* ISO 9001 */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl" style={{borderTop: '4px solid #0ea5e9'}}>
                            <img src={ISO9001} alt="ISO 9001:2015" className="h-24 object-contain mb-6" />
                            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-4">Calidad</span>
                            <h3 className="text-[#0a1628] font-bold text-xl mb-1">ISO 9001:2015</h3>
                            <p className="text-gray-500 font-medium text-sm mb-3">Sistema de Gestión de la Calidad</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Respalda nuestro compromiso con la calidad, la satisfacción de nuestros clientes y la mejora continua de nuestros procesos.
                            </p>
                        </div>

                        {/* AVIXA */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl" style={{borderTop: '4px solid #0ea5e9'}}>
                            <img src={avixamember} alt="AVIXA Member" className="h-24 object-contain mb-6" />
                            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-4">Membresía</span>
                            <h3 className="text-[#0a1628] font-bold text-xl mb-1">AVIXA Member</h3>
                            <p className="text-gray-500 font-medium text-sm mb-3">Asociación de la Industria Audiovisual</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Somos miembros de AVIXA, la alianza mundial para el avance de las experiencias audiovisuales integradas.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
