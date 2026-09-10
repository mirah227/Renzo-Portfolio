import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeSection = 'home',
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigateSection) {
      onNavigateSection(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="site-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.06] py-4 shadow-lg'
          : 'bg-transparent py-6 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Name / Logo — returns to top of main page */}
          <a
            href="#home"
            id="nav-logo"
            onClick={handleLogoClick}
            className="group flex items-center focus:outline-none cursor-pointer"
            aria-label="Renzo Portfolio - Home"
          >
            <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white group-hover:text-[#EAA039] transition-colors uppercase">
              RENZO<span className="text-[#EAA039]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links with active-section state */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs sm:text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 transition-colors duration-150 tracking-wide cursor-pointer ${
                    isActive
                      ? 'text-[#EAA039] font-semibold after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#EAA039] after:rounded-full'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#07080B]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 space-y-4 animate-in fade-in duration-200 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'text-[#EAA039] font-semibold bg-white/[0.04] border-l-2 border-[#EAA039]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#EAA039]" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
