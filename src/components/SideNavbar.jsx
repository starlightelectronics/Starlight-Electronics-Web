import React from 'react';

export const SideNavbar = () => {

	return (
            
            <nav className="md:inline-block lg:mr-24 lg:w-2 fixed left-percentage hidden xl:block">
                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Servicios</span>
                    </a>
                    <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Portafolio</span>
                    </a>
                    <a href="#clients" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Nosotros</span>
                    </a>
                    <a href="#hire" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contáctanos</span>
                    </a>
                </div>
			</nav>
    )
};
