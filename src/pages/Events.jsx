import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Ticket, Layers, Award } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import EventRegistrationModal from '../components/events/EventRegistrationModal';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ['All', 'Community', 'Networking', 'Gaming'];

  const getFilteredUpcoming = () => {
    if (selectedCategory === 'All') return upcomingEvents;
    return upcomingEvents.filter(
      event => event.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

  const getFilteredPast = () => {
    if (selectedCategory === 'All') return pastEvents;
    return pastEvents.filter(
      event => event.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

  const filteredUpcoming = getFilteredUpcoming();
  const filteredPast = getFilteredPast();

  const handleOpenRegistration = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Community Events & Tournaments — Binge N Balance Nashik</title>
        <meta name="description" content="Join community gatherings, founder networking meetups, acoustic nights, and professional cue sports tournaments at Binge N Balance on Gangapur Road." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-deep text-brand-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C8A15A_1px,transparent_1px),linear-gradient(to_bottom,#C8A15A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-forest/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-gold font-sans font-semibold mb-4 block"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            BNB Gatherings & Circles
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Connecting Nashik's <br />
            <span className="text-brand-gold italic font-light">Thinkers & Doers</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            We curate workshops, acoustic performances, startup pitch nights, and local cue tournaments to cultivate meaningful real-world connections.
          </motion.p>
        </div>
      </section>

      {/* Main Events Container */}
      <section className="py-20 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest font-sans font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-brand-forest border-brand-forest text-brand-ivory shadow-md'
                    : 'border-brand-deep/10 bg-transparent text-brand-charcoal hover:border-brand-forest/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Upcoming Events Listing */}
          <div>
            <SectionHeading
              title="Upcoming Happenings"
              subtitle="Reserve Your Seat"
              align="center"
            />

            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredUpcoming.map((event) => (
                  <motion.div
                    layout
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card bg-white rounded-2xl p-6 md:p-8 border border-brand-forest/5 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold font-sans bg-brand-forest/10 text-brand-forest mb-4">
                        {event.category}
                      </span>
                      
                      <h3 className="text-2xl font-bold font-display text-brand-forest mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-brand-charcoal/70 font-sans font-light text-sm leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Event Meta Grid */}
                      <div className="space-y-3 border-t border-brand-deep/5 pt-6 mb-8 text-sm font-sans text-brand-charcoal/80">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2.5 text-brand-gold" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2.5 text-brand-gold" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Ticket className="w-4 h-4 mr-2.5 text-brand-gold" />
                          <span className="font-semibold text-brand-forest">{event.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        onClick={() => handleOpenRegistration(event)}
                        variant="primary"
                        className="w-full text-center py-3.5"
                      >
                        Register For Event
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredUpcoming.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-brand-charcoal/60"
              >
                <Layers className="w-8 h-8 mx-auto mb-3 text-brand-gold animate-pulse" />
                <p className="font-sans font-light text-lg">No upcoming events found in this category.</p>
              </motion.div>
            )}
          </div>

          {/* Past Events Gallery */}
          <div className="mt-28">
            <SectionHeading
              title="Memories from Past Gatherings"
              subtitle="Community Archive"
              align="center"
            />

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredPast.map((past) => (
                  <motion.div
                    layout
                    key={past.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="zoom-image-container relative rounded-2xl overflow-hidden shadow-md aspect-square border border-brand-forest/5 group"
                  >
                    <img
                      src={past.image}
                      alt={past.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover detail overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-gold mb-1 font-sans">
                        {past.category}
                      </span>
                      <h4 className="text-brand-ivory font-display font-bold text-lg">
                        {past.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredPast.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-brand-charcoal/60"
              >
                <p className="font-sans font-light text-lg">No past events found in this category.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Host Event Call-to-Action */}
      <section className="py-16 md:py-24 bg-brand-deep text-brand-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C8A15A_1.5px,transparent_1.5px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <SectionHeading
            title="Host Your Custom Gathering With Us"
            subtitle="Private Bookings"
            dark={true}
            align="center"
          />
          <p className="text-brand-ivory/80 font-sans font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Planning a private startup meet, a board gaming group party, or an executive coworking seminar? We offer customized packages featuring catering, technical screens, and slot bookings.
          </p>
          <div className="flex justify-center">
            <Button
              to="/contact?inquiry=Event%20Hosting"
              variant="secondary"
              icon={<Award className="w-4 h-4" />}
            >
              Inquire About Bookings
            </Button>
          </div>
        </div>
      </section>

      {/* Event Registration Modal Overlay */}
      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
      />
    </>
  );
};

export default Events;
