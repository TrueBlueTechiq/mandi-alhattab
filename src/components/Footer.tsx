import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm md:text-base">
              {t('madeBy') || 'Made by'} <span className="font-bold">TrueBlueTech</span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+9647729507073" 
              className="flex items-center hover:text-primary transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              +964 772 950 7073
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {t('allRightsReserved') || 'All rights reserved'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
