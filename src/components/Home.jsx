import React, { useEffect, useState } from 'react';

import img1 from '../assets/img/gallery/img_1.webp';
import img2 from '../assets/img/gallery/img_8.webp';
import img3 from '../assets/img/gallery/img_25.webp';
import img4 from '../assets/img/gallery/img_39.webp';
import img5 from '../assets/img/gallery/img_54.webp';

const bgImages = [ img1, img2, img3, img4, img5 ];

const phrases = [
    'Construyendo Soluciones',
    'Automatización de Audio',
    'Control de Iluminación',
    'Integración de Sistemas',
];

export const Home = ({ setPage }) => {

    const [ currentPhrase, setCurrentPhrase ] = useState(0);
    const [ displayed, setDisplayed ] = useState('');
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ charIndex, setCharIndex ] = useState(0);
    const [ currentImg, setCurrentImg ] = useState(0);
    const [ fade, setFade ] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImg(prev => (prev + 1) % bgImages.length);
                setFade(true);
            }, 600);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const phrase = phrases[currentPhrase];
        let timeout;
        if (!isDeleting && charIndex <= phrase.length) {
            setDisplayed(phrase.slice(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
        } else if (!isDeleting && charIndex > phrase.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex >= 0) {
            setDisplayed(phrase.slice(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
        } else if (isDeleting && charIndex < 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            setCharIndex(0);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentPhrase]);

    return (
        <>
            <div className="flex flex-wrap 4xl:mt-60 4xl:ml-60 lg:ml-20 justify-center sm:w-2/4 md:justify-start max-w-xl mt-0 md:my-28 animate__animated animate__fadeIn">

                {/* Badge */}
                <div className="w-full flex justify-center md:justify-start mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/50 border border-sky-700/50 text-sky-300 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                        ✦ ISO 9001:2015 Certificados
                    </span>
                </div>

                {/* Título animado */}
                <h1 id='home' className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left w-full min-h-[80px] md:min-h-[140px]">
                    <span className="text-white">{displayed}</span>
                    <span className="inline-block w-0.5 h-10 md:h-14 bg-sky-400 ml-1 animate-pulse align-middle"></span>
                </h1>

                {/* Subtítulo */}
                <p className="w-full text-center md:text-left text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
                    A su alcance — integramos audio, video, iluminación y automatización
                    para transformar espacios con tecnología de última generación.
                </p>

                {/* Botones */}
                <div className="w-full flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10">
                    <a href="#contact">
                        <button className="w-full sm:w-auto px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold flex items-center justify-center gap-3 hover:scale-105 transition duration-300 rounded-sm shadow-lg shadow-sky-900/40">
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                            </svg>
                            Comunícate
                        </button>
                    </a>
                    <button
                        className="w-full sm:w-auto px-8 py-4 border border-sky-600/60 hover:border-sky-400 text-sky-300 hover:text-white font-bold flex items-center justify-center gap-3 hover:scale-105 transition duration-300 rounded-sm hover:bg-sky-900/30"
                        onClick={() => setPage('our-services')}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Ver Servicios
                    </button>
                </div>

                {/* Stats */}
                <div className="w-full flex justify-center md:justify-start gap-8 mt-12 border-t border-white/10 pt-8">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold text-white">+9</div>
                        <div className="text-xs text-gray-400 mt-1">Años de experiencia</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold text-white">+500</div>
                        <div className="text-xs text-gray-400 mt-1">Proyectos</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold text-white">5</div>
                        <div className="text-xs text-gray-400 mt-1">Países</div>
                    </div>
                </div>

            </div>

            {/* Carrusel automático de fotos */}
            <div className="my-auto mt-12 sm:mt-auto 4xl:mt-20 relative" style={{minHeight: '400px', minWidth: '300px', marginLeft: 'auto', marginRight: '0'}}>
                { bgImages.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Proyecto Starlight ${i+1}`}
                        style={{
                            position: i === 0 ? 'relative' : 'absolute',
                            top: 0, left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            opacity: currentImg === i ? (fade ? 1 : 0) : 0,
                            transition: 'opacity 0.6s ease-in-out',
                        }}
                    />
                ))}

                {/* Indicadores */}
                <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10,
                }}>
                    { bgImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setFade(false); setTimeout(() => { setCurrentImg(i); setFade(true); }, 300); }}
                            style={{
                                width: currentImg === i ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '9999px',
                                background: currentImg === i ? '#38bdf8' : 'rgba(255,255,255,0.5)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
