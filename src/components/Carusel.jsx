import React from 'react'

import img_galeria_1 from '../assets/img/content/img-galeria-1.webp';
// import img_galeria_2 from '../assets/img/content/img-galeria-2.webp';
import img_galeria_3 from '../assets/img/content/img-galeria-3.webp';

export const Carusel = () => {
    return (
            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src={ img_galeria_1 }
                        className="block h-full"
                        alt="Wild Landscape"
                    />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={ img_galeria_1 }
                        className="block w-full"
                        alt="Camera"
                    />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={ img_galeria_3 }
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        // <div className="max-w-2xl mx-auto">

        // <div id="default-carousel" className="relative" data-carousel="static">
        //     {/* <!-- Carousel wrapper --> */}
        //     <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        //         {/* <!-- Item 1 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
        //             <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 2 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>
        //         {/* <!-- Item 3 --> */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>
        //     </div>
        //     {/* <!-- Slider indicators --> */}
        //     <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //     </div>
        //     {/* <!-- Slider controls --> */}
        //     <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        //         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        //             <span className="hidden">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        //         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        //             <span className="hidden">Next</span>
        //         </span>
        //     </button>
        // </div>

        // <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        // </div>

    )
}
