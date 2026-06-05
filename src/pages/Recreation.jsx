import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Sparkles, Tv, BookOpen, Clock, Users, Tag, ArrowRight } from 'lucide-react';
import { recreationItems } from '../data/recreation';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const Recreation = () => {
  // Helper to get matching react-icons based on recreation slug
  const getIcon = (slug) => {
    switch (slug) {
      case 'antique-snooker':
        return <Sparkles className="w-6 h-6 text-brand-gold" />;
      case 'playstation-zone':
        return <Tv className="w-6 h-6 text-brand-gold" />;
      case 'reading-room':
        return <BookOpen className="w-6 h-6 text-brand-gold" />;
      default:
        return <Shield className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Cue Sports, PS5 & Co-working — Binge N Balance Recreation</title>
        <meta name="description" content="Explore Nashik's premier recreation hub. Book heated antique snooker tables, play PlayStation 5 in comfortable lounges, or co-work in our quiet reading room." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-deep text-brand-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C8A15A_1px,transparent_1px),linear-gradient(to_bottom,#C8A15A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-forest/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-gold font-sans font-semibold mb-4 block"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Where The Games Begin
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Premium Recreation <br />
            <span className="text-brand-gold italic font-light">& Focus Sanctuary</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            From professional cue sports to state-of-the-art console lounges and cozy reading hubs, Binge N Balance hosts Nashik's finest social infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Alternating Feature Showcase */}
      <section className="py-20 md:py-28 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20 md:space-y-32">
            {recreationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Block */}
                  <motion.div
                    className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? slideInLeft : slideInRight}
                  >
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-brand-forest/10 shadow-xl aspect-[16/10] zoom-image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Gold background outline decor */}
                    <div className={`absolute -bottom-3 -right-3 w-full h-full border-2 border-brand-gold rounded-2xl z-0 ${
                      isEven ? '-bottom-3 -right-3' : '-bottom-3 -left-3'
                    }`}></div>
                  </motion.div>

                  {/* Details Block */}
                  <motion.div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'
                    }`}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? slideInRight : slideInLeft}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center">
                        {getIcon(item.slug)}
                      </div>
                      <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-forest">
                        {item.slug.replace("-", " ")}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-forest mb-4 leading-tight">
                      {item.name}
                    </h2>

                    <p className="text-brand-charcoal/80 font-sans font-light text-base md:text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-brand-charcoal/80 font-sans font-light">
                          <span className="text-brand-gold mr-2 text-base">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Meta Info Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-brand-deep/5 pt-6 mb-8">
                      <div>
                        <div className="flex items-center text-xs text-brand-charcoal/50 uppercase tracking-wider font-sans mb-1">
                          <Users className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                          Capacity
                        </div>
                        <p className="text-sm font-semibold font-display text-brand-forest">{item.capacity}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-xs text-brand-charcoal/50 uppercase tracking-wider font-sans mb-1">
                          <Tag className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                          Pricing
                        </div>
                        <p className="text-sm font-semibold font-display text-brand-forest">{item.pricing}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-xs text-brand-charcoal/50 uppercase tracking-wider font-sans mb-1">
                          <Clock className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                          Availability
                        </div>
                        <p className="text-sm font-semibold font-display text-brand-forest">Open Daily</p>
                      </div>
                    </div>

                    {/* WhatsApp Action Button */}
                    <div className="flex">
                      <Button
                        to={`https://wa.me/919876543210?text=Hi%20Binge%20N%20Balance%2C%20I'd%20like%20to%20book%20a%20session%20for%20${encodeURIComponent(item.name)}`}
                        variant="primary"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Book Slot Now
                      </Button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules / Conduct Spotlight */}
      <section className="py-20 bg-white text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Cue Sports Etiquette & Conduct"
            subtitle="The Standard of Play"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Heated Table Treatment",
                description: "Our tables use a thermal heating grid below the slate playbeds to remove humidity. Please do not place drinks, chalk directly face down, or lean heavy items on the cushions."
              },
              {
                title: "Proper Attire",
                description: "To maintain the quality of our premium English felt, we request players to avoid wearing metal watches or clothing with dangling buttons/buckles that could snag the cloth."
              },
              {
                title: "Tournament Play",
                description: "We strictly follow WPBSA rules. Please maintain quiet decorum in the cue zone so other players can focus on their shots. Cues must be returned to rack after use."
              }
            ].map((rule, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-brand-ivory border border-brand-forest/5 flex flex-col justify-between"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div>
                  <h3 className="text-xl font-bold font-display text-brand-forest mb-3">{rule.title}</h3>
                  <p className="text-brand-charcoal/80 font-sans font-light text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-brand-deep text-brand-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#C8A15A_1px,transparent_1px),linear-gradient(to_bottom,#C8A15A_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-ivory mb-6 leading-tight">
            Ready to Take Your Seat <br />
            <span className="text-brand-gold italic font-light">& Cue Up?</span>
          </h2>
          <p className="text-brand-ivory/80 font-sans font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Call us directly or send a message on WhatsApp to secure a slot. Walk-ins are welcome but priority is given to bookings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="tel:+919876543210" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-deep">
              Call Venue (+91 98765 43210)
            </Button>
            <Button to={siteConfig.contact.whatsapp} variant="secondary">
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recreation;
