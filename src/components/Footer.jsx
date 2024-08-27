import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

import avixamember from '../assets/img/content/3avixamember.png';
import incontec from '../assets/img/content/incontec.png';

export const Footer = () => {
  return (
    <footer className="text-gray-700 bg-white mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <a href="#" className="text-xl font-black leading-none text-gray-900 select-none logo uppercase"> Starlight Electronics </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2022 - Todos los derechos reservados</p>
          <div className="flex items-center mt-4 space-x-5 sm:ml-auto sm:mt-0">
            <a
              href="https://api.whatsapp.com/message/S5CMKVFJ7PDSM1?autoload=1&app_absent=0"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Whatsapp</span>
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.facebook.com/StarlightElectronics"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/starlightelectronics/"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/starlight-electronics-s-a-s-421a2a190/"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="flex items-center mt-4 space-x-5 sm:ml-6">
            <figure className='w-36'>
              <img className='ml-3' src={avixamember} alt="Avixamember con starlightelectronics" title='Avixamember con Starlight Electronics' style={{ maxWidth: '100%' }} />
            </figure>
            <figure className='w-36'>
              <img className='ml-3' src={incontec} alt="Incontec con starlightelectronics" title='Incontec con Starlight Electronics' style={{ maxWidth: '100%' }} />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};
