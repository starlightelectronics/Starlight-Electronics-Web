import React from 'react';

import logo1 from '../assets/img/logo1.png';

export const Header = () => {
	return (
		
		<header className="py-6">
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className='flex justify-items-center items-center'>
					<img src={logo1} alt="logo" className="h-12 mr-2" />
					<div className="text-lg font-bold">Starlight Electronics</div>
				</div>				

				<div className="hidden md:flex space-x-12 items-center">
					<a href="#" className="text-selected-text">Servicios</a>
					<a href="#work">Portafolio</a>
					<a href="#clients">Nosotros</a>
					<a href="#hire"><button className="px-6 py-2 bg-theme font-bold">Contáctanos</button></a>

					<label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
					</label>

				</div>
				
				<div className="md:hidden">
					<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
				</div>
			</div>
		</header>
		
	);
};
