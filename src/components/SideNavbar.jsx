import React from 'react';

export const SideNavbar = () => {

	return (
            <>
                <nav className="align-middle md:inline-block lg:mr-24 lg:w-2 fixed left-percentage hidden xl:block">
                    <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                        <a href="#home" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                        </a>
                        <a href="#info" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Nosotros</span>
                        </a>
                        <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contacto</span>
                        </a>
                    </div>
                </nav>
            </>
    )
};
