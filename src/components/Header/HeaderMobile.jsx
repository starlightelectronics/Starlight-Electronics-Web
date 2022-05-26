import React from 'react';

export const HeaderMobile = ({ title, value, handleInputHeader }) => {
	return (
		<li>
            <a href="#" className="text-white block p-5 font-bold hover:text-sky-700">
                <button 
                    className='hover:scale-110 transition duration-200 hover:text-sky-700 font-bold'
                    value={ value }
                    onClick={ handleInputHeader } >
                    { title }
                </button>
            </a>
        </li>
	);
};
