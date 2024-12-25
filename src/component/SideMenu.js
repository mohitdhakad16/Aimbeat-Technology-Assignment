import React, { useState } from 'react';

export default function SideMenu() {
    // State to manage the price range
    const [priceRange, setPriceRange] = useState([0, 100]);

    // State to manage tick for color buttons
    const [selectedColors, setSelectedColors] = useState({});

    // State to manage side menu visibility
    const [menuVisible, setMenuVisible] = useState(true);

    // Handle range change
    const handlePriceChange = (e) => {
        const newPriceRange = [e.target.min, e.target.value];
        setPriceRange(newPriceRange);
    };

    // Reset price range to default
    const resetPriceRange = () => {
        setPriceRange([0, 100]);
    };

    // Handle tick for color buttons
    const handleTick = (color) => {
        setSelectedColors((prevColors) => ({
            ...prevColors,
            [color]: !prevColors[color], // Toggle the state for the clicked color
        }));
    };

    // Handle cancel button click to hide the menu
    const handleCancelClick = () => {
        setMenuVisible(false);
    };

    return (
        <div className={`side-menu transition-all duration-300 ease-in-out ${menuVisible ? 'block' : 'hidden'}`}>
            {/* Mobile Cancel Button */}
            <button
                onClick={handleCancelClick}
                className="cancelbtn sm:hidden absolute right-4 text-white px-4 py-2 rounded-full"
            >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>

            </button>

            <div className="transition-all duration-300 ease-in-out">
                {/* Price Filter Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold">Price Filter</h3>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full my-2"
                    />
                    <div className="flex items-center justify-between mb-2">
                        <div className="values">
                            <span>{priceRange[0]} - </span>
                            <span>{priceRange[1]}</span>
                        </div>
                        <div className="resetBtn">
                            <button
                                onClick={resetPriceRange}
                                className="bg-gray-200 px-5 text-dark p-2 mt-4 w-full"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Status Section */}
                <h3 className="text-lg font-semibold mt-8 mb-4">Product Status</h3>
                <hr />
                <div className="flex items-center my-4">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        On Sale
                    </label>
                </div>
                <div className="flex items-center my-4">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        In Stock
                    </label>
                </div>

                {/* ========= Categories ========== */}
                <div className="mb-6 mt-12">
                    <h3 className="text-lg font-semibold mt-8 mb-4">Filter By Colors</h3>
                    <hr />
                    <div className="mt-4">
                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <span className="text-gray-800 font-medium mr-4">Leather</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">12</button>
                        </div>


                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <span className="text-gray-800 font-medium mr-4">Classic Watch</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">6</button>
                        </div>

                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <span className="text-gray-800 font-medium mr-4">Trending Watch</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">10</button>
                        </div>

                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <span className="text-gray-800 font-medium mr-4">Women Watch</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">8</button>
                        </div>

                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <span className="text-gray-800 font-medium mr-4">Tables</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">5</button>
                        </div>
                    </div>
                </div>

                {/* Filter By Colors */}
                <div className="mb-6 mt-12">
                    <h3 className="text-lg font-semibold mt-8 mb-4">Filter By Colors</h3>
                    <hr />
                    <div className="mt-4">
                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <button className="w-6 h-6 rounded-full bg-red-500 mr-4" onClick={() => handleTick('red')}>
                                    {selectedColors.red ? '✓' : ''}
                                </button>
                                <span className="text-gray-800 font-medium mr-4">Red</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">12</button>
                        </div>

                        {/* Blue */}
                        <div className="flex justify-between items-start mb-3">
                            <div className="colorData flex">
                                <button className="w-6 h-6 rounded-full bg-blue-500 mr-4" onClick={() => handleTick('blue')}>
                                    {selectedColors.blue ? '✓' : ''}
                                </button>
                                <span className="text-gray-800 font-medium mr-4">Blue</span>
                            </div>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">8</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
