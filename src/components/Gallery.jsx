import React from 'react'
import { RViewer, RViewerTrigger } from 'react-viewerjs'

import { images } from '../data/images'

export const Gallery = () => {

    return (

        <div className="container mt-16 md:mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate__animated animate__fadeIn">
            <section className="w-full">
                <h2 id="galeria" className="secondary-title">Nuestra <span className='text-sky-600'>galeria</span></h2>
                <p className="section-paragraph">
                    Brindamos servicios de automatización y soluciones de control en sistemas de
                    audio, video e iluminación o sistemas integrales que se adapten a mejorar la calidad de vida.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 images">
               
                    <RViewer imageUrls={ images }>
                        { 
                            images.map(( image, index ) => {
                                return (
                                    <RViewerTrigger index={ index } key={ index } >
                                        <img src={ image } className="cursor-pointer w-full bg-nav h-36 lg:h-72 object-cover hover:scale-110 transition duration-300" alt='Galeria de starlight electronics controlav' title='starlightelectronics' />
                                    </RViewerTrigger>
                                )
                            })
                        }
                    </RViewer>   
                  
                </div>
            </section>
        </div>

    )
}
