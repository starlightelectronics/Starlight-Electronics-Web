import React from 'react';

export const HoverHeader = ({ title, value, handleInputHeader, activePage }) => {
	return (
        <>
            <button 
                className={`px-4 py-2 font-bold hover:scale-110 transition duration-200 ${activePage === value ? 'bg-theme' : ''}`}
                value={ value }
                onClick={ handleInputHeader } >
                { title }
            </button>
        </>
	);
};
