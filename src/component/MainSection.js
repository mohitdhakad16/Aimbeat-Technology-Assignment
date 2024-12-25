import React, { useState } from 'react';
import SideMenu from '../component/SideMenu';
import Cart from '../component/Cart';

export default function MainSection() {
    // State to manage side menu visibility
    const [isSideMenuVisible, setSideMenuVisible] = useState(false);

    // Function to toggle side menu visibility
    const toggleSideMenu = () => {
        setSideMenuVisible(prevState => !prevState);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    {/* Left section (Side menu, hidden on mobile) */}
                    <div
                        className={`col-span-1 ${isSideMenuVisible ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
                    >
                        <SideMenu isSideMenuVisible={isSideMenuVisible} />
                    </div>

                    {/* Right section (Cart) */}
                    <div
                        className={`col-span-4 ${isSideMenuVisible ? 'md:col-span-3' : 'md:col-span-4'} transition-all duration-300 ease-in-out`}
                    >
                        <Cart toggleSideMenu={toggleSideMenu} />
                    </div>
                </div>
            </div>
        </div>
    );
}
