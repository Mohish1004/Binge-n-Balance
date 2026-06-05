import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, fadeInDown } from '../../utils/animations';
import { siteConfig } from '../../data/siteConfig';

const Hero = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('philosophy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Motion */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Dark Forest Green Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-deep/80 via-brand-deep/65 to-brand-deep/90" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-brand-ivory flex flex-col items-center">
        {/* Slogan */}
        <motion.span
          className="text-brand-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-6 block"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          Greens & Guilty Pleasures • Served Daily
        </motion.span>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 max-w-4xl"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Where Health, Indulgence <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
            & Recreation
          </span> Meet
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-brand-ivory/80 font-sans font-light text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          Nashik's premier lifestyle hub. Experience a unique harmony where wellness, gaming, quiet work, and community live together under one roof.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <Button onClick={handleScrollDown} variant="secondary" className="w-full sm:w-auto">
            Explore Experiences
          </Button>
          <Button to={siteConfig.contact.whatsapp} variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-deep w-full sm:w-auto">
            Reserve Your Visit
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-ivory/60 hover:text-brand-gold transition-colors duration-300"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 8, 0], opacity: 1 }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.6, delay: 1 }
        }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
