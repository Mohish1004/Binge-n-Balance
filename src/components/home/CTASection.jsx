import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import Button from '../shared/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeInUp } from '../../utils/animations';

const CTASection = () => {
  return (
    <section className="relative py-28 bg-brand-deep text-brand-ivory overflow-hidden border-t border-brand-gold/15">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-brand-forest/15 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            Reserve Your Experience
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight max-w-2xl mx-auto">
            Ready to Experience Balance?
          </h2>
          
          <p className="text-brand-ivory/80 font-sans font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you are joining us for an indulgent dinner, booking an antique snooker table, or hosting a community meetup, we look forward to welcoming you.
          </p>

          {/* Primary Action Button */}
          <div className="pt-4">
            <Button to="/contact" variant="secondary" className="px-8 py-3.5 text-base shadow-lg">
              Plan Your Visit
            </Button>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto py-2">
            <div className="h-[1px] flex-grow bg-brand-ivory/20" />
            <span className="text-brand-ivory/40 text-xs font-sans uppercase tracking-widest">or contact us</span>
            <div className="h-[1px] flex-grow bg-brand-ivory/20" />
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href={siteConfig.contact.phoneUrl}
              className="flex items-center space-x-3 text-brand-ivory/80 hover:text-brand-gold transition-colors duration-300 font-sans text-sm tracking-wide"
            >
              <Phone className="h-5 w-5 text-brand-gold" />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-brand-ivory/80 hover:text-brand-gold transition-colors duration-300 font-sans text-sm tracking-wide"
            >
              <MessageSquare className="h-5 w-5 text-brand-gold" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-3 text-brand-ivory/80 hover:text-brand-gold transition-colors duration-300 font-sans text-sm tracking-wide"
            >
              <MapPin className="h-5 w-5 text-brand-gold" />
              <span>Gangapur Road, Nashik</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
