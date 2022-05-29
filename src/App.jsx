import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { Home } from './components/Home';
import { AboutAs } from './components/About/AboutAs';
import { OurServices } from './components/OurServices';
import { OurMarkets } from './components/OurMarkets';
import { Gallery } from './components/Gallery';
import { OurClients } from './components/OurClients';
import { FormContact } from './components/FormContact';
import { TextInfo } from './components/About/TextInfo';
import { Footer } from './components/Footer';
import { ComponenteView } from './components/ComponenteView';
import { SideSocialNetwork } from './components/SideSocialNetwork';
// import { SideNavbar } from './components/SideNavbar';

// import updateListNavarSide from './helpers/updateList.js';

import { ourMarkets } from './data/ourMarkets';
import { ourServices } from './data/ourServices';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

	const [page, setPage] = useState('home');

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []); 

	const arraySearch = ourServices.concat(ourMarkets);

	return (
		<>	

			<Header setPage={ setPage } />
			
			{
				page === 'home' ?
					<div>
						<SideSocialNetwork />
						{/* <SideNavbar /> */}
					
						<div className="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-6 w-full">
							<div className="flex flex-wrap md:flex-nowrap" data-aos="fade-up">

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
					arraySearch.map(( market, index ) => {
							if ( page == market.title ) { 
								return (
									<div key={ index }>	
										<div className='body-uniquite'>
											<ComponenteView service={ market } index={ 1 } />
										</div>
										<SideSocialNetwork />
										<Footer />
									</div >
								)
							}
						})
					
				

			}
			
		</>
	)
}

export default App
