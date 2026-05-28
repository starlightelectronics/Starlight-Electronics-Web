import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

import avixamember from '../assets/img/content/3avixamember.png';
import ISO9001 from '../assets/img/content/Bureau veritas.png';
import logo_sle_white from '../assets/img/content/logo-sle-white.png';

export const Footer = () => {
  return (
    <footer className="bg-[#060d1f] border-t border-sky-900/30 mt-16 text-white">
      <div className="container mx-auto px-8 md:px-14 lg:px-24 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Columna 1 - Logo y descripción */}
          <div className="lg:col-span-1">
            <img src={ logo_sle_white } alt="Starlight Electronics" className="h-20 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatización y soluciones de control en audio, video e iluminación para mejorar la calidad de vida.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img src={ ISO9001 } alt="ISO 9001:2015" className="h-10 opacity-80" />
              <img src={ avixamember } alt="Avixa Member" className="h-10 opacity-80" />
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-sky-400">Servicios</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Amplificación de audio</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Difusión de video</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Iluminación</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Control y automatización</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Domótica</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Video walls</li>
            </ul>
          </div>

          {/* Columna 3 - Mercados */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-sky-400">Mercados</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Cruceros</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Comercial</li>
              <li className="hover:text-sky-300 transition duration-200 cursor-pointer">Yates</li>
            </ul>

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 mt-8 text-sky-400">Presencia</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>🇨🇴 Bogotá & Villavicencio</li>
              <li>🇺🇸 Miami, Florida</li>
              <li>🇪🇸 Totana, España</li>
              <li>🇫🇮 Turku, Finlandia</li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 text-sky-400">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ventas@starlightelectronics.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.847L.057 23.704a.75.75 0 00.941.941l5.857-1.469A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.355-.211-3.676.921.936-3.607-.23-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                +57 317 375 9475
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.847L.057 23.704a.75.75 0 00.941.941l5.857-1.469A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.355-.211-3.676.921.936-3.607-.23-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                +57 316 690 5860
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/573173759475" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-200">
                <FaWhatsapp size={22} />
              </a>
              <a href="https://www.facebook.com/people/Starlight-Electronics-SAS/61564271327740/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition duration-200">
                <FaFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/starlightelectronics/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-200">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/company/104921825/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition duration-200">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria y copyright */}
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
