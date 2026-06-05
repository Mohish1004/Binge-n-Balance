import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { slideInLeft, slideInRight } from '../../utils/animations';

const FounderVision = () => {
  return (
    <section className="py-24 bg-brand-ivory overflow-hidden border-b border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Elegant Portrait Grid */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-150px" }}
          variants={slideInLeft}
        >
          {/* Decorative Gold Frame */}
          <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-brand-gold rounded-tl-2xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-2 border-r-2 border-brand-gold rounded-br-2xl -z-10" />
          
          {/* Main Portrait */}
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl relative bg-brand-deep">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=800&q=80"
              alt="Shubham Bhamare"
              className="w-full h-[450px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-out"
              loading="lazy"
            />
            {/* Soft Greenish Tint Overlay */}
            <div className="absolute inset-0 bg-brand-forest/10 mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Editorial Narrative & Quote */}
        <motion.div
          className="w-full md:w-[55%] space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-150px" }}
          variants={slideInRight}
        >
          <div>
            <span className="text-brand-forest uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-charcoal leading-tight">
              A Personal Mission for Balance
            </h2>
            <div className="h-[3px] w-16 bg-brand-forest mt-4 rounded-full" />
          </div>

          {/* Large Pull Quote */}
          <blockquote className="border-l-4 border-brand-gold pl-6 py-1">
            <p className="text-xl md:text-2xl font-display italic text-brand-forest leading-relaxed">
              "Binge N Balance was created to prove that you don't have to choose between enjoying life's guilty pleasures and taking care of yourself. Real wellness is about balance, not compromise."
            </p>
            <cite className="block text-sm font-sans font-medium text-brand-charcoal/80 mt-4 not-italic uppercase tracking-widest">
              — Shubham Bhamare, Founder
            </cite>
          </blockquote>

          {/* Body Paragraph */}
          <p className="text-brand-charcoal/80 font-sans font-light text-base leading-relaxed">
            Founded with the belief that recreation, nourishment, and community shouldn't be fragmented, Binge N Balance serves as Nashik's premier community oasis. It's a space designed for you to enjoy award-winning comfort food, recharge with premium protein bowls, focus in a quiet library, or network at startup conferences.
          </p>

          <div>
            <Button to="/about" variant="outline">
              Read Our Full Story
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderVision;
