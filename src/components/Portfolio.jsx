import React from 'react'



export const Portfolio = () => {

    const sourceImage = 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';

    return (
       
        <div className="container mt-16 md:mt-52 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="work" className="secondary-title">Nuestros trabajos</h2>
                <p className="section-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloremque alias deleniti impedit pariatur tempora quaerat!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src={ sourceImage } className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover" />
                </div>
            </section>
        </div> 
            
    )
}
