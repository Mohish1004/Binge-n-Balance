import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import { upcomingEvents, pastEvents } from '../../data/events';
import { siteConfig } from '../../data/siteConfig';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const InstagramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Community = () => {
  return (
    <section id="community" className="py-24 bg-brand-ivory border-b border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Life at Binge N Balance"
          subtitle="Our Vibrant Community"
          align="center"
        />

        {/* Gallery Photo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pastEvents.map((photo) => (
            <motion.div
              key={photo.id}
              variants={fadeInUp}
              className="relative group rounded-2xl overflow-hidden shadow-lg aspect-square zoom-image-container"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-brand-gold uppercase tracking-[0.25em] text-[10px] font-semibold block mb-1">
                  {photo.category}
                </span>
                <h4 className="text-brand-ivory font-display font-bold text-lg leading-snug">
                  {photo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Events Preview Strip */}
        <div className="mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-brand-forest/15 pb-4">
            <h3 className="text-2xl font-bold font-display text-brand-charcoal">
              Upcoming Gatherings
            </h3>
            <LinkToEvents />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {upcomingEvents.slice(0, 3).map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="bg-white border border-brand-forest/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
                    <Calendar className="h-4 w-4 text-brand-gold" />
                    <span>{event.date}</span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-brand-charcoal mb-2">
                    {event.title}
                  </h4>
                  <p className="text-brand-charcoal/70 font-sans font-light text-xs leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-xs text-brand-charcoal/70 font-sans font-light space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 text-brand-forest mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Button to="/events" variant="outline" className="w-full text-center py-2.5 text-xs">
                    Register Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Instagram Follow Block */}
        <div className="mt-16 text-center">
          <Button
            to={siteConfig.socials.instagram}
            variant="primary"
            icon={<InstagramIcon />}
            iconPosition="left"
          >
            Follow Our Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

// Internal helper to use Link component for standard client-side routing.
const LinkToEvents = () => {
  return (
    <Link
      to="/events"
      className="text-xs uppercase tracking-widest font-semibold text-brand-forest hover:text-brand-gold transition-colors duration-300 mt-2 sm:mt-0"
    >
      View All Events →
    </Link>
  );
};

export default Community;
