
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 block transition-colors duration-300 ${
      isActive ? 'text-secondary-DEFAULT' : 'text-neutral-dark hover:text-secondary-DEFAULT'
    }`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Results', path: '/results' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-serif font-bold text-primary-dark">
              Anaheim Body Sculpting
            </NavLink>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item.name} to={item.path} className={navLinkClass}>
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/contact" className="ml-4 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                Book Consultation
              </NavLink>
            </div>
          </nav>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-dark hover:bg-primary-dark hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map(item => (
                <NavLink key={item.name} to={item.path} className={navLinkClass} onClick={() => setIsOpen(false)}>
                  {item.name}
                </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left bg-primary hover:bg-primary-dark text-white font-medium mt-2 py-2 px-3 rounded-md transition-colors duration-300">
              Book Consultation
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;