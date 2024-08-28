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
              href='https://wa.me/573173759475'
            >
             <FaWhatsapp size={30} /> Whatsapp 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:ml-[-100px] ml-[-0px] duration-300 bg-theme'>
            <a
              className='flex justify-between items-center w-full mr-3 ml-3 text-gray-300'
              target="_blank"
              href='https://www.facebook.com/people/Starlight-Electronics-SAS/61564271327740/?mibextid=LQQJ4d&rdid=SxbKmK42KqpeAEWG&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252FRhdx78MpajhnHD6B%252F%253Fmibextid%253DLQQJ4d&checkpoint_src=any '
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
              href='https://www.linkedin.com/company/104921825/admin/dashboard/'
            >
              <FaLinkedin size={30} /> LinkedIn 
            </a>
          </li>
        </ul>
      </div>
  );
};


