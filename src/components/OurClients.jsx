import React from 'react'

import client1 from '../assets/img/clients/logo-american-cruise-lines.webp';
import client2 from '../assets/img/clients/logo-azamara-club-cruises.webp';
import client3 from '../assets/img/clients/logo-bolidt.webp';
import client4 from '../assets/img/clients/logo-carnival-cruises.webp';
import client5 from '../assets/img/clients/logo-cav.webp';
import client6 from '../assets/img/clients/logo-celebrity-cruises.webp';
// import client7 from '../assets/img/clients/logo-crystal-cruises.webp';
// import client8 from '../assets/img/clients/logo-ncl.webp';
// import client9 from '../assets/img/clients/logo-oceania-cruises.webp';
// import client10 from '../assets/img/clients/logo-princess-cruises.webp';
// import client11 from '../assets/img/clients/logo-regent.webp';
// import client12 from '../assets/img/clients/logo-royal-caribbean.webp';
// import client13 from '../assets/img/clients/logo-windstar.webp';

export const OurClients = () => {
    return (
        <>
            <section className="mt-10 pt-7 pb-14">
                <div className="container px-8 mx-auto sm:px-12 lg:px-20">
                    <h1 className="text-sm font-bold tracking-wide text-center uppercase mb-7 text-white">Nuestros clientes.</h1>
                    <div className="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                            <img src={ client1 } alt="Disney Plus" className="block object-contain h-12" />
                        </div>
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                            <img src={ client2 } alt="Google" className="block object-contain h-9" />
                        </div>
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                            <img src={ client3 } alt="Hubspot" className="block object-contain h-9" />
                        </div>
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                            <img src={ client4 } alt="Youtube" className="block object-contain h-7 lg:h-8" />
                        </div>
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
                            <img src={ client5 } alt="Slack" className="block object-contain h-9" />
                        </div>
                        <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
                            <img src={ client6 } alt="Shopify" className="block object-contain h-9" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
