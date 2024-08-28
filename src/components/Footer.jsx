import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

import avixamember from '../assets/img/content/3avixamember.png';
import ISO9001 from '../assets/img/content/ISO90012015.png';

export const Footer = () => {
  return (
    <footer className="text-gray-700 bg-white mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <a href="#" className="text-xl font-black leading-none text-gray-900 select-none logo uppercase"> Starlight Electronics </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2022 - Todos los derechos reservados</p>
          <div className="flex items-center mt-4 space-x-5 sm:ml-auto sm:mt-0">
            <a
              href="https://wa.me/573173759475"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Whatsapp</span>
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.facebook.com/people/Starlight-Electronics-SAS/61564271327740/?mibextid=LQQJ4d&rdid=SxbKmK42KqpeAEWG&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252FRhdx78MpajhnHD6B%252F%253Fmibextid%253DLQQJ4d&checkpoint_src=any "
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
              href="https://www.linkedin.com/company/104921825/admin/dashboard/"
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
              <img className='ml-3' src={ISO9001} alt="ISO-9001-2015" title='ISO-9001-2015' style={{ maxWidth: '100%' }} />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};

