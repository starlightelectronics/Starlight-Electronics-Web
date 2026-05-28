import React from 'react';

export const PQRSModal = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-[#0a1628] border border-sky-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 flex flex-col"
                style={{ maxHeight: '90vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header del modal */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-sky-800">
                    <div>
                        <h3 className="text-white text-xl font-bold">PQRS</h3>
                        <p className="text-sky-400 text-sm mt-0.5">Reporte de Queja / Reclamo</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-sky-800 rounded-full p-2 transition duration-200"
                        aria-label="Cerrar"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Iframe del formulario de Google */}
                <div className="flex-1 overflow-hidden rounded-b-2xl">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeFBItpD_vGh-1dvIKIZmaRRlLIV_aBBL6MkzUIXwKm_na2RQ/viewform?embedded=true"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Formulario PQRS - Starlight Electronics"
                        className="bg-white rounded-b-2xl"
                    >
                        Cargando formulario…
                    </iframe>
                </div>
            </div>
        </div>
    );
};
