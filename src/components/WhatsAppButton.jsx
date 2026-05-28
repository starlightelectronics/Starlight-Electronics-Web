import React, { useState } from 'react';

export const WhatsAppButton = () => {
    const [ hovered, setHovered ] = useState(false);
    const phone = '573173759475';
    const message = 'Hola! Me gustaría obtener más información sobre sus servicios.';
    const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <span className={`bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                ¡Escríbenos!
            </span>
            <a href={url} target={'_blank'} rel={'noopener noreferrer'} aria-label="WhatsApp" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30"></span>
                <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.847L.057 23.704a.75.75 0 00.941.941l5.857-1.469A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.355-.211-3.676.921.936-3.607-.23-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
            </a>
        </div>
    );
};
