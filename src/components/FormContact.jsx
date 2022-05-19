import React from 'react'

import globalpositionwhite from '../assets/img/global-position-white.png';

export const FormContact = () => {

    return (
        <div className="container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-28 w-full">
            <section className="w-full">
                <h2 id="hire" className="secondary-title">Contáctanos</h2>
                <p className="section-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consectetur. </p>

                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 ">

                    <form className="space-y-10 mt-16" method="POST" name="contact" data-netlify="true" >
                        <div>
                            <label className="text-white block mb-2 text-xl font-bold">Nombre</label>
                            <input type="text" id="name" name="name" className="w-full border border-input-border bg-input px-4 py-4" placeholder='Your name' required />
                        </div>
                        <div>
                            <label className="text-white block mb-2 text-xl font-bold">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-input-border bg-input px-4 py-4" placeholder='example@starlight.com' required />
                        </div>
                        <div>
                            <label className="text-white block mb-2 text-xl font-bold">Mensaje</label>
                            <textarea type="text" id="message" name="message" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" required ></textarea>
                        </div>
                        <button type='submit' className="px-6 py-2 bg-theme text-white font-bold">Enviar</button>
                    </form>
                
                        <map name="globalposition">
                            <area shape="rect" coords="235,420,275,460" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                            <area shape="rect" coords="220,350,250,490" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                            <area shape="rect" coords="420,320,460,360" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                            <area shape="rect" coords="485,235,525,275" href="https://www.controlavllc.com/" alt="positionglobal" target="_blank" />
                        </map>
                        <img src={ globalpositionwhite } alt="logo2" className="w-4/4 md:w-2/4 md:absolute md:mt-5 right-0 -z-1 md:mr-10" useMap='#globalposition' />

                    <div className="mt-0 pb-5 sm:pb-16">

                        {/* <!-- Contact info --> */}
                        <div className='flex gap-4'>
                            <p className="text-secondary"> (571) 508 2646 </p>
                            <p className="text-secondary"> 313 690 5860 </p>
                        </div>
                        <a href="mailto:email@mydomain.com" className="text-secondary underline mt-3 block"> ventast@starlightelectronics.com </a>

                        {/* <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 mt-10 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                            <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
                        </div> */}

                    </div>
                    
                </div>

            </section>
        </div>
  )
}
