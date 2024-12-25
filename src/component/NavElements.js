import React from 'react';

export default function NavElements({ navLinks, activeLink, onLinkClick }) {
  return (
    <div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`block py-2 px-3 
                ${activeLink === link.id ? 'text-white bg-blue-700' : 'text-gray-900'} 
                rounded 
                md:bg-transparent 
                md:p-0 
                ${activeLink === link.id ? 'md:text-blue-700' : 'md:text-gray-900'}`} // Apply text color for active link on desktop
              onClick={() => onLinkClick(link.id)}
              aria-current={activeLink === link.id ? 'page' : undefined}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
