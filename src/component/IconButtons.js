import React from 'react';

const IconButtons = ({ notifications = [], iconSize = 'w-8 h-8' }) => {
    return (
        <div className="icons mt-4 sm:mt-6 lg:mt-0 md:mx-2"> {/* Default mt-4, sm:mt-6 for small screens, lg:mt-0 for larger screens */}
            {notifications.map((notification, index) => (
                <button
                    key={index}
                    type="button"
                    className="relative inline-flex items-center mx-2 text-sm font-medium text-center text-white rounded-lg"
                >
                    <svg
                        className={`${iconSize} sm:w-6 sm:h-6 text-gray-800 dark:text-white`} // Add responsive classes here
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={notification.iconPath}
                        />
                    </svg>
                    {notification.count > 0 && (
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            {notification.count}
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
};

export default IconButtons;
