import React from 'react';

import starlight from '../assets/img/logo-starlight.webp';

export const Header = ({ setPage = 'home' }) => {

	const handleInputHeader = (e) => {
		setPage( e.target.value );
		console.log(e.target.value);
	}

	return (
		<header className="py-6">
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className='flex justify-items-center items-center'>
					<img src={ starlight } alt="logo" className="h-12 mr-2" />
					<button className='text-xl font-bold' onClick={ handleInputHeader } value='home' >
						Starlight Electronics
					</button>
				</div>				

				<div className="hidden md:flex space-x-4 lg:space-x-10 items-center">
					<button 
						className='hover:text-white hover:scale-110 transition duration-200'
						value='services'
						onClick={ handleInputHeader } >
						Servicios
					</button>

					<button 
						className='hover:text-white hover:scale-110 transition duration-200'
						value='our-markets'
						onClick={ handleInputHeader } >
						Mercados
					</button>
					
					<button className='hover:scale-110 transition duration-200'>
						<a href="#work" className='hover:scale-110 transition duration-200 hover:text-white'>Portafolio</a>
					</button>
					
					<button 
						className='hover:scale-110 transition duration-200 hover:text-white'
						value='gallery'
						onClick={ handleInputHeader } >
						Galería
					</button>
					
					<button className='hover:scale-110 transition duration-200'>
						<a href="#nosotros" className='hover:scale-110 transition duration-200 hover:text-white'>Nosotros</a>
					</button>
					
					<a href="#hire"><button className="px-6 py-2 bg-theme font-bold hover:scale-110 transition duration-300 hover:bg-sky-800">Contáctanos</button></a>


					{/* Toggle for enable and disable the menu dark mode */}
					
					{/* <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
					</label> */}

				</div>
				
				<div className="md:hidden">
					<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
				</div>
			</div>
		</header>
		
	);
};
