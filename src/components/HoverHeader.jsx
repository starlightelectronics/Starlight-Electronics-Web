import React from 'react';

export const HoverHeader = ({ title, value, handleInputHeader }) => {
	return (
        <>
            <button 
                className='hover:text-white hover:scale-110 transition duration-200 font-bold'
                value={ value }
                onClick={ handleInputHeader } >
                { title }
            </button>
            <br />
        </>
	);
};
