import React from 'react'

import facebook from '../assets/img/icons/facebook.png'
import whatsapp from '../assets/img/icons/whatsapp.png'
import instagram from '../assets/img/icons/instagram.png'
import linkedin from '../assets/img/icons/linkedin.png'

export const Footer = () => {
    return (
            <footer className="text-gray-700 bg-white body-font mt-5">
                <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                    <a href="#" className="text-xl font-black leading-none text-gray-900 select-none logo"> Starlight Electronics <span className="text-indigo-600">.</span></a>
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2022 - Todos los derechos reservados</p>
                    <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Whatsapp</span>
                            <img src={ whatsapp }  className='w-6 h-6' alt="" />
                        </a>
                        
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <img src={ facebook }  className='w-6 h-6' alt="" />
                        </a>

                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <img src={ instagram }  className='w-6 h-6' alt="" />
                        </a>

                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Linkedin</span>
                            <img src={ linkedin }  className='w-6 h-6' alt="" />
                         </a>

                    </span>
                </div>
            </footer>
    )
}
