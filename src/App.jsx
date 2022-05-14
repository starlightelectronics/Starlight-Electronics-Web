import { useState } from 'react';

import { Header } from './components/Header';
import { SideNavbar } from './components/SideNavbar';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { ClientCompanies } from './components/ClientCompanies';
import { FormContact } from './components/FormContact';
import { Footer } from './components/Footer';
import { Services } from './components/Services';

const App = () => {
	
	return (
		<>
			<Header />

			<div className="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className="flex flex-wrap md:flex-nowrap">

					<SideNavbar />

					<Home />
				
				</div>
			</div>

				{/* <!-- Offer services --> */}
				<Services />

				{/* <!-- My work --> */}
				<Portfolio />


				{/* <!-- Clients --> */}
				<ClientCompanies />

				{/* <!-- Hire me --> */}
				<FormContact />

				<Footer />
		
		</>
	)
}

export default App
