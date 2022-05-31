import React, { useRef, useState } from 'react';

import logo_sle_white from '../../assets/img/content/logo-sle-white.png';
import { HoverHeader } from './HoverHeader';
import { ourMarkets } from '../../data/ourMarkets';
import { ourServices } from '../../data/ourServices';
import { HeaderMobile } from './HeaderMobile';

export const Header = ({ setPage = 'home' }) => {

	const [ showMenu, setShowMenu ] = useState( false );
	const menuMobile = useRef( null );
	const menuToogle = useRef( null );


	const handleClickMenu = () => {
		setShowMenu( !showMenu );
	}

	const handleInputHeader = ( e ) => {
		setPage( e.target.value );
		setShowMenu( !showMenu );
	}
	
	return (
		<header className="py-6">
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className='flex justify-items-center items-center'>
					<a href="/">
						<img src={ logo_sle_white } className="h-20" alt="logo starlight electronics" title='logo starlight electronics' />
					</a>
				</div>

				<div className="hidden md:flex space-x-4 lg:space-x-10 items-center">

					<HoverHeader title='Inicio' value='home' handleInputHeader={ handleInputHeader } />			
					<HoverHeader title='Nosotros' value='about' handleInputHeader={ handleInputHeader } />

					{/* Services and options dropdown */}
					<div className='relative hover-trigger'>
						<HoverHeader title='Servicios' value='our-services' handleInputHeader={ handleInputHeader } />
						<div className='absolute -left-36 w-96 flex text-center rounded-lg px-4 py-4 z-10 backdrop-blur-2xl bg-white/10 hover-target animate__animated animate__fadeIn'>
							{
								ourServices.map( (service, index) => {
									return (
										<HoverHeader
											key={ index }
											title={ service.title }
											value={ service.title }
											handleInputHeader={ handleInputHeader } />
									);
								})
							}
						</div>
					</div>

					{/* Services and options dropdown */}
					<div className='relative hover-trigger'>
						<HoverHeader title='Mercados' value='our-markets' handleInputHeader={ handleInputHeader } />
						<div className='absolute -left-1/4 text-center rounded-lg backdrop-blur-2xl bg-white/10 px-4 py-4 z-10 hover-target animate__animated animate__fadeIn'>
							{
								ourMarkets.map( (market, index) => {
									return (
										<HoverHeader
											key={ index }
											title={ market.title }
											value={ market.title }
											handleInputHeader={ handleInputHeader } />
									);
								})
							}
						</div>
					</div>
								
					<HoverHeader title='Galería' value='gallery' handleInputHeader={ handleInputHeader } />
					
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
					<div ref={ menuToogle } className='md:hidden text-white block p-5 font-bold'>
						<button onClick={ handleClickMenu }>
							<svg width="36" height="36" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
						</button>
					</div>

					{
						showMenu ? 
								<ul ref={ menuMobile } className={`mt-8 mobile_links w-full absolute z-50 left-0 text-center backdrop-blur-xl bg-white/2 animate__animated ${ showMenu ? 'animate__flipInX' : 'animate__flipOutX' } animate__faster`}>

									<HeaderMobile title={ 'Inicio' } value={ 'home' } handleInputHeader={ handleInputHeader } />
									<HeaderMobile title={ 'Nosotros' } value={ 'about' } handleInputHeader={ handleInputHeader } />
									

									<div className="accordion">
										<div className="accordion-item">
											<h2 className="accordion-header mb-0" id="headingOne">
												<button 
													className='accordion-button collapsed hover:scale-110 transition duration-200 hover:text-sky-500 font-bold w-full py-4 px-5 focus:outline-none'
													type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false"
													value='our-markets' >
													Servicios
												</button>
											</h2>
											<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
												<div className="accordion-body py-4 px-5 border border-y">
												<HeaderMobile title={ 'Todos' } value={ 'our-services' } handleInputHeader={ handleInputHeader } />
													{
														ourServices.map( (service, index) => {
															return (
																<HoverHeader
																	key={ index }
																	title={ service.title }
																	value={ service.title }
																	handleInputHeader={ handleInputHeader } />
															);
														})
													}
												</div>
											</div>
										</div>

										<div className="accordion-item">
											<h2 className="accordion-header mb-0" id="headingTwo">
												<button 
													className='accordion-button collapsed hover:scale-110 transition duration-200 hover:text-sky-500 font-bold w-full py-4 px-5 focus:outline-none'
													type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo" aria-expanded="false"
													value='our-markets' >
													Mercados
												</button>
											</h2>
											<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
												<div className="accordion-body py-4 px-5 border">
												<HeaderMobile title={ 'Todos' } value={ 'our-markets' } handleInputHeader={ handleInputHeader } />
													{
														ourMarkets.map( (market, index) => {
															return (
																<HoverHeader
																	key={ index }
																	title={ market.title }
																	value={ market.title }
																	handleInputHeader={ handleInputHeader } />
															);
														})
													}
												</div>
											</div>
										</div>
									</div>

			
									<HeaderMobile title={ 'Galería' } value={ 'gallery' } handleInputHeader={ handleInputHeader } />
			
									<li>
										<a href="#contact" className="my-4 inline-block rounded-full bg-sky-700 text-white font-bold px-4 py-3 hover:scale-110 hover:bg-sky-800 transition duration-500">
											<button 
												className='hover:scale-110 transition duration-200 hover:text-white font-bold'
												value='home'
												onClick={ handleInputHeader } >
												Contáctanos
											</button>
										</a>
									</li>
								</ul>        
						: null
					}
                </div>

			</div>
		</header>
		
	);
};
