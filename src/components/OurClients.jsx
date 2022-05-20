import React from 'react'

import client1 from '../assets/img/clients/logo-american-cruise-lines.webp';
import client2 from '../assets/img/clients/logo-azamara-club-cruises.webp';
import client3 from '../assets/img/clients/logo-bolidt.webp';
import client4 from '../assets/img/clients/logo-carnival-cruises.webp';
import client5 from '../assets/img/clients/logo-cav.webp';
import client6 from '../assets/img/clients/logo-celebrity-cruises.webp';
import client7 from '../assets/img/clients/logo-crystal-cruises.webp';
import client8 from '../assets/img/clients/logo-ncl.webp';
// import client9 from '../assets/img/clients/logo-oceania-cruises.webp';
// import client10 from '../assets/img/clients/logo-princess-cruises.webp';
// import client11 from '../assets/img/clients/logo-regent.webp';
// import client12 from '../assets/img/clients/logo-royal-caribbean.webp';
// import client13 from '../assets/img/clients/logo-windstar.webp';

export const OurClients = () => {
    return (
        <div className='mx-20'>
            <h2 id="galeria" className="secondary-title sm:ml-5">Nuestros <span className='text-sky-600'>clientes</span></h2>
            <div className="p-5 pt-1 flex-wrap flex items-center gap-3 justify-center">
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client1 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client2 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client8 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client4 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client5 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client6 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
                <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                    <div className="md:p-7 p-4 flex items-center justify-center">
                        <img src={ client7 } alt="Disney Plus" className="block object-contain h-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}
