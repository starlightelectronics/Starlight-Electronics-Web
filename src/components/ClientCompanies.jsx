import React from 'react'

import client from '../assets/img/clients/logo_cav.png';

export const ClientCompanies = () => {

    
    return (

        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={client} alt="HTML icon" />
                    <p className='my-4'>AWS</p>
                </div>
            </div>
        </div>
    </div>

        // <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        // <section className="w-full">
        //     <h2 id="clients" className="secondary-title">Empresas que confian en nosotros</h2>
        //     <p className="section-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloremque alias deleniti impedit pariatur tempora quaerat!</p>

        //     {/* <!-- Clients --> */}
        //     <div className="space-y-12 my-16">
        //         <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    
        //             {/* <!-- Client logo --> */}
        //             <div className="mb-6 lg:mb-0">
        //                 <svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
        //             </div>

        //             {/* <!-- Client info --> */}
        //             <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
        //                 <h3 className="text-white text-3xl font-semibold">Apple, inc.</h3>
        //                 <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
        //                     <div className="badge">UI/UX</div>
        //                     <div className="badge">Software Engineer</div>
        //                 </div>

        //                 <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloremque alias deleniti impedit pariatur tempora quaerat!</p>
        //             </div>

        //         </div>
        //         <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    
        //             {/* <!-- Client logo --> */}
        //             <div className="mb-6 lg:mb-0">
        //                 <svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
        //             </div>

        //             {/* <!-- Client info --> */}
        //             <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
        //                 <h3 className="text-white text-3xl font-semibold">Apple, inc.</h3>

        //                 <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
        //                     <div className="badge">UI/UX</div>
        //                     <div className="badge">Software Engineer</div>
        //                 </div>

        //                 <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloremque alias deleniti impedit pariatur tempora quaerat!</p>
        //             </div>

        //         </div>
        //         <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    
        //             {/* <!-- Client logo --> */}
        //             <div className="mb-6 lg:mb-0">
        //                 <svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
        //             </div>

        //             {/* <!-- Client info --> */}
        //             <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
        //                 <h3 className="text-white text-3xl font-semibold">Apple, inc.</h3>

        //                 <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
        //                     <div className="badge">UI/UX</div>
        //                     <div className="badge">Software Engineer</div>
        //                 </div>

        //                 <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloremque alias deleniti impedit pariatur tempora quaerat!</p>
        //         </div>

        //         </div>
        //     </div>

        // </section>
        // </div>
    )
}
