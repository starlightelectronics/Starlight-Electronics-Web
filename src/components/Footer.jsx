import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import avixamember from '../assets/img/content/avixamember.png';
import ISO9001 from '../assets/img/content/Bureau veritas.png';
import logo_sle_white from '../assets/img/content/logo-sle-white.png';

const mapBogota = "https://www.google.com/maps/place/STARLIGHT+ELECTRONICS/@4.6770998,-74.0527814,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b25f09168f7:0xeca1a3376e61515b!8m2!3d4.6770945!4d-74.0479105!16s%2Fg%2F11hz2qbxsm?entry=ttu";
const mapVillavicencio = "https://www.google.com/maps/place/STARLIGHT+ELECTRONICS/@4.1367998,-73.6430509,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3e2f02192e245b:0x7f17c9e48e5d3ed5!8m2!3d4.1367998!4d-73.6430509!16s%2Fg%2F11zcghn9jq?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";
export const Footer = () => {
  return (
    <footer className="bg-[#060d1f] border-t border-sky-900/30 mt-16 text-white">
      <div className="container mx-auto px-8 md:px-14 lg:px-24 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Columna 1 - Logo centrado + texto justificado + redes */}
          <div className="flex flex-col items-center text-center">
            <img src={logo_sle_white} alt="Starlight Electronics" className="h-20 mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
              Automatización y soluciones de control en audio, video e iluminación para mejorar la calidad de vida.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/people/Starlight-Electronics-SAS/61564271327740/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400/40 transition duration-200">
                <FaFacebook size={15} />
              </a>
              <a href="https://www.instagram.com/starlightelectronics/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/40 transition duration-200">
                <FaInstagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/104921825/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500/40 transition duration-200">
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>

          {/* Columna 2 - Oficinas */}
          <div className="flex flex-col items-center">
            <h4 className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-6 text-center">Oficinas</h4>
            <div className="flex flex-col gap-6 w-full">
              <a target="_blank" rel="noopener noreferrer" href={mapBogota} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sky-900/30 border border-sky-800/40 flex items-center justify-center shrink-0 group-hover:bg-sky-800/50 transition duration-200 mt-0.5">
                  <svg className="w-4 h-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm group-hover:text-sky-300 transition duration-200">Bogotá, Colombia</p>
                  <p className="text-gray-500 text-xs mt-0.5">Calle 93B N° 11A-44 Of. 403</p>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={mapVillavicencio} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sky-900/30 border border-sky-800/40 flex items-center justify-center shrink-0 group-hover:bg-sky-800/50 transition duration-200 mt-0.5">
                  <svg className="w-4 h-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm group-hover:text-sky-300 transition duration-200">Villavicencio, Meta</p>
                  <p className="text-gray-500 text-xs mt-0.5">Carrera 43C N° 16-27</p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="flex flex-col items-center">
            <h4 className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-6 text-center">Contacto</h4>
            <div className="flex flex-col gap-5 w-full">
              <a href="https://wa.me/573173759475" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sky-900/30 border border-sky-800/40 flex items-center justify-center shrink-0 group-hover:bg-sky-800/50 transition duration-200 mt-0.5">
                  <svg className="w-4 h-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm group-hover:text-sky-300 transition duration-200">+57 317 375 9475</p>
                  <p className="text-gray-500 text-xs mt-0.5">+57 316 690 5860</p>
                </div>
              </a>
              <a href="mailto:ventas@starlightelectronics.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sky-900/30 border border-sky-800/40 flex items-center justify-center shrink-0 group-hover:bg-sky-800/50 transition duration-200 mt-0.5">
                  <svg className="w-4 h-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm group-hover:text-sky-300 transition duration-200">ventas@starlightelectronics.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 4 - Certificaciones */}
          <div className="flex flex-col items-center">
            <h4 className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-6 text-center">Certificaciones</h4>
            <div className="flex flex-col gap-4 w-full items-center">
              <div className="flex items-center justify-center mx-auto" style={{height: '70px', width: '180px'}}>
                <img src={ISO9001} alt="ISO 9001:2015" className="max-h-14 max-w-full object-contain" />
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center justify-center w-full" style={{height: '80px'}}>
                <img src={avixamember} alt="Avixa Member" className="max-h-14 max-w-full object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-sky-900/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2026 Starlight Electronics SAS — Todos los derechos reservados</p>
          <p className="text-gray-600 text-xs">Bogotá · Villavicencio · Miami · Europa</p>
        </div>

      </div>
    </footer>
  );
};
