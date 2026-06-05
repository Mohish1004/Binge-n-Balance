import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Compass, Eye, Award, TrendingUp, Calendar, Heart } from 'lucide-react';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const About = () => {
  const timelineEvents = [
    {
      year: "2025",
      title: "The Inception",
      description: "Founder Shubham Bhamare conceived the idea of Binge N Balance after noticing a gap in Nashik: the absence of a unified space where people could enjoy rich comfort food, focus on their fitness goals, play professional cue sports, and network in a calm workspace.",
      icon: <Compass className="w-6 h-6 text-brand-gold" />
    },
    {
      year: "Early 2026",
      title: "Designing the Vision",
      description: "Secured a premier location on Gangapur Road and began building the space. Every detail—from the antique wooden carving of the snooker tables to the custom acoustic panels of the reading room and the kitchen layout—was carefully planned to support the dual 'Binge & Balance' lifestyle.",
      icon: <Award className="w-6 h-6 text-brand-gold" />
    },
    {
      year: "Mid 2026",
      title: "The Grand Launch",
      description: "Opened our doors to Nashik's community. Introducing a dual-kitchen dining concept (serving indulgent Awadhi Biryanis alongside high-protein superfood salads), a professional heated cue sports room, a PlayStation lounge, and a quiet co-working sanctuary.",
      icon: <TrendingUp className="w-6 h-6 text-brand-gold" />
    },
    {
      year: "Future & Beyond",
      title: "Community Growth",
      description: "Expanding our community-driven meetups, startup networking circles, creative workshops, and professional gaming leagues. We aim to become Nashik's central home for creatives, thinkers, and recreation enthusiasts.",
      icon: <Calendar className="w-6 h-6 text-brand-gold" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us — Binge N Balance | Nashik's Lifestyle Hub</title>
        <meta name="description" content="Discover the story behind Binge N Balance, founded by Shubham Bhamare in Nashik. Learn about our mission to merge indulgence, health, cue sports, and community." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-deep text-brand-ivory overflow-hidden">
        {/* Decorative background grid/elements */}
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
            Our Philosophy
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Crafting Nashik's <br />
            <span className="text-brand-gold italic font-light">Lifestyle Destination</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Binge N Balance is born from a simple belief: that healthy habits and indulgent pleasures do not need to compete. They can coexist beautifully under one roof.
          </motion.p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 md:py-28 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Block */}
            <motion.div
              className="lg:col-span-5 relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-brand-forest/10 shadow-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Shubham Bhamare - Founder of Binge N Balance"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-brand-ivory">
                  <h3 className="text-2xl font-bold font-display text-brand-gold">Shubham Bhamare</h3>
                  <p className="text-xs uppercase tracking-widest font-sans font-medium text-brand-ivory/70">Founder & Visionary</p>
                </div>
              </div>
              {/* Gold decorative frame behind image */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-gold rounded-2xl z-0"></div>
            </motion.div>

            {/* Narrative Block */}
            <motion.div
              className="lg:col-span-7 lg:pl-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-forest mb-2 block">
                The Founder's Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-brand-forest mb-6 leading-tight">
                Redefining How Nashik <br />
                <span className="italic font-light">Eats, Plays, & Focuses</span>
              </h2>

              <div className="space-y-6 text-brand-charcoal/80 font-sans font-light leading-relaxed text-base md:text-lg">
                <p>
                  As an active resident of Nashik, I frequently observed that planning a day out with friends or catching up on work meant compromising on lifestyle choices. If you wanted to focus and work, you had to visit a quiet, sterile library. If you wanted to eat healthy, options were limited. If you wanted to play snooker or console games, you had to visit noisy, crowded parlors.
                </p>
                <p>
                  I envisioned a space that combined these experiences in a premium, warm atmosphere. A place where a professional can have a high-protein quinoa salad while working on a laptop, and then transition into an evening of antique snooker and rich, slow-cooked Awadhi biryani with friends.
                </p>
                <p className="text-brand-forest font-medium italic border-l-4 border-brand-gold pl-4 font-display text-xl my-8">
                  "Binge N Balance isn't just a physical location. It is a philosophy that encourages lifestyle harmony. We believe you can feed your goals and feed your soul at the same time."
                </p>
                <p>
                  We have carefully curated every aspect of Binge N Balance—from sourcing professional-grade heating systems for our slate billiard tables to establishing dual kitchen lines to ensure absolute purity in our food preparations. We welcome you to experience this harmony.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-brand-deep text-brand-ivory relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C8A15A_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="The Principles That Drive Us"
            dark={true}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Mission Card */}
            <motion.div
              className="glass-card bg-brand-forest/20 p-8 md:p-10 rounded-2xl border border-brand-gold/15 flex flex-col justify-between"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-gold/25 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-gold mb-4">Our Mission</h3>
                <p className="text-brand-ivory/80 font-sans font-light leading-relaxed text-base">
                  To provide Nashik with an uncompromised lifestyle destination that hosts high-quality culinary creations, premium recreation infrastructure, and a cozy coworking sanctuary, cultivating wellness, connectivity, and authentic memories.
                </p>
              </div>
              <ul className="mt-8 space-y-3 font-sans text-sm text-brand-ivory/70 border-t border-brand-gold/10 pt-6">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Promote dynamic and pure ingredients in all food lines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Maintain competition-grade recreation facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Foster a warm, inclusive, and keyboard-accessible community space</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="glass-card bg-brand-forest/20 p-8 md:p-10 rounded-2xl border border-brand-gold/15 flex flex-col justify-between"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-gold/25 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-gold mb-4">Our Vision</h3>
                <p className="text-brand-ivory/80 font-sans font-light leading-relaxed text-base">
                  To establish Binge N Balance as the landmark hub of Nashik's social fabric, recognized for leading the balance-oriented lifestyle movement and setting the gold standard for premium cue sports and social networking.
                </p>
              </div>
              <ul className="mt-8 space-y-3 font-sans text-sm text-brand-ivory/70 border-t border-brand-gold/10 pt-6">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Grow into a multi-city premium hospitality franchise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Introduce structured cue sport coaching and state-level tournaments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>Serve as the incubation launchpad for local creators and startups</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Timeline Section */}
      <section className="py-20 md:py-28 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="The Journey So Far"
            subtitle="Our Timeline"
            align="center"
          />

          {/* Timeline Tree */}
          <div className="relative mt-16 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-brand-forest/20 before:hidden md:before:block">
            <motion.div
              className="space-y-12 md:space-y-24"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'} relative`}
                  >
                    {/* Centered Year Marker Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-brand-forest border-4 border-brand-ivory shadow-lg flex items-center justify-center z-20 hidden md:flex">
                      <span className="text-brand-gold font-display font-semibold text-xs">{event.year.split(" ")[0]}</span>
                    </div>

                    {/* Left/Right Card Wrapper */}
                    <div className="w-full md:w-1/2 px-0 md:px-12">
                      <motion.div
                        className="glass-card bg-white p-6 md:p-8 rounded-2xl border border-brand-forest/5 shadow-md relative hover:shadow-xl transition-all duration-300"
                        variants={isEven ? slideInLeft : slideInRight}
                      >
                        {/* Mobile Year Badge */}
                        <div className="inline-flex md:hidden items-center space-x-2 px-3 py-1 rounded-full bg-brand-forest text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{event.year}</span>
                        </div>

                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brand-deep/5 flex items-center justify-center">
                            {event.icon}
                          </div>
                          <h3 className="text-xl font-bold font-display text-brand-forest">{event.title}</h3>
                        </div>
                        <p className="text-brand-charcoal/85 font-sans font-light leading-relaxed text-sm md:text-base">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Spacer for MD screens to maintain 50% split */}
                    <div className="w-1/2 hidden md:block"></div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-forest text-brand-ivory relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-deep/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-gold/15 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-display text-brand-ivory mb-6 leading-tight"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Experience Nashik's Finest <br />
            <span className="text-brand-gold italic font-light">Lifestyle Oasis</span>
          </motion.h2>
          <motion.p
            className="text-brand-ivory/80 font-sans font-light mb-8 max-w-xl mx-auto leading-relaxed"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Take a look at our carefully balanced menus or plan your next cue sports gaming session today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button to="/food" variant="secondary">
              Explore Our Menus
            </Button>
            <Button to="/contact" variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-forest">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
