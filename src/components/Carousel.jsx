import React from 'react';

// import imagen_1 from '../assets/img/gallery/img_2.webp';
// import imagen_2 from '../assets/img/gallery/img_3.webp';
// import imagen_3 from '../assets/img/gallery/img_36.webp';
// import imagen_4 from '../assets/img/gallery/img_1.webp';
// import imagen_5 from '../assets/img/gallery/img_35.webp';
// import imagen_6 from '../assets/img/gallery/img_53.webp';

		// <div className="client-item mx-5">
		// 	<img src={ imagen_1 } alt="clientes carousel" />
		// </div>,

export const Carousel = () => {

	const items = [
        <img src={ imagen_1 } alt="clientes carousel" />
	];

	return (
		<>
			{/* <AliceCarousel
				animationType="fadeout" 
				animationDuration={800}
				disableButtonsControls
				infinite
				items={[<img src={ imagen_1 } alt="clientes carousel" />]}
				mouseTracking
			/> */}
		</>
		
	);
};
