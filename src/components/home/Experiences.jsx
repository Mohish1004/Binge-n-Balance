import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { experiences } from '../../data/experiences';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-brand-ivory border-b border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Designed for Your Lifestyle"
          subtitle="Explore the Hub"
          align="center"
        />

        {/* 4-Card Grid with Staggered Scroll Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="glass-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-48 w-full overflow-hidden zoom-image-container">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 bg-brand-ivory text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-brand-forest/10">
                  {exp.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-brand-charcoal mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-brand-charcoal/70 font-sans font-light text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Explore Link */}
                <Link
                  to={exp.link}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-brand-forest hover:text-brand-gold group transition-colors duration-300"
                >
                  Explore More
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
