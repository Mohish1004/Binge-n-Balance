import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Flame, Book } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import { fadeInUp, staggerContainer } from '../utils/animations';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Community = () => {
  const stats = [
    { label: "Community Members", value: "1,500+" },
    { label: "Events & Meetups", value: "80+" },
    { label: "Active Slack/WhatsApp Groups", value: "6" },
    { label: "Snooker Players Ranked", value: "120+" }
  ];

  const circles = [
    {
      title: "Nashik Founder Circle",
      description: "A monthly networking group for startup founders, tech professionals, and local entrepreneurs to share advice, talk product, and pitch concepts.",
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      members: "140+ Members"
    },
    {
      title: "Cue Sports Elite League",
      description: "Our active snooker and billiards league hosting friendly bi-weekly matches, performance coaching, and annual ranking championships.",
      icon: <Flame className="w-6 h-6 text-brand-gold" />,
      members: "85+ Players"
    },
    {
      title: "Nashik Readers Club",
      description: "A quiet literature circle that gathers in our private reading room to review selected books, share reviews, and enjoy warm filter coffees.",
      icon: <Book className="w-6 h-6 text-brand-gold" />,
      members: "200+ Readers"
    },
    {
      title: "BNB Gamers Syndicate",
      description: "Local community of console enthusiasts hosting multiplayer FIFA, Tekken, and racing matches on our PlayStation 5 stations.",
      icon: <Flame className="w-6 h-6 text-brand-gold" />,
      members: "320+ Gamers"
    }
  ];

  const socialFeed = [
    {
      id: "insta1",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      likes: 243,
      comments: 18,
      tag: "#FounderMeet"
    },
    {
      id: "insta2",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      likes: 198,
      comments: 12,
      tag: "#CommunityFeast"
    },
    {
      id: "insta3",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      likes: 312,
      comments: 25,
      tag: "#PS5Gaming"
    },
    {
      id: "insta4",
      image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80",
      likes: 289,
      comments: 21,
      tag: "#CueSports"
    },
    {
      id: "insta5",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      likes: 176,
      comments: 9,
      tag: "#ReadingCorner"
    },
    {
      id: "insta6",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      likes: 210,
      comments: 14,
      tag: "#HealthyBowls"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Community Hub — Binge N Balance Nashik</title>
        <meta name="description" content="Discover our vibrant community circles in Nashik. Join startup groups, reading circles, gaming leagues, and participate in active social channels." />
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
            The Heart of Nashik
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            A Vibrant Hub For <br />
            <span className="text-brand-gold italic font-light">Growth & Play</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            We believe that space shapes culture. Binge N Balance is the physical platform where local creators, builders, readers, and sports fans unite to enjoy life in harmony.
          </motion.p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-brand-forest text-brand-ivory relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-bold font-display text-brand-gold mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-brand-ivory/85 font-sans font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered Masonry/Grid of Community Space */}
      <section className="py-20 md:py-28 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="The Vibe of BNB"
            subtitle="Candid Moments"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Column 1 */}
            <div className="space-y-6">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80"
                  alt="Co-working and networking"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">Coworking & Reading spaces</p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[3/4] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
                  alt="Freshly Prepared Awadhi Delicacy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">Slow Cooked Dum Biryanis</p>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[3/4] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                  alt="Founder Networking Session"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">Founder Gatherings</p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
                  alt="Console Lounge"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">PlayStation 5 stations</p>
                </div>
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80"
                  alt="Heated Antique Snooker Table"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">Antique heated snooker tables</p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-md group aspect-[3/4] border border-brand-forest/5"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                  alt="Healthy Bowl Preparation"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-brand-ivory text-xs font-sans">Clean high-protein meal options</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Meetup Circles */}
      <section className="py-20 bg-white text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Dedicated Circles"
            subtitle="Find Your Tribe"
            align="center"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {circles.map((circle, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-brand-ivory border border-brand-forest/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                variants={fadeInUp}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-forest/10 flex items-center justify-center mb-6 group-hover:bg-brand-forest group-hover:scale-110 transition-all duration-300">
                    <span className="group-hover:text-brand-ivory text-brand-forest transition-colors duration-300">
                      {circle.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-brand-forest mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {circle.title}
                  </h3>
                  <p className="text-brand-charcoal/80 font-sans font-light text-sm md:text-base leading-relaxed mb-6">
                    {circle.description}
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-brand-deep/5 pt-4">
                  <span className="text-xs uppercase tracking-wider text-brand-charcoal/50 font-sans font-medium">{circle.members}</span>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-forest hover:text-brand-gold font-semibold uppercase tracking-widest font-sans flex items-center"
                  >
                    Join Group <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social proof Instagram-like feed grid */}
      <section className="py-20 bg-brand-ivory text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Follow the Movement"
            subtitle="Instagram Feed"
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">
            {socialFeed.map((feed) => (
              <motion.a
                key={feed.id}
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="zoom-image-container relative rounded-2xl overflow-hidden aspect-square border border-brand-forest/5 shadow-sm group block"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={feed.image}
                  alt="Social post"
                  className="w-full h-full object-cover"
                />
                {/* Instagram hover details */}
                <div className="absolute inset-0 bg-brand-deep/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-brand-ivory font-sans">
                  <InstagramIcon className="w-8 h-8 text-brand-gold mb-3 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold mb-3">{feed.tag}</span>
                  <div className="flex space-x-4 text-sm font-medium">
                    <span>❤️ {feed.likes}</span>
                    <span>💬 {feed.comments}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 md:py-24 bg-brand-forest text-brand-ivory relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-deep/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-gold/15 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-ivory mb-6 leading-tight">
            Ready to Connect <br />
            <span className="text-brand-gold italic font-light">With Nashik's Creative Core?</span>
          </h2>
          <p className="text-brand-ivory/80 font-sans font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out via WhatsApp or visit us on Gangapur road to join one of our active circle groups and participate in upcoming networking workshops.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to={siteConfig.contact.whatsapp} variant="secondary" icon={<InstagramIcon className="w-4 h-4" />}>
              Join Our WhatsApp Groups
            </Button>
            <Button to="/events" variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-forest">
              See Upcoming Events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
