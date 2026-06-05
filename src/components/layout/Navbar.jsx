import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import Logo from '../shared/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change background and border on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Determine if active route is the current path
  const isActive = (path) => location.pathname === path;

  // Check if we are on the Home page (hero is dark full-screen, so transparent navbar is light-text)
  const isHomePage = location.pathname === '/';
  
  // Navbar theme based on scroll state and current page
  const navbarClasses = isScrolled
    ? 'glass-nav py-3 shadow-sm'
    : isHomePage
      ? 'bg-transparent py-5 text-white'
      : 'bg-transparent py-5 text-brand-charcoal';

  const linkColorClasses = (path) => {
    if (isScrolled) {
      return isActive(path)
        ? 'text-brand-forest font-semibold border-brand-gold'
        : 'text-brand-charcoal/80 hover:text-brand-forest border-transparent';
    } else {
      if (isHomePage) {
        return isActive(path)
          ? 'text-brand-gold font-semibold border-brand-gold'
          : 'text-brand-ivory/80 hover:text-brand-gold border-transparent';
      } else {
        return isActive(path)
          ? 'text-brand-forest font-semibold border-brand-gold'
          : 'text-brand-charcoal/80 hover:text-brand-forest border-transparent';
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 group">
          <Logo size={42} />
          <span className={`text-lg font-bold font-display tracking-wider transition-colors duration-300 ${isScrolled ? 'text-brand-forest' : isHomePage ? 'text-brand-ivory' : 'text-brand-forest'}`}>
            BINGE <span className="text-brand-gold font-sans font-light">N</span> BALANCE
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-all duration-300 border-b-2 py-1 ${linkColorClasses(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-brand-forest hover:bg-brand-deep text-brand-ivory' 
                : isHomePage
                  ? 'bg-brand-gold hover:bg-brand-ivory hover:text-brand-deep text-brand-deep'
                  : 'bg-brand-forest hover:bg-brand-deep text-brand-ivory'
            }`}
          >
            Reserve Visit
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-brand-forest' : isHomePage ? 'text-brand-ivory' : 'text-brand-forest'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-forest' : isHomePage ? 'text-brand-ivory' : 'text-brand-forest'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-brand-deep text-brand-ivory z-50 transform transition-transform duration-500 ease-in-out md:hidden shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-bold font-display tracking-wider">
                B<span className="text-brand-gold">N</span>B
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-brand-ivory hover:text-brand-gold" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base tracking-widest uppercase py-2 border-b border-brand-forest/30 ${
                    isActive(link.path)
                      ? 'text-brand-gold font-semibold'
                      : 'text-brand-ivory/80 hover:text-brand-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs uppercase tracking-widest font-semibold bg-brand-gold hover:bg-opacity-95 text-brand-deep py-3.5 rounded-full transition-all duration-300"
            >
              Reserve via WhatsApp
            </a>
            <div className="text-center text-xs text-brand-ivory/60 font-light">
              Gangapur Road, Nashik
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
        />
      )}
    </nav>
  );
};

export default Navbar;
