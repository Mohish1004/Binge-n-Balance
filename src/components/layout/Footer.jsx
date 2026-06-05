import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import Logo from '../shared/Logo';

const InstagramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-brand-ivory border-t border-brand-gold/15">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Block */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size={50} />
            <span className="text-xl font-bold font-display tracking-wider">
              BINGE <span className="text-brand-gold font-sans font-light">N</span> BALANCE
            </span>
          </Link>
          <p className="text-brand-ivory/70 text-sm font-sans font-light leading-relaxed">
            {siteConfig.description}
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-6 font-sans">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-brand-ivory/70 hover:text-brand-gold transition-colors duration-300 font-sans font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Experiences */}
        <div>
          <h3 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-6 font-sans">
            Experiences
          </h3>
          <ul className="space-y-3 text-sm text-brand-ivory/70 font-sans font-light">
            <li>
              <Link to="/food" className="hover:text-brand-gold transition-colors duration-300">
                Dine — Greens & Comfort Food
              </Link>
            </li>
            <li>
              <Link to="/recreation" className="hover:text-brand-gold transition-colors duration-300">
                Play — Heated Snooker & PS5
              </Link>
            </li>
            <li>
              <Link to="/recreation" className="hover:text-brand-gold transition-colors duration-300">
                Read — Quiet Space & Curated Books
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-brand-gold transition-colors duration-300">
                Connect — Networking & Meetups
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info / Hours */}
        <div className="space-y-6">
          <h3 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-6 font-sans">
            Store Info
          </h3>
          <div className="space-y-4 text-sm text-brand-ivory/70 font-sans font-light">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-brand-gold shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-brand-gold shrink-0" />
              <a href={siteConfig.contact.phoneUrl} className="hover:text-brand-gold transition-colors duration-300">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-brand-gold shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-gold transition-colors duration-300">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p>Weekdays: {siteConfig.hours.weekday}</p>
                <p>Weekends: {siteConfig.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-brand-forest/30 bg-brand-deep/65">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-brand-ivory/50 font-sans font-light space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Binge N Balance. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
