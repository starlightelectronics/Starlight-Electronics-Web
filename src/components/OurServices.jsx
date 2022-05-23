import React from 'react';

import { Audio } from './OurServices/Audio';
import { Automatization } from './OurServices/Automatization';
import { CircuitsTelevision } from './OurServices/CircuitsTelevision';
import { DesignSystemBuilt } from './OurServices/DesignSystemBuilt';
import { HomeAutomation } from './OurServices/HomeAutomation';
import { Ilumination } from './OurServices/Ilumination';
import { InstallPrograms } from './OurServices/InstallPrograms';
import { InteractiveScreens } from './OurServices/InteractiveScreens';
import { Video } from './OurServices/Video';

export const OurServices = () => {
	return (

        <div className='max-w-screen-xl mx-auto sm:px-20 md:px-32 lg:px-16'>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NUESTROS <span className='text-sky-600'>SERVICIOS</span></h2>
            
            <Audio />
            <hr />
            <Automatization />
            <hr />
            <Video />
            <hr />
            <Ilumination />
            <hr />
            <DesignSystemBuilt />
            <hr />
            <HomeAutomation />
            <hr />
            <InstallPrograms />
            <hr />
            <InteractiveScreens />
            <hr />
            <CircuitsTelevision />

        </div>
        
	);
};
