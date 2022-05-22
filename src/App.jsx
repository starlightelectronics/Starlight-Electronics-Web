import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { SideNavbar } from './components/SideNavbar';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery';
import { FormContact } from './components/FormContact';
import { Footer } from './components/Footer';
import { OurClients } from './components/OurClients';
import { SideSocialNetwork } from './components/SideSocialNetwork';
import { AboutAs } from './components/AboutAs';
import { OurServices } from './components/OurServices';
import { OurMarkets } from './components/OurMarkets';

import updateListNavarSide from './helpers/updateList.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

	const [page, setPage] = useState('home');

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
	

	return (
		<>	

			<Header setPage={ setPage } />
			
			{
				page === 'home' ?
					<div data-aos="fade-up">
						<SideSocialNetwork />
					
						<div className="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
							<div className="flex flex-wrap md:flex-nowrap">

								<SideNavbar />
								<Home />

							</div>
						</div>
							<AboutAs />
							<FormContact />
							<OurClients />
							<Footer />
					</div>
				
				:

					page === 'gallery' ?
						<>
							<Gallery />
							<SideSocialNetwork />
						</>

				:

					page === 'services' ?
						<>
							<OurServices />
							<SideSocialNetwork />
						</>
				: 
					page === 'our-markets' ?
						<>
							<OurMarkets />
							<SideSocialNetwork />
						</>
				: null
					

			}
			
		</>
	)
}

export default App
