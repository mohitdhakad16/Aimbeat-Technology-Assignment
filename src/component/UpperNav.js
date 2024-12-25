import React, { useState } from 'react';

export default function UpperNav() {
    // State to store selected language
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedCurrency, setselectedCurrency] = useState('£GBP');
    const [selectedSetting, setselectedSetting] = useState('Settings');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
    const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);

    // Function to handle language change
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false); // Close the dropdown after selecting a language
    };

    // Function to handle currency change
    const handleCurrencyChange = (currency) => {
        setselectedCurrency(currency);
        setIsCurrencyDropdownOpen(false); // Close the dropdown after selecting a currency
    };

    // Function to handle setting change
    const handleSettingChange = (setting) => {
        setselectedSetting(setting);
        setIsSettingDropdownOpen(false); // Close the dropdown after selecting a setting
    };

    // Function to toggle Language dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to toggle Currency dropdown visibility
    const toggleDropdownCurrency = () => {
        setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
    };

    // Function to toggle setting dropdown visibility
    const toggleDropdownSetting = () => {
        setIsSettingDropdownOpen(!isSettingDropdownOpen);
    };

    return (
        <div className="hidden md:block bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl sm:w-full flex flex-wrap items-center justify-between mx-auto p-2">
                {/* Social Icons */}
                <div className="socialIcons flex items-center flex-wrap py-4">
                    <div className="facebookIcon">
                        <button
                            type="button"
                            className="relative inline-flex items-center mx-2 text-sm font-medium text-center text-white rounded-lg"
                        >
                            <svg
                                className="w-5 h-5 text-blue-600 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm text-gray-900 font-normal dark:text-white">7500K Followers</p>
                        </button>
                    </div>

                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block h-8 w-px bg-gray-300 mx-2"></div>

                    {/* Horizontal Line for Mobile */}
                    <div className="block w-full h-px bg-gray-300 my-2 md:hidden"></div>

                    <div className="callIcon">
                        <button
                            type="button"
                            className="relative inline-flex items-center mx-2 text-sm font-medium text-center text-white rounded-lg"
                        >
                            <svg
                                className="w-6 h-6 text-blue-600 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                                />
                            </svg>
                            <p className="text-sm text-gray-900 font-normal dark:text-white">+(402) 763 282 46</p>
                        </button>
                    </div>
                </div>

                {/* ======== Dropdowns ======== */}

                <div className="dropdowns mx-2 flex flex-col md:flex-row items-center">
                    {/* Language Dropdown */}
                    <div className="language w-full md:w-auto">
                        <div className="relative inline-block text-left">
                            <span
                                className="text-gray-700 hover:text-blue-800 font-medium cursor-pointer inline-flex items-center"
                                onClick={toggleDropdown} // Toggle the dropdown visibility
                            >
                                {selectedLanguage} {/* Display the selected language */}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </span>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-2">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleLanguageChange('English')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleLanguageChange('French')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                French
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleLanguageChange('Spanish')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Spanish
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleLanguageChange('Japanese')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Japanese
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleLanguageChange('Dutch')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Dutch
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block h-8 w-px bg-gray-300 mx-4"></div>

                    {/* Horizontal Line for Mobile */}
                    <div className="block w-full h-px bg-gray-300 my-2 md:hidden"></div>


                    {/* Currency Dropdown */}
                    <div className="currency w-full md:w-auto">
                        <div className="relative inline-block text-left">
                            <span
                                className="text-gray-700 hover:text-blue-800 font-medium cursor-pointer inline-flex items-center"
                                onClick={toggleDropdownCurrency}
                            >
                                {selectedCurrency}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </span>

                            {isCurrencyDropdownOpen && (
                                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-2">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleCurrencyChange('£GBP')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                £GBP
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleCurrencyChange('€EUR')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                €EUR
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleCurrencyChange('¥JPY')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                ¥JPY
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block h-8 w-px bg-gray-300 mx-4"></div>

                    {/* Horizontal Line for Mobile */}
                    <div className="block w-full h-px bg-gray-300 my-2 md:hidden"></div>

                    {/* Settings Dropdown */}
                    <div className="settings w-full md:w-auto">
                        <div className="relative inline-block text-left">
                            <span
                                className="text-gray-700 hover:text-blue-800 font-medium cursor-pointer inline-flex items-center"
                                onClick={toggleDropdownSetting}
                            >
                                {selectedSetting}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </span>

                            {isSettingDropdownOpen && (
                                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-2">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleSettingChange('Profile')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={() => handleSettingChange('Sign out')}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
