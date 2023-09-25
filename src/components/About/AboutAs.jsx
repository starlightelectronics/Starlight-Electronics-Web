import React from 'react'

import logo_sle_blue from '../../assets/img/content/logo-sle-white.png'
import mision from '../../assets/img/gallery/img_49.webp'
import vision from '../../assets/img/gallery/img_27.webp'

export const AboutAs = () => {
    return (
        <>            
            <section className="flex items-center justify-center mt-10 sm:mt-auto py-10 text-white sm:py-16 md:py-24 lg:py-32 animate__animated animate__fadeIn">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div className="flex flex-col w-full md:flex-row">

                        <div className="flex justify-between">
                            <h1 id="nosotros" className="relative flex flex-col text-6xl font-extrabold text-center mx-auto md:text-left text-white">
                                Quiénes 
                                <span className='text-sky-600'>Somos</span>
                            </h1>
                        </div>

                        <div className="relative top-0 right-0 h-24 mt-12 md:mt-0 md:h-10 mx-auto">
                            <img src={ logo_sle_blue } className="object-cover mt-3 mr-5 h-30 lg:h-32 md:my-auto md:mr-0" alt='logo starlight electronics' />
                        </div>
                    </div>

                    <div className="my-12 border-b border-gray-300 lg:my-14"></div>

                    <div className='grid gap-y-4 text-justify '>
                        
                        <h3 className="text-gray-400 xl:text-xl ">
                            Somos una compañía <span className='text-white font-bold'>colombiana</span> dedicada a la integración de sistemas de Audio, Video e Iluminación
                            fundada en el 2016, con un respaldo de 07 años de trayectoria en el extranjero, ya que somos una de las
                            cuatro empresas que conforman el Grupo <span className='text-white font-bold'>Control AV</span>, con su casa matriz en <span className='text-white font-bold'>Miami - USA</span>.
                        </h3>
                    
                        <h3 className="text-gray-400 xl:text-xl">
                            Iniciamos en Bogotá D.C, como parte de nuestra evolución y la apertura del mercado Colombiano,
                            contamos con alianzas estratégicas con numerosos fabricantes y distribuidores nacionales e
                            internacionales, actualmente somos exportadores de talento, para la ejecución de proyectos en países
                            como España, USA, Singapur y la Isla de Bahamas con clientes de la industria naviera.
                        </h3>
                            
                        <h3 className="text-gray-400 xl:text-xl">
                            Somos miembros activos de AVIXA, permanecemos en constante capacitación de nuestro Capital
                            Humano, participando en sus eventos y capacitaciones en el país y en eventos internacionales.
                        </h3>

                        <h3 className="text-gray-400 xl:text-xl">
                            Contamos con personal muy capaz y profesional que se asegurará de entregar lo mejor de sí para cumplir
                            con sus requerimientos.
                        </h3>

                        <h3 className="text-gray-400 xl:text-xl">
                            ¡Estamos listos para trabajar en sus proyectos!
                        </h3>

                    </div>
                </div>
            </section>

            <section className="w-full pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div data-aos="fade-up" className="box-border relative w-full max-w-md px-4 mt-5 mb-4 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-32">
                        <img src={ mision } className="rounded-md border lg:max-h-80" />
                    </div>

                    <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-4xl md:text-2xl">
                            Nuestra <span className='text-sky-600'> misión </span>
                        </h3>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-400 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-justify">
                            Starlight Electronics SAS es una empresa
                            dedicada al <span className='text-white'>sector tecnológico, con
                            énfasis en el mercado del entretenimiento
                            y automatización,</span>  para el sector turístico,
                            comercial y residencial, orientada al
                            mejoramiento continuo.
                        </p>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-400 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-justify">
                            Starlight Electronics SAS cuenta con la
                            capacidad de <span className='text-white'> planificar, diseñar, ejecutar
                            y dar soporte </span> a proyectos en cualquier
                            parte del mundo implementando una
                            gran variedad de tecnologías de acuerdo
                            con las necesidades del cliente.
                        </p>
                    </div>

                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-4xl md:text-2xl">
                            Nuestra <span className='text-sky-600'> visión </span>
                        </h3>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-400 border-0 border-gray-300 sm:pr-10 lg:text-lg text-justify">
                            Starlight Electronics SAS para el año 2025 será un referente
Internacional en la Industria del entretenimiento y automatización en
el sector naval, reconocidos por la calidad de los servicios y soluciones 
técnicas aportadas, apoyados de un equipo humano capacitado,
soportados con certificaciones que aseguren la calidad y seguridad
de los proyectos. A nivel Nacional aportar la experiencia en pro de 
afianzar y ampliar las relaciones comerciales.
                        </p>
                    </div>

                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img data-aos="fade-up" src={ vision } className="rounded-md border lg:max-h-80" />
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto sm:px-20 md:px-32 lg:px-16'>
                    <section className="py-12 sm:py-16 mt-16">
                        <div className="max-w-7xl px-10 mx-auto sm:text-center">
                            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-center uppercase">Valores corporativos</h2>
                            {/* <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">We've built integrations with some of your favorite services. </p> */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-12 sm:my-16 md:text-lg">
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto rounded-xl' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#48b5f0"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                                    <p className="font-bold mt-4 text-center">Ética comercial</p>
                                </div>
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#48b5f0"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M10.94,15.54L7.4,12l1.41-1.41l2.12,2.12 l4.24-4.24l1.41,1.41L10.94,15.54z"/></g></svg>
                                    <p className="font-bold mt-4 text-center">Calidad</p>
                                </div>
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto text-sky-700' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#48b5f0"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                                    <p className="font-bold mt-4 text-center">Trabajo en equipo</p>
                                </div>
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#48b5f0"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                                    <p className="font-bold mt-4 text-center">Transparencia</p>
                                </div>
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 20 20" width="48px" fill="#48b5f0"><rect fill="none" height="20" width="20"/><path d="M10.5,20c-3.87,0-7-3.13-7-7V5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h1V2.25c0-0.55,0.45-1,1-1s1,0.45,1,1V9h1V1 c0-0.55,0.45-1,1-1s1,0.45,1,1v8h1V2.5c0-0.55,0.45-1,1-1s1,0.45,1,1l0,9.04c-1.69,0.24-3,1.7-3,3.46h1c0-1.38,1.12-2.5,2.5-2.5h0.5 v-5c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1V13C17.5,16.87,14.37,20,10.5,20z"/></svg>
                                    <p className="font-bold mt-4 text-center">Respeto y responsabilidad</p>
                                </div>
                                <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                    <svg className='h-16 md:h-20 w-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 20 20" width="48px" fill="#48b5f0"><g><rect fill="none" height="20" width="20"/></g><g><path d="M17.62,10.17c1.17-1.17,1.17-3.07,0-4.24l-2.55-2.55c-1.17-1.17-3.07-1.17-4.24,0l-0.27,0.27l3.59,3.58 c0.62,0.62,0.62,1.64,0,2.26c-0.62,0.62-1.64,0.62-2.26,0l-3-3l-4.55,4.55c-0.31,0.31-0.31,0.82,0,1.13c0.31,0.31,0.82,0.31,1.13,0 l3.79-3.79l0.57,0.57l-3.79,3.79c-0.31,0.31-0.31,0.82,0,1.13c0.31,0.31,0.82,0.31,1.13,0l3.79-3.79l0.57,0.57l-3.79,3.79 c-0.31,0.31-0.31,0.82,0,1.13c0.31,0.31,0.82,0.31,1.13,0l3.79-3.79l0.57,0.57l-3.79,3.79c-0.31,0.31-0.31,0.82,0,1.13 c0.31,0.31,0.82,0.31,1.13,0L17.62,10.17z M4.48,4.87 M2.38,5.91c-1.17,1.17-1.17,3.07,0,4.24L3.23,11l5.64-5.64l3.57,3.57 c0.31,0.31,0.83,0.31,1.14,0c0.31-0.31,0.31-0.82,0-1.13L9.15,3.38c-1.17-1.17-3.07-1.17-4.24,0L2.38,5.91z"/></g></svg>
                                    <p className="font-bold mt-4 text-center">Lealtad</p>
                                </div>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:bg-slate-800 hover:scale-110 transition duration-300">
                                <svg className='h-20 w-auto' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 20 20" width="48px" fill="#48b5f0"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M7.57,11.84c-1.81,0-5.43,0.91-5.43,2.72v1.36H13v-1.36C13,12.75,9.38,11.84,7.57,11.84z"/><path d="M17.36,5.74c0.01-0.08,0.02-0.16,0.02-0.24c0-0.08-0.01-0.17-0.02-0.24l0.53-0.41c0.05-0.04,0.06-0.11,0.03-0.16 l-0.5-0.87c-0.03-0.06-0.1-0.08-0.15-0.06l-0.62,0.25c-0.13-0.1-0.27-0.18-0.42-0.24l-0.09-0.66C16.12,3.04,16.06,3,16,3h-1 c-0.06,0-0.11,0.04-0.12,0.11l-0.09,0.66c-0.15,0.06-0.29,0.15-0.42,0.24l-0.62-0.25c-0.06-0.02-0.12,0-0.15,0.06l-0.5,0.87 c-0.03,0.06-0.02,0.12,0.03,0.16l0.53,0.41c-0.01,0.08-0.02,0.16-0.02,0.24c0,0.08,0.01,0.17,0.02,0.24l-0.53,0.41 c-0.05,0.04-0.06,0.11-0.03,0.16l0.5,0.87c0.03,0.06,0.1,0.08,0.15,0.06l0.62-0.25c0.13,0.1,0.27,0.18,0.42,0.24l0.09,0.66 C14.89,7.96,14.94,8,15,8h1c0.06,0,0.12-0.04,0.12-0.11l0.09-0.66c0.15-0.06,0.29-0.15,0.42-0.24l0.62,0.25 c0.06,0.02,0.12,0,0.15-0.06l0.5-0.87c0.03-0.06,0.02-0.12-0.03-0.16L17.36,5.74z M15.5,6.39c-0.49,0-0.89-0.4-0.89-0.89 c0-0.49,0.4-0.89,0.89-0.89s0.89,0.4,0.89,0.89C16.39,5.99,15.99,6.39,15.5,6.39z"/><path d="M15.66,9.35l-0.35-0.61C15.29,8.7,15.24,8.69,15.2,8.7l-0.44,0.17c-0.09-0.07-0.19-0.13-0.3-0.17l-0.07-0.46 c-0.01-0.04-0.04-0.07-0.09-0.07h-0.7c-0.04,0-0.08,0.03-0.09,0.07L13.47,8.7c-0.11,0.04-0.21,0.1-0.3,0.17L12.74,8.7 c-0.04-0.02-0.09,0-0.11,0.04l-0.35,0.61c-0.02,0.04-0.01,0.09,0.02,0.11l0.37,0.29c-0.01,0.05-0.02,0.11-0.02,0.17 s0,0.12,0.01,0.17l-0.37,0.29c-0.03,0.03-0.04,0.07-0.02,0.11l0.35,0.61c0.02,0.04,0.07,0.05,0.11,0.04l0.44-0.17 c0.09,0.07,0.19,0.13,0.3,0.17l0.07,0.46c0.01,0.04,0.04,0.07,0.09,0.07h0.7c0.04,0,0.08-0.03,0.09-0.07l0.07-0.46 c0.11-0.04,0.21-0.1,0.3-0.17l0.44,0.17c0.04,0.02,0.09,0,0.11-0.04l0.35-0.61c0.02-0.04,0.01-0.09-0.02-0.11l-0.37-0.29 c0.01-0.05,0.01-0.11,0.01-0.17s0-0.12-0.01-0.17l0.37-0.29C15.67,9.43,15.68,9.38,15.66,9.35z M13.97,10.5 c-0.32,0-0.58-0.26-0.58-0.58c0-0.32,0.26-0.58,0.58-0.58c0.32,0,0.58,0.26,0.58,0.58C14.55,10.24,14.29,10.5,13.97,10.5z"/><path d="M4.82,8H5h5h0.32c0.14,0,0.25-0.11,0.25-0.25S10.45,7.5,10.32,7.5H10c0-1.02-0.62-1.9-1.5-2.29v0.54 C8.5,5.89,8.39,6,8.25,6S8,5.89,8,5.75v-0.7C7.84,5.02,7.67,5,7.5,5S7.16,5.02,7,5.05v0.7C7,5.89,6.89,6,6.75,6S6.5,5.89,6.5,5.75 V5.21C5.62,5.6,5,6.48,5,7.5H4.82c-0.14,0-0.25,0.11-0.25,0.25S4.68,8,4.82,8z"/><path d="M7.5,10.5c1.21,0,2.22-0.86,2.45-2h-4.9C5.28,9.64,6.29,10.5,7.5,10.5z"/></g></g></svg>
                                <p className="font-bold mt-4 text-center">Innovación y creatividad</p>
                            </div>
                        </div>
                    </section>

                </div>     
            </section>
        </>
  )
}
