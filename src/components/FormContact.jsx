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
            </section>
        </div>
    )
}
