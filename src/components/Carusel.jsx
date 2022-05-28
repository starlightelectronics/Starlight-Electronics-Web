import React from 'react'

import imagen_1 from '../assets/img/gallery/img_1.webp';
import imagen_2 from '../assets/img/gallery/img_36.webp';
import imagen_3 from '../assets/img/gallery/img_3.webp';
import imagen_4 from '../assets/img/gallery/img_35.webp';
import imagen_5 from '../assets/img/gallery/img_2.webp';
import imagen_6 from '../assets/img/gallery/img_53.webp';

export const Carusel = () => {
    return (
            <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
                <div className="carousel-inner relative max-w-screen-lg overflow-hidden rounded-lg">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={ imagen_5 }
                            className="block w-full"
                            alt="starlightelectronics"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={ imagen_3 }
                            className="block w-full"
                            alt="starlight electronics"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={ imagen_2 }
                            className="block w-full"
                            alt="starlightelectronics"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={ imagen_1 }
                            className="block w-full"
                            alt="starlight electronics"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={ imagen_4 }
                            className="block w-full"
                            alt="starlightelectronics"
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={ imagen_6 }
                            className="block w-full"
                            alt="starlight electronics"
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
