import React from 'react'
import { ComponenteView } from './ComponenteView';
import { ourMarkets } from '../data/ourMarkets';


export const OurMarkets = () => {
    return (
        <div className='max-w-screen-xl 2xl:max-w-screen-4xl mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-0'>
            <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NUESTROS <span className='text-sky-600'>MERCADOS</span></h2>

                {
                    ourMarkets.map(( market, index ) => {
                        return (
                            <ComponenteView key={ index } service={ market } index={ index + 1 } />
                        )
                    })
                }

        </div>
    )
}
