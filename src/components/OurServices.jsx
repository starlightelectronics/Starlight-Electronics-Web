import React from 'react';
import { ComponenteView } from './ComponenteView';
import { Audio } from './OurServices/Audio';
import { ourServices } from '../data/ourServices';

export const OurServices = () => {
	return (

        <div className='max-w-screen-xl mx-auto sm:px-20 md:px-32 lg:px-16'>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NUESTROS <span className='text-sky-600'>SERVICIOS</span></h2>
            
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
