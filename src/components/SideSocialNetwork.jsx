import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

export const SideSocialNetwork = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
      <div className='hidden lg:flex fixed flex-col top-[35%] right-[-100px]  animate__animated animate__bounceInRight z-10'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:ml-[-100px] ml-[0px] duration-300 bg-sky-700'>
            <a
              className='flex justify-between items-center w-full mr-3 ml-3 text-gray-300'
              target="_blank"
              href='https://wa.me/message/S5CMKVFJ7PDSM1'
            >
             <FaWhatsapp size={30} /> Whatsapp 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:ml-[-100px] ml-[-0px] duration-300 bg-theme'>
            <a
              className='flex justify-between items-center w-full mr-3 ml-3 text-gray-300'
              target="_blank"
              href='https://www.facebook.com/StarlightElectronics'
            >
              <FaFacebook size={30} /> Facebook 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:ml-[-100px] ml-[-0px] duration-300 bg-sky-700'>
            <a
              className='flex justify-between items-center w-full mr-3 ml-3 text-gray-300'
              target="_blank"
              href='https://www.instagram.com/starlightelectronics/'
            >
              <FaInstagram size={30} /> Instagram 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:ml-[-100px] ml-[-0px] duration-300 bg-theme'>
            <a
              className='flex justify-between items-center w-full mr-3 ml-3 text-gray-300'
              target="_blank"
              href='https://www.linkedin.com/in/starlight-electronics-s-a-s-421a2a190/'
            >
              <FaLinkedin size={30} /> LinkedIn 
            </a>
          </li>
        </ul>
      </div>
  );
};


