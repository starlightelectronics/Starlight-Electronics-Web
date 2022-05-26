import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
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

// import updateListNavarSide from './helpers/updateList.js';

import { ourMarkets } from './data/ourMarkets';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { TextInfo } from './components/TextInfo';
import { ComponenteView } from './components/ComponenteView';

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
					<div>
						<SideSocialNetwork />
					
						<div className="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-6 w-full">
							<div className="flex flex-wrap md:flex-nowrap" data-aos="fade-up">

								<SideNavbar />
								<Home />

							</div>
						</div>
							<TextInfo />
							<FormContact />
							<OurClients />
							<Footer />
					</div>
				
				:

					page === 'about' ?
						<>
							<AboutAs />
							<SideSocialNetwork />
							<Footer />
						</>

				:

					page === 'gallery' ?
						<>
							<Gallery />
							<SideSocialNetwork />
							<Footer />
						</>

				:

					page === 'our-services' ?
						<>
							<OurServices />
							<SideSocialNetwork />
							<Footer />
						</>

				: 
					page === 'our-markets' ?
						<>
							<OurMarkets />
							<SideSocialNetwork />
							<Footer />
						</>

				: 
					ourMarkets.map(( market, index ) => {
						if ( page == market.title ) { 
							return (
								<>	
									<div className='body-uniquite'>
										<ComponenteView key={ index } service={ market } index={ 1 } />
									</div>
									<SideSocialNetwork />
									<Footer />
								</>
							)
						}
					})

			}
			
		</>
	)
}

export default App
