import React from 'react';
import { footerItems } from '../data/footerItems';

const Footer = () => {
  return (
    <footer className="text-white shadow-md w-full">
      <nav className="container mx-auto flex flex-col items-center px-4 sm:px-6 py-6">
        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-4">
          {footerItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label={item.label}
            >
              <item.icon className="text-2xl transition-transform duration-300 hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Matheus A. de Souza. All rights reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;
