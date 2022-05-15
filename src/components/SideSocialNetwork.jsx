import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';

export const SideSocialNetwork = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700'>
            <a
              className='flex justify-between items-center w-full mr-3 text-gray-300'
              target="_blank"
              href='https://wa.me/message/S5CMKVFJ7PDSM1'
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-theme'>
            <a
              className='flex justify-between items-center w-full mr-3 text-gray-300'
              target="_blank"
              href='https://www.facebook.com/StarlightElectronics'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700'>
            <a
              className='flex justify-between items-center w-full mr-3 text-gray-300'
              target="_blank"
              href='https://www.instagram.com/starlightelectronics/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-theme'>
            <a
              className='flex justify-between items-center w-full mr-3 text-gray-300'
              target="_blank"
              href='https://www.linkedin.com/in/starlight-electronics-s-a-s-421a2a190/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
  );
};


