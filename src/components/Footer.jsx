import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import avixamember from '../assets/img/content/3avixamember.png';
import ISO9001 from '../assets/img/content/Bureau veritas.png';
import logo_sle_white from '../assets/img/content/logo-sle-white.png';

export const Footer = () => {
  return (
    <footer className="bg-[#060d1f] border-t border-sky-900/30 mt-16 text-white">
      <div className="container mx-auto px-8 md:px-14 lg:px-24 py-14">

        {/* Bloque de ubicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-sky-900/30">
          <div className="text-center">
            <a target='_blank' rel="noopener noreferrer" href="https://www.google.es/maps/place/Starlight+Electronics/@4.2718596,-73.4873487,17z">
              <svg className="w-8 h-8 text-sky-500 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
            </a>
            <p className="text-white font-medium text-sm">Barrio Buque, Villavicencio-Meta</p>
            <p className="text-gray-400 text-sm">Carrera 43C N° 16-27</p>
          </div>
          <div className="text-center">
            <a target='_blank' rel="noopener noreferrer" href="https://www.google.es/maps/place/STARLIGHT+ELECTRONICS/@4.6799303,-74.0502013,17z">
              <svg className="w-8 h-8 text-sky-500 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
            </a>
            <p className="text-white font-medium text-sm">Bogotá - Colombia</p>
            <p className="text-gray-400 text-sm">Calle 93B N° 11A-44 Of. 403</p>
          </div>
          <div className="text-center">
            <a target='_blank' rel="noopener noreferrer" href="https://wa.me/573173759475">
              <svg className="w-8 h-8 text-sky-500 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
            </a>
            <p className="text-white font-medium text-sm">+ 57 317 375 9475</p>
            <p className="text-gray-400 text-sm">+ 57 316 690 5860</p>
          </div>
          <div className="text-center">
            <a href="mailto:ventas@starlightelectronics.com">
              <svg className="w-8 h-8 text-sky-500 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <p className="text-white font-medium text-sm">ventas@starlightelectronics.com</p>
          </div>
        </div>

        {/* Fila principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Columna 1 - Logo y descripción */}
          <div>
            <img src={ logo_sle_white } alt="Starlight Electronics" className="h-20 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatización y soluciones de control en audio, video e iluminación para mejorar la calidad de vida.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/573173759475" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-200"><FaWhatsapp size={22} /></a>
              <a href="https://www.facebook.com/people/Starlight-Electronics-SAS/61564271327740/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition duration-200"><FaFacebook size={22} /></a>
              <a href="https://www.instagram.com/starlightelectronics/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-200"><FaInstagram size={22} /></a>
              <a href="https://www.linkedin.com/company/104921825/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition duration-200"><FaLinkedin size={22} /></a>
            </div>
          </div>

          {/* Columna 2 - Presencia global */}
          <div>
            <h4 className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-5">Presencia Global</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>🇨🇴 Bogotá &amp; Villavicencio, Colombia</li>
              <li>🇺🇸 Miami, Florida</li>
              <li>🇪🇸 Totana, España</li>
              <li>🇫🇮 Turku, Finlandia</li>
            </ul>
          </div>

          {/* Columna 3 - Certificaciones */}
          <div>
            <h4 className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-5">Certificaciones</h4>
            <div className="flex flex-col gap-4">
              <img src={ ISO9001 } alt="ISO 9001:2015" className="h-14 object-contain" style={{filter: 'brightness(1.2)'}} />
              <img src={ avixamember } alt="Avixa Member" className="h-14 object-contain" style={{filter: 'brightness(1.5)'}} />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-sky-900/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Starlight Electronics SAS — Todos los derechos reservados
          </p>
          <p className="text-gray-600 text-xs text-center">
            Bogotá, Colombia · Miami, Florida · Europa
          </p>
        </div>

      </div>
    </footer>
  );
};
