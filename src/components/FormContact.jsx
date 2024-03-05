import React from 'react'

import globalpositionwhite from '../assets/img/content/global-position-white.webp';

export const FormContact = () => {

    return (
        <div className="container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-28 w-full">
            <section className="w-full">
                <h2 id="contact" className="secondary-title">Contáctanos</h2>
                <p className="section-paragraph"> Recibiremos tu información y nos contactaremos contigo en el menor tiempo posible! </p>

                <div className="w-full md:flex justify-between lg:grid-cols-2 gap-18 lg:gap-5">

                    <form className="space-y-10 mt-16 mb-8 md:w-2/4" method="POST" name="contact" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label htmlFor='name' className="text-white block mb-2 text-xl font-bold">Nombre</label>
                            <input type="text" id="nombre" name="name" className="w-full border border-input-border bg-input px-4 py-4" placeholder='Tú nombre' required />
                        </div>
                        <div>
                            <label htmlFor='email' className="text-white block mb-2 text-xl font-bold">Email</label>
                            <input type="email" id="correo" name="email" className="w-full border border-input-border bg-input px-4 py-4" placeholder='example@starlight.com' required />
                        </div>
                        <div>
                            <label htmlFor='mensaje' className="text-white block mb-2 text-xl font-bold"> ¿Cómo podemos ayudarte? </label>
                            <textarea type="text" id="mensaje" name="message" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" required ></textarea>
                        </div>
                        <button type='submit' className="px-6 py-2 bg-theme text-white font-bold">Enviar</button>
                    </form>
                
                        <map name="globalposition">
                            <area shape="rect" coords="190,310,232,350" href="https://www.controlavllc.com/" alt="positionglobal" target='_blank' />
                            <area shape="rect" coords="220,370,240,420" href="#home" alt="positionglobal" />
                            <area shape="rect" coords="380,290,420,330" href="#home" alt="positionglobal" />
                            <area shape="rect" coords="435,210,475,250" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                        </map>

                        <figure className='my-auto w-full border-dashed border-2 rounded-xl 4xl:mb-32'>
                            <img src={ globalpositionwhite } alt="mapa de posicion global de starlightelectronics y controlavllc" className="md:h-2/4 mx-auto md:mt-5 4xl:w-8/12" useMap='#globalposition' />
                        </figure>
                    
                </div>

                {/* <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 mt-10 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    <svg className="w-5 h-5 text-blue-600 dark:text-sky-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                    <div className="pl-4 text-sm font-normal">Mensaje enviado.</div>
                </div> */}

                <div id='location' className="container bg-[#0f1d40] text-gray-800 px-4 md:px-12 pt-7 rounded-2xl mb-20 mt-20">
                    <div className="block py-10 md:py-12 px-4 md:px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <a target='_blank' href="https://www.google.es/maps/place/Starlight+Electronics/@4.2718596,-73.4873487,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3fd594303ed19f:0x4d0f853180d82792!8m2!3d4.2718543!4d-73.48516?hl=es">
                                    <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </a>
                                <h6 className="font-medium text-white">Cumaral - Meta - Colombia</h6>
                                <h6 className="font-medium text-white">Carrera 17 #10-11.</h6>
                            </div>
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <a target='_blank' href="https://www.google.es/maps/place/STARLIGHT+ELECTRONICS/@4.6799303,-74.0502013,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9b25f09168f7:0xeca1a3376e61515b!8m2!3d4.679925!4d-74.0480126?hl=es">
                                    <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </a>
                                <h6 className="font-medium text-white">Bototá - Colombia</h6>
                                <h6 className="font-medium text-white">Carrera 10 N° 96-79 Of. 507</h6>
                            </div>
                            <div className="mb-6 md:mb-0 text-center mx-auto">
                                <a target='_blank' href="https://wa.me/573173759475">
                                    <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                                </a>
                                <h6 className="font-medium text-white">+ 57 317 375 9475</h6>
                                <h6 className="font-medium text-white">+ 57 316 690 5860</h6>
                            </div>
                            <div className="text-center mx-auto">
                                <a href="mailto:ventas@starlightelectronics.com">
                                    <svg className="w-10 h-10 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                </a>
                                <h6 className="font-medium text-white">ventas@starlightelectronics.com</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
  )
}
