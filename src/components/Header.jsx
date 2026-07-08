// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/navItems';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation('common');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const languages = {
    pt: 'Português (Brasil)',
    es: 'Español',
    en: 'English'
  };

  return (
    <header className="text-white shadow-md fixed top-0 left-0 w-full z-50 bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 h-20">
        <div className="text-xl font-bold whitespace-nowrap">
          <span className="hidden sm:inline">Matheus A. de Souza</span>
          <span className="inline sm:hidden">M. A. S.</span>
        </div>

        <div className="flex items-center">
          <button className="sm:hidden text-2xl focus:outline-none mr-4" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`sm:flex sm:items-center sm:space-x-8 absolute sm:static bg-gray-800 sm:bg-transparent top-20 left-0 w-full sm:w-auto px-4 sm:px-0 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`py-2 sm:py-0 flex items-center ${location.pathname === `/${item.href}` ? 'text-blue-400' : ''}`}
              >
                <Link
                  to={`/${item.href}`}
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:scale-110 hover:text-blue-400 focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon className="text-lg transition-transform duration-300" />
                  <span>{t(item.label)}</span>
                </Link>
              </li>
            ))}
            <li className="relative flex items-center">
              <select
                className="bg-gray-700 text-white border border-gray-500 rounded p-1"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {Object.entries(languages).map(([lng, label]) => (
                  <option key={lng} value={lng}>
                    {label}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
