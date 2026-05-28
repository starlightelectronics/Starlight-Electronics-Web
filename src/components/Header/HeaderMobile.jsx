import React from 'react';

export const HeaderMobile = ({ title, value, handleInputHeader }) => {
	return (
		<li>
            <button 
                className='text-white hover:scale-110 transition duration-200 hover:text-sky-400 font-bold w-full py-4'
                value={ value }
                onClick={ handleInputHeader } >
                { title }
            </button>
        </li>
	);
};
