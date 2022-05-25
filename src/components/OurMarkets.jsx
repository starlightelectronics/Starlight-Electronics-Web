import React from 'react'
import { Comercial } from './OurMarkets/Comercial'
import { Cruceros } from './OurMarkets/Cruceros'
import { Yates } from './OurMarkets/Yates'

export const OurMarkets = () => {
    return (
      <div className='max-w-screen-xl mx-auto sm:px-20 md:px-32 lg:px-0'>
        <h2 className="mt-16 mb-4 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NUESTROS <span className='text-sky-600'>MERCADOS</span></h2>

        <Cruceros />
        <hr />
        <Comercial />
        <hr />
        <Yates />

      </div>
    )
}
