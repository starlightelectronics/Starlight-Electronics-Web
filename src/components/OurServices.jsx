import React from 'react';

import audio from '../assets/img/content/audio.webp';
import { Audio } from './OurServices/Audio';
import { Automatization } from './OurServices/Automatization';

export const OurServices = () => {
	return (

        <div>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Nuestros <span className='text-sky-600'>servicios</span></h2>
            
            <Audio />
            <Automatization />

        </div>
        
	);
};
