import React from 'react'

import globalpositionwhite from '../assets/img/content/global-position-white.png';

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
                            <label className="text-white block mb-2 text-xl font-bold">Nombre</label>
                            <input type="text" id="name" name="name" className="w-full border border-input-border bg-input px-4 py-4" placeholder='Tú nombre' required />
                        </div>
                        <div>
                            <label className="text-white block mb-2 text-xl font-bold">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-input-border bg-input px-4 py-4" placeholder='example@starlight.com' required />
                        </div>
                        <div>
                            <label className="text-white block mb-2 text-xl font-bold"> ¿Cómo podemos ayudarte? </label>
                            <textarea type="text" id="message" name="message" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" required ></textarea>
                        </div>
                        <button type='submit' className="px-6 py-2 bg-theme text-white font-bold">Enviar</button>
                    </form>
                
                        <map name="globalposition">
                            <area shape="rect" coords="235,420,275,460" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                            {/* <area shape="rect" coords="220,370,240,420" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" /> */}
                            <area shape="rect" coords="380,290,420,330" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                            <area shape="rect" coords="435,210,475,250" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                        </map>

                        <figure className='my-auto w-full border-dashed border-2  rounded-xl'>
                            <img src={ globalpositionwhite } alt="mapa de posicion global" className="md:h-2/4  md:mt-5 md:mr-10" useMap='#globalposition' />
                        </figure>

                    
                </div>

                {/* <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 mt-10 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    <svg className="w-5 h-5 text-blue-600 dark:text-sky-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                    <div className="pl-4 text-sm font-normal">Mensaje enviado.</div>
                </div> */}


                <div className="container bg-[#0f1d40] text-gray-800 px-4 md:px-12 pt-7 rounded-2xl mb-20 mt-20">
                    <div className="block py-10 md:py-12 px-4 md:px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <a target='_blank' href="https://www.google.es/maps/place/Control+AV+LLC/@25.9224468,-80.2219547,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9ad93aee8575b:0x3baac0c9369f9d01!8m2!3d25.9226212!4d-80.2199546?hl=es">
                                    <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/></svg>
                                </a>
                                <h6 className="font-medium text-white">Unites States</h6>
                            </div>
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <a target='_blank' href="https://www.google.es/maps/place/Starlight+Electronics/@4.2718596,-73.4873487,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3fd594303ed19f:0x4d0f853180d82792!8m2!3d4.2718543!4d-73.48516?hl=es">
                                    <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </a>
                                <h6 className="font-medium text-white">Cumaral - Meta - Colombia</h6>
                                <h6 className="font-medium text-white">Calle 95 N° 13-09 Of. 201-202</h6>
                            </div>
                            <div className="mb-6 md:mb-0 text-center mx-auto">
                                <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                                <h6 className="font-medium text-white">+ 57 317 375 9475</h6>
                                <h6 className="font-medium text-white">+ 57 316 690 5860</h6>
                            </div>
                            <div className="text-center mx-auto">
                                <svg className="w-10 h-10 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                <h6 className="font-medium text-white">ventas@starlightelectronics.com</h6>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
  )
}
