import React, { useRef, useState, useEffect } from 'react';

import logo_sle_white from '../../assets/img/content/logo-sle-white.png';
import { HoverHeader } from './HoverHeader';
import { ourMarkets } from '../../data/ourMarkets';
import { ourServices } from '../../data/ourServices';
import { HeaderMobile } from './HeaderMobile';
import { PQRSModal } from '../PQRSModal';

export const Header = ({ setPage = 'home' }) => {

	const [ showMenu, setShowMenu ] = useState( false );
	const [ showContactDropdown, setShowContactDropdown ] = useState( false );
	const [ showMarketsDropdown, setShowMarketsDropdown ] = useState( false );
	const [ showMobileServices, setShowMobileServices ] = useState( false );
	const [ showMobileMarkets, setShowMobileMarkets ] = useState( false );
	const [ showPQRS, setShowPQRS ] = useState( false );
	const [ activePage, setActivePage ] = useState( 'home' );
	const [ scrolled, setScrolled ] = useState( false );
	const menuMobile = useRef( null );
	const menuToogle = useRef( null );

	useEffect(() => {
		const handleScroll = () => {
			setScrolled( window.scrollY > 50 );
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const closeAllDropdowns = () => {
		setShowContactDropdown(false);
		setShowMarketsDropdown(false);
	}

	const handleClickMenu = () => {
		setShowMenu( !showMenu );
	}

	const handleInputHeader = ( e ) => {
		setPage( e.target.value );
		setActivePage( e.target.value );
		setShowMenu( false );
		closeAllDropdowns();
		scrollToTop();
	}

	const handleMarketsClick = (e) => {
		e.preventDefault();
		setShowContactDropdown(false);
		setActivePage('');
		setShowMarketsDropdown( !showMarketsDropdown );
	}

	const handleContactClick = (e) => {
		e.preventDefault();
		setShowMarketsDropdown(false);
		setActivePage('');
		setShowContactDropdown( !showContactDropdown );
	}

	const handleContactOptionClick = (option) => {
		closeAllDropdowns();
		if (option === 'contacto') {
			setPage('home');
			setActivePage('home');
			scrollToTop();
			setTimeout(() => {
				document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
			}, 300);
		} else if (option === 'pqrs') {
			setShowPQRS(true);
		}
	}

	return (
		<>
		<header className={`py-4 fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#060d1f]/95 backdrop-blur-md shadow-lg shadow-black/30 py-2' : 'bg-transparent'}`}>
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className='flex justify-items-center items-center'>
					<a href="/">
						<img src={ logo_sle_white } className={`transition-all duration-300 ${scrolled ? 'h-16' : 'h-28'}`} alt="logo starlight electronics" title='logo starlight electronics' />
					</a>
				</div>

				<div className="hidden md:flex space-x-4 lg:space-x-10 items-center">

					<HoverHeader title='Inicio' value='home' handleInputHeader={ handleInputHeader } activePage={ activePage } />
					<HoverHeader title='Nosotros' value='about' handleInputHeader={ handleInputHeader } activePage={ activePage } />

					{/* Servicios - directo a la página */}
					<button
						className={`px-4 py-2 font-bold hover:scale-110 transition duration-300 ${activePage === 'our-services' ? 'bg-theme' : ''}`}
						onClick={() => handleInputHeader({ target: { value: 'our-services' } })}
					>
						Servicios
					</button>

					{/* Mercados dropdown */}
					<div className="relative">
						<button
							className={`px-4 py-2 font-bold hover:scale-110 transition duration-300 flex items-center gap-2 ${showMarketsDropdown ? 'bg-theme' : ''}`}
							onClick={ handleMarketsClick }
						>
							Mercados
							<svg className={`w-4 h-4 transition-transform duration-200 ${showMarketsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{ showMarketsDropdown && (
							<div className="absolute left-0 mt-2 w-48 rounded-lg backdrop-blur-2xl bg-[#0a1628]/95 border border-sky-800 shadow-xl z-50 py-1">
								{ ourMarkets.map( (market, index) => (
									<>
										<button
											key={ index }
											className="w-full text-left px-5 py-2 text-white font-semibold hover:bg-sky-800/50 hover:text-sky-300 transition duration-200"
											onMouseDown={() => { handleInputHeader({ target: { value: market.title } }); }}
										>
											{ market.title }
										</button>
										{ index < ourMarkets.length - 1 && <div className="border-t border-sky-800/40 mx-3" /> }
									</>
								))}
							</div>
						)}
					</div>

					<HoverHeader title='Galería' value='gallery' handleInputHeader={ handleInputHeader } activePage={ activePage } />

					{/* Contáctanos dropdown */}
					<div className="relative">
						<button
							className={`px-4 py-2 font-bold hover:scale-110 transition duration-300 flex items-center gap-2 ${showContactDropdown ? 'bg-theme' : ''}`}
							onClick={ handleContactClick }
						>
							Contáctanos
							<svg className={`w-4 h-4 transition-transform duration-200 ${showContactDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{ showContactDropdown && (
							<div className="absolute right-0 mt-2 w-52 rounded-lg backdrop-blur-2xl bg-[#0a1628]/95 border border-sky-800 shadow-xl z-50">
								<button
									className="w-full text-left px-5 py-3 text-white font-semibold hover:bg-sky-800/50 hover:text-sky-300 transition duration-200 flex items-center gap-3 rounded-t-lg"
									onMouseDown={() => handleContactOptionClick('contacto')}
								>
									<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									Contáctanos
								</button>
								<div className="border-t border-sky-800/50" />
								<button
									className="w-full text-left px-5 py-3 text-white font-semibold hover:bg-sky-800/50 hover:text-sky-300 transition duration-200 flex items-center gap-3 rounded-b-lg"
									onMouseDown={() => handleContactOptionClick('pqrs')}
								>
									<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
									PQRS
								</button>
							</div>
						)}
					</div>

				</div>

				{/* MENÚ MOBILE */}
				<div className="block lg:hidden w-1/5 lg:w-4/6">
					<div ref={ menuToogle } className='md:hidden text-white block p-5 font-bold'>
						<button onClick={ handleClickMenu }>
							<svg width="36" height="36" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
						</button>
					</div>

					{ showMenu && (
						<ul ref={ menuMobile } className="mt-8 mobile_links w-full absolute z-50 left-0 text-center backdrop-blur-xl bg-white/2 animate__animated animate__flipInX animate__faster">

							<HeaderMobile title='Inicio' value='home' handleInputHeader={ handleInputHeader } />
							<HeaderMobile title='Nosotros' value='about' handleInputHeader={ handleInputHeader } />

							{/* Servicios mobile - directo */}
							<li>
								<button
									className='text-white hover:scale-110 transition duration-200 hover:text-sky-400 font-bold w-full py-4'
									onClick={() => handleInputHeader({ target: { value: 'our-services' } })}
								>
									Servicios
								</button>
							</li>

							{/* Mercados mobile */}
							<li>
								<button
									className='text-white hover:scale-110 transition duration-200 hover:text-sky-400 font-bold w-full py-4 flex items-center justify-center gap-2'
									onClick={() => { setShowMobileMarkets(!showMobileMarkets); setShowMobileServices(false); }}
								>
									Mercados
									<svg className={`w-4 h-4 transition-transform duration-200 ${showMobileMarkets ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</button>
								{ showMobileMarkets && (
									<div className="bg-white/5 py-2 border-t border-b border-sky-800/30">
										<HeaderMobile title='Todos' value='our-markets' handleInputHeader={ handleInputHeader } />
										{ ourMarkets.map( (market, index) => (
											<HeaderMobile key={ index } title={ market.title } value={ market.title } handleInputHeader={ handleInputHeader } />
										))}
									</div>
								)}
							</li>

							<HeaderMobile title='Galería' value='gallery' handleInputHeader={ handleInputHeader } />

							<li>
								<button
									className='text-white hover:scale-110 transition duration-200 hover:text-sky-400 font-bold w-full py-4'
									onClick={() => { handleInputHeader({ target: { value: 'home' } }); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 300); }}
								>
									Contáctanos
								</button>
							</li>

							<li className="pb-4">
								<button
									className='text-white hover:scale-110 transition duration-200 hover:text-sky-400 font-bold w-full py-4'
									onClick={() => { setShowMenu(false); setShowPQRS(true); }}
								>
									PQRS
								</button>
							</li>

						</ul>
					)}
				</div>

			</div>
		</header>

		{/* Spacer para compensar el header fixed */}
		<div className="h-28" />

		{ showPQRS && <PQRSModal onClose={ () => setShowPQRS(false) } /> }
		</>
	);
};
