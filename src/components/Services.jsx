import { useState } from 'react'
import { Tab } from '@headlessui/react'

import imagen1 from '../assets/img/content/imagen1.webp'
import imagen2 from '../assets/img/content/imagen2.webp'
import imagen3 from '../assets/img/content/imagen3.webp'
import imagen4 from '../assets/img/content/imagen4.webp'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Services = () => {
  let [categories] = useState({
    Audio: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Video: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
    ],
    Eluminación: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  })

  return (
    <div className="w-full lg:mt-20 px-2 py-16 sm:px-32">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
        <div className="bg-white">
              <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Especificaciones técnicas</h2>
                  <p className="mt-4 text-gray-500">En la línea de audio manejamos excelentes marcas aliadas que nos ofrecen desempeño y control profesional, Las Bocinas de nuestros aliados cuentan con un diseño que se adapta a su aplicación, alineándose a los espacios.</p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Teatros</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Night-clubs</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Hoteles</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Restaurantes</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Piscinas</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">Clubes</dt>
                      <dd className="mt-2 text-sm text-gray-500">Texto de prueba, especificación y detaller técnicos de iluminación</dd>
                    </div>
                  </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                  <img src={ imagen1 } alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 rounded-lg" />
                  <img src={ imagen2 } alt="Top down view of walnut card tray with embedded magnets and card groove." className="bg-gray-100 rounded-lg" />
                  <img src={ imagen3 } alt="Side of walnut card tray with card groove and recessed card area." className="bg-gray-100 rounded-lg" />
                  <img src={ imagen4 } alt="Walnut card tray filled with cards and card angled in dedicated groove." className="bg-gray-100 rounded-lg" />
                </div>
              </div>
            </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
