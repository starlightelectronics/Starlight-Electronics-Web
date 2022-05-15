import { useState } from 'react';

import { Header } from './components/Header';
import { SideNavbar } from './components/SideNavbar';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { FormContact } from './components/FormContact';
import { Footer } from './components/Footer';
import { OurClients } from './components/OurClients';
import { SideSocialNetwork } from './components/SideSocialNetwork';

import updateListNavarSide from './helpers/updateList.js';

const App = () => {

	return (
		<>
			<SideSocialNetwork />
			
			<Header />

			<div className="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
				<div className="flex flex-wrap md:flex-nowrap">

					<SideNavbar />

					<Home />

				</div>
			</div>

				<Portfolio />

				<FormContact />

				<OurClients />

				<Footer />

		</>
	)
}

export default App
