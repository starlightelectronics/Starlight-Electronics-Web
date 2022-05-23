import React from 'react';

import logo_sle_white from '../assets/img/content/logo-sle-white.png';

export const Header = ({ setPage = 'home' }) => {

	const handleInputHeader = (e) => {
		setPage( e.target.value );
		console.log(e.target.value);
	}

	return (
		<header className="py-6">
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className='flex justify-items-center items-center'>
					<a href="">
						<img src={ logo_sle_white } className="h-20" alt="logo starlight electronics" />
					</a>
				</div>

				<div className="hidden md:flex space-x-4 lg:space-x-10 items-center">
					<button 
						className='hover:scale-110 transition duration-200 hover:text-white font-bold'
						value='home'
						onClick={ handleInputHeader } >
						Inicio
					</button>
					
					<button 
						className='hover:text-white hover:scale-110 transition duration-200 font-bold'
						value='about'
						onClick={ handleInputHeader } >
						Nosotros
					</button>

					{/* Services and options dropdown */}
					<div className='relative hover-trigger'>
						<button 
							className='hover:text-white hover:scale-110 transition duration-200 font-bold'
							value='our-services'
							onClick={ handleInputHeader } >
							Servicios
						</button>
						<div className='absolute flex text-center rounded-lg backdrop-blur-sm bg-white/10 px-4 py-4 z-10 hover-target animate__animated animate__fadeIn'>
							<button 
								className='hover:text-white hover:scale-110 transition duration-200 font-bold'
								value='audio'
								onClick={ handleInputHeader } >
								Audio
							</button>
							<br />
							<button 
								className='hover:text-white hover:scale-110 transition duration-200 font-bold'
								value='video'
								onClick={ handleInputHeader } >
								Video
							</button>
							<button 
								className='hover:text-white hover:scale-110 transition duration-200 font-bold'
								value='ilumination'
								onClick={ handleInputHeader } >
								Iluminación
							</button>

						</div>

					</div>

					<div className='relative hover-trigger'>
						<button 
							className='hover:text-white hover:scale-110 transition duration-200 font-bold'
							value='our-markets'
							onClick={ handleInputHeader } >
							Mercados
						</button>
						<div className='absolute text-center rounded-lg backdrop-blur-sm bg-white/10 px-4 py-4 z-10 hover-target animate__animated animate__fadeIn'>
							<a href="#cruceros">
								<button 
									className='hover:text-white hover:scale-110 transition duration-200 font-bold'
									value='our-markets'
									onClick={ handleInputHeader } >
									Cruceros
								</button>
							</a>
							<a href="#comercial">
								<button 
									className='hover:text-white hover:scale-110 transition duration-200 font-bold'
									value='our-markets'
									onClick={ handleInputHeader } >
									Comercial
								</button>
							</a>
							<a href="#yates">
								<button 
									className='hover:text-white hover:scale-110 transition duration-200 font-bold'
									value='our-markets'
									onClick={ handleInputHeader } >
									Yates
								</button>
							</a>
						</div>

					</div>
					
					
					<button 
						className='hover:scale-110 transition duration-200 hover:text-white font-bold'
						value='gallery'
						onClick={ handleInputHeader } >
						Galería
					</button>
					
					<a href="#contact">
						<button 
							className="px-6 py-2 bg-theme font-bold hover:scale-110 transition duration-300 hover:bg-sky-800"
							value='home'
							onClick={ handleInputHeader } >
							Contáctanos
						</button>
					</a>


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
