import React, { useRef } from 'react';

import logo_sle_white from '../assets/img/content/logo-sle-white.png';
import { HoverHeader } from './HoverHeader';

export const Header = ({ setPage = 'home' }) => {

	// const mobile_links = useRef( null );
	// const mobile_menu = useRef( null );
	
	setTimeout(() => {
		
		const mobile_links = document.getElementById('mobile_links');
		const mobile_menu = document.getElementById('mobile_menu');

		mobile_links.style.setProperty('--animate-duration', '.4s');
		mobile_links.classList.add('animate__animated');

		mobile_menu.addEventListener('click', e => {
			
			console.log( 'Hola' );
			
			mobile_links.classList.toggle('hidden');

			if(mobile_links.classList.contains('hidden')) {

				mobile_links.classList.toggle('animate__flipOutX');
				mobile_links.classList.toggle('hidden');

			}else{

				mobile_links.classList.toggle('animate__flipInX');
				
			}
		});
	}, 500);

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
							<HoverHeader title={'Audio'}  value={'audio'} handleInputHeader={ handleInputHeader } />
							<HoverHeader title={'Video'}  value={'video'} handleInputHeader={ handleInputHeader } />
							<HoverHeader title={'Iluminación'}  value={'ilumination'} handleInputHeader={ handleInputHeader } />
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
							<HoverHeader title={'Cruceros'} value={'cruceros'} handleInputHeader={ handleInputHeader } />
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

				<div className="block lg:hidden w-1/5 lg:w-4/6">
					<a id='mobile_menu' href="#" className='md:hidden text-white block p-5 font-bold hover:text-yellow-500'>
						<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
					</a>
					<ul id='mobile_links' className="mobile_links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
                        <li><a href="#" className="text-white block p-5 font-bold hover:text-yellow-500">Home</a></li>
                        <li><a href="#" className="text-white block p-5 font-bold hover:text-yellow-500">Nosotros</a></li>
                        <li><a href="#" className="text-white block p-5 font-bold hover:text-yellow-500">Servicios</a></li>
						<li><a href="#" className="text-white block p-5 font-bold hover:text-yellow-500">Mercados</a></li>
						<li><a href="#" className="text-white block p-5 font-bold hover:text-yellow-500">Galería</a></li>
                        <li><a href="#" className="my-4 inline-block rounded-full bg-green-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500">Contáctanos</a></li>
                    </ul>        
                </div>
				
				{/* <div className="md:hidden">
					<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
				</div> */}
			</div>
		</header>
		
	);



};
