import React, { useState } from 'react'
import logo from '../images/shopLogo.png'
import IconButtons from '../component/IconButtons'
import NavElements from '../component/NavElements'
import UpperNav from '../component/UpperNav'

export default function Navbar() {
    // State to manage dropdown visibility
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home'); // Default active link

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Icons render
    const notifications = [
        {
            iconPath: 'M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4',
            count: 0
        },
        {
            iconPath: 'M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z',
            count: 4
        },
        {
            iconPath: 'M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z',
            count: 13
        },
    ];

    // Define the nav links as an array of objects
    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'Shop', href: '#shop', id: 'shop' },
        { name: 'Products', href: '#products', id: 'products' },
        { name: 'Categories', href: '#categories', id: 'categories' },
        { name: 'Pages', href: '#pages', id: 'pages' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];


    // Handle setting the active link
    const handleLinkClick = (linkId) => {
        setActiveLink(linkId); // Set the clicked link as active
    };

    return (
        <div>
            <UpperNav className="hidden md:block" />
            <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* ======= Logo ====== */}
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-12" alt="Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Shofy.</span>
                    </a>

                    {/* ====== Search Input  ======= */}
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1" onClick={toggleDropdown}
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <div className="flex">
                                <div className="searchInput">
                                    <input
                                        type="text"
                                        id="search-navbar"
                                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search for Products..."
                                    />
                                </div>
                                <IconButtons notifications={notifications} />
                            </div>
                        </div>

                        {/* ======= Hamburger Menu ======= */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleDropdown}
                        // Toggle dropdown visibility on click
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* ======= Navbar + Mobile responsive ======= */}
                    <div className={`items-center justify-between ${isDropdownOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products..." />

                        </div>

                        {/* ======= Nabar ======== */}
                        <NavElements navLinks={navLinks} activeLink={activeLink} onLinkClick={handleLinkClick} />
                        <div className='md:hidden block'>
                            <IconButtons notifications={notifications} />
                            <UpperNav className="block" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

