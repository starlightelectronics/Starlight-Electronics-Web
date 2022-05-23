import React from 'react'

import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
  } from 'react-icons/fa';

import avixamember from '../assets/img/content/avixamember.png';

export const Footer = () => {
    return (
            <footer className="text-gray-700 bg-white body-font mt-16">
                <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                    <a href="#" className="text-xl font-black leading-none text-gray-900 select-none logo"> Starlight Electronics </a>
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2022 - Todos los derechos reservados</p>
                    <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        
                        <a 
                            href="https://api.whatsapp.com/message/S5CMKVFJ7PDSM1?autoload=1&app_absent=0" 
                            className="text-gray-400 hover:text-gray-500"
                            target="_blank" >
                            <span className="sr-only">Whatsapp</span>
                            <FaWhatsapp size={30} />
                        </a>
                        
                        <a 
                            href="https://www.facebook.com/StarlightElectronics" 
                            className="text-gray-400 hover:text-gray-500"
                            target="_blank" >
                            <span className="sr-only">Facebook</span>
                            <FaFacebook size={30} />
                        </a>

                        <a 
                            href="https://www.instagram.com/starlightelectronics/" 
                            className="text-gray-400 hover:text-gray-500"
                            target="_blank" >
                            <span className="sr-only">Instagram</span>
                            <FaInstagram size={30} />
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/starlight-electronics-s-a-s-421a2a190/" 
                            className="text-gray-400 hover:text-gray-500"
                            target="_blank" >
                            <span className="sr-only">Linkedin</span>
                            <FaLinkedin size={30} />
                         </a>

                        <figure className='w-36 border-l ml-6'>
                            <img className='ml-3' src={ avixamember } alt="" />
                        </figure>

                    </span>
                </div>
            </footer>
    )
}
