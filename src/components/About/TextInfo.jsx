import React from 'react';

export const TextInfo = () => {
	return (
		<>            
            <section className="flex items-center justify-center mt-5 sm:mt-auto py-10 text-white sm:py-16 md:py-24 lg:py-32 animate__animated animate__fadeIn">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">

                    <div className="my-12 border-b border-gray-300 lg:my-14"></div>
                    <div className='grid gap-y-4 text-justify '>
                        <h3 className="text-gray-400 xl:text-xl" id='info'>
                            Brindamos a las compañías y clientes individuales servicios de <span className='text-white font-bold'>automatización</span> y soluciones de control en sistemas de <span className='text-white font-bold'>audio</span>, 
                            <span className='text-white font-bold'> video</span> e <span className='text-white font-bold'>iluminación</span> o <span className='text-white font-bold'>sistemas integrales</span> que se adapten a mejorar la calidad de vida, a través de los
                            avances tecnológicos, así mismo contribuimos en el desarrollo sostenible del planeta integrando eficiencia
                            energética en la prestación de nuestros servicios.
                        </h3>
                    </div>
                    <div className="my-12 border-b border-gray-300 lg:my-14"></div>
                    
                </div>
            </section>

        </>
	);
};
