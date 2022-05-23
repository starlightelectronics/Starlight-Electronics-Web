import React from 'react'

import design from '../../assets/img/gallery/img_7.webp';

export const DesignSystemBuilt = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <section className="py-20">
          <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
              <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ design } alt="feature image" /></div>
                  <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                      <div className="w-full lg:max-w-md mx-auto">
                          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">DISEÑO DEL SISTEMA - DISEÑO DE CONSTRUCCIÓN</h2>
                          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                            Tenemos experiencia en el diseño de sistemas que van
                            desde un solo lugar hasta todo el sistema de
                            entretenimiento para todo un barco o
                            edificio. Preparamos un paquete completo que puede
                            consistir en dibujos de diseño, instalación y dibujos de taller,
                            simulaciones y representaciones. Podemos colaborar sin
                            problemas con arquitectos, contratistas y vendedores
                            utilizando el software BIM y la tecnología basada en la
                            nube. 
                          </p>
                          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                            Tenemos experiencia específica en proyectos de diseño /
                            construcción trabajando con el cliente para definir sus
                            requisitos, determinar un presupuesto y realizar con éxito el
                            proyecto a tiempo, dentro del presupuesto y siempre
                            superando las expectativas.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
