import React from 'react'

import img_galeria_1 from '../assets/img/content/img-galeria-1.webp';
import img_galeria_3 from '../assets/img/content/img-galeria-3.webp';

export const Carusel = () => {
    return (
            <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
                <div className="carousel-inner relative max-w-screen-lg overflow-hidden rounded-lg">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src={ img_galeria_1 }
                        className="block w-full"
                        alt="Wild Landscape"
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
    )
}
