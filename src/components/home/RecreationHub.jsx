import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, MonitorPlay } from 'lucide-react';
import Button from '../shared/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const RecreationHub = () => {
  const stats = [
    { id: 1, val: "8", label: "Antique Cue Tables", icon: <Trophy className="h-6 w-6 text-brand-gold" /> },
    { id: 2, val: "PS5", label: "Gaming Lounges", icon: <MonitorPlay className="h-6 w-6 text-brand-gold" /> },
    { id: 3, val: "Premium", label: "Heated Playbeds", icon: <Sparkles className="h-6 w-6 text-brand-gold" /> }
  ];

  return (
    <section className="relative py-28 bg-brand-deep text-brand-ivory overflow-hidden">
      {/* Background Image Parallax/Cover */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Deep Green Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-deep via-brand-deep/95 to-brand-deep/80" />

      {/* Grid Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Info & Highlights */}
        <motion.div
          className="lg:w-[55%] space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
              Elite Gaming & Focus Hub
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Uncompromised Quality <br />
              in Every Experience
            </h2>
            <div className="h-[3px] w-16 bg-brand-gold mt-4 rounded-full" />
          </div>

          <p className="text-brand-ivory/80 font-sans font-light text-base md:text-lg leading-relaxed">
            At Binge N Balance, we believe in doing things right. We don't cut corners on your recreation. From professional tournament heated tables to high-fidelity console setups, we deliver a premium environment for both play and focus.
          </p>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-brand-gold mr-3 text-lg font-bold">✓</span>
              <span className="text-brand-ivory/90 text-sm font-sans font-light">8 Handcrafted Antique slate tables</span>
            </div>
            <div className="flex items-start">
              <span className="text-brand-gold mr-3 text-lg font-bold">✓</span>
              <span className="text-brand-ivory/90 text-sm font-sans font-light">Thermally heated table beds for clean roll</span>
            </div>
            <div className="flex items-start">
              <span className="text-brand-gold mr-3 text-lg font-bold">✓</span>
              <span className="text-brand-ivory/90 text-sm font-sans font-light">Low-latency private PS5 gaming lounges</span>
            </div>
            <div className="flex items-start">
              <span className="text-brand-gold mr-3 text-lg font-bold">✓</span>
              <span className="text-brand-ivory/90 text-sm font-sans font-light">Quiet reading room with high-speed Wi-Fi</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
            <Button to="/recreation" variant="secondary">
              Book a Snooker Slot
            </Button>
            <Link
              to="/recreation"
              className="inline-flex items-center justify-center text-sm font-semibold uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 py-3"
            >
              Explore Recreation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual Stats Cards */}
        <motion.div
          className="lg:w-[45%] w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="bg-brand-deep/80 border border-brand-gold/15 p-6 rounded-2xl flex items-center space-x-5 shadow-lg backdrop-blur-md"
            >
              <div className="bg-brand-forest/40 p-3 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-brand-gold leading-none mb-1">
                  {stat.val}
                </div>
                <div className="text-xs sm:text-sm text-brand-ivory/70 font-sans font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default RecreationHub;
