'use client';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => window.removeEventListener('scroll', controlHeader);
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`bg-[#0a0a0a] fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* bg-slate-900 */}
        <div className=" border-slate-700">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xl font-mono">C</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 font-mono">
                <a 
                  href="#about" 
                  className="text-slate-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  <span className="text-accent">01.</span> About
                </a>
                <a 
                  href="#experience" 
                  className="text-slate-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  <span className="text-accent">02.</span> Experience
                </a>
                <a 
                  href="#work" 
                  className="text-slate-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  <span className="text-accent">03.</span> Work
                </a>
                <a 
                  href="#contact" 
                  className="text-slate-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  <span className="text-accent">04.</span> Contact
                </a>
                <a 
                  href="/resume" 
                  className="ml-4 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-slate-900 transition-all duration-200 text-sm font-mono"
                >
                  Resume
                </a>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-slate-300 hover:text-accent transition-colors duration-200 p-2"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden bg-[#0a0a0a] border-b border-slate-700 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#about" 
              className="block text-slate-300 hover:text-accent transition-colors duration-200 text-sm font-mono py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-accent">01.</span> About
            </a>
            <a 
              href="#experience" 
              className="block text-slate-300 hover:text-accent transition-colors duration-200 text-sm font-mono py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-accent">02.</span> Experience
            </a>
            <a 
              href="#work" 
              className="block text-slate-300 hover:text-accent transition-colors duration-200 text-sm font-mono py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-accent">03.</span> Work
            </a>
            <a 
              href="#contact" 
              className="block text-slate-300 hover:text-accent transition-colors duration-200 text-sm font-mono py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-accent">04.</span> Contact
            </a>
            <a 
              href="/resume" 
              className="inline-block mt-4 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-slate-900 transition-all duration-200 text-sm font-mono"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;