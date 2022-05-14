import React from 'react'

import logo from '../assets/img/logo3.png';

export const Footer = () => {
    return (
        <footer className="p-4 mt-10 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0">
                    <img src={ logo } className="mr-3 h-8" alt="logo Starlight Electronics" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Starlight Electronics</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a className="hover:underline">Starlight Electronics</a>. All Rights Reserved.
            </span>
        </footer>
    )
}
