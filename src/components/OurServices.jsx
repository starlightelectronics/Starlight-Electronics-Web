import React from 'react';
import { ComponenteView } from './ComponenteView';
import { Audio } from './OurServices/Audio';
import { ourServices } from '../data/ourServices';

export const OurServices = () => {
	return (
        <div className='max-w-screen-xl 2xl:max-w-screen-4xl mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-0'>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NUESTROS <span className='text-sky-600'>SERVICIOS</span></h2>
            <div className='flex flex-col justify-center items-center'>
                <a href="" target='_blank' >
                    <button type='submit' className="px-6 py-2 bg-theme text-white font-bold rounded-sm">Descargar Folleto</button>
                </a>
            </div>
            <Audio />
            {
                ourServices.map(( service, index ) => {
                    return (
                        <ComponenteView key={ index } service={ service } index={ index } />
                    )
                })
            }

        </div>
        
	);
};
