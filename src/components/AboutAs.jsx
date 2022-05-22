import React from 'react'

import logo_sle_blue from '../assets/img/content/logo-sle-blue.png'

export const AboutAs = () => {
    return (
        <>            
            {/* <!-- Section 2 --> */}
            <section className="flex items-center justify-center mt-10 sm:mt-auto py-10 text-white sm:py-16 md:py-24 lg:py-32 animate__animated animate__fadeIn">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div className="flex flex-col w-full md:flex-row">

                        {/* <!-- Top Text --> */}
                        <div className="flex justify-between">
                            <h1 id="nosotros" className="relative flex flex-col text-6xl font-extrabold text-center mx-auto md:text-left text-white">
                                Quiénes 
                                <span className='text-sky-600'>Somos</span>
                            </h1>
                        </div>
                        {/* <!-- Right Image --> */}
                        <div className="relative top-0 right-0 h-24 mt-12 md:mt-0 md:h-10 mx-auto">
                            <img src={ logo_sle_blue } className="object-cover mt-3 mr-5 h-30 lg:h-32 md:my-auto md:mr-0" alt='logo starlight electronics' />
                        </div>
                    </div>

                    {/* <!-- Separator --> */}
                    <div className="my-12 border-b border-gray-300 lg:my-14"></div>

                    {/* <!-- Bottom Text --> */}
                    <div className='grid gap-y-4 text-justify '>
                        
                        <h3 className="text-gray-400 xl:text-xl ">
                            Somos una compañía <span className='text-white font-bold'>colombiana</span> dedicada a la integración de sistemas de Audio, video e Iluminación
                            fundada en el 2016, con un respaldo de 07 años de trayectoria en el extranjero ya que somos una de las
                            cuatro empresas que conforman el Grupo Control AV, con su casa matriz en Miami - USA.
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

            {/* <!-- Section 3 --> */}
            <section className="w-full pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Image --> */}
                    <div data-aos="fade-up" className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </div>

                    {/* <!-- Content --> */}
                    <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
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
                    {/* <!-- End  Content --> */}
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Content --> */}
                    <div className="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Nuestra <span className='text-sky-600'> visión </span>
                        </h3>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-400 border-0 border-gray-300 sm:pr-10 lg:text-lg text-justify">
                            En el 2023, Starlight Electronics SAS
                            será una empresa reconocida en la
                            industria del entretenimiento y
                            automatización a nivel internacional y
                            en el 2025 a nivel regional, gracias a
                            su experiencia, efectividad,
                            cumplimento y mejoramiento de sus
                            procesos permitiendo afianzar las
                            relaciones con los clientes y demás
                            partes interesadas.
                        </p>
                    </div>
                    {/* <!-- End  Content --> */}

                    {/* <!-- Image --> */}
                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img data-aos="fade-up" src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                    </div>
                </div>
            </section>

        </>
  )
}
