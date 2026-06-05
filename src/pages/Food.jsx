import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, Award, Download, MessageSquare } from 'lucide-react';
import { bingeItems, balanceItems, signatureDishes } from '../data/foodMenu';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Food = () => {
  const [activeTab, setActiveTab] = useState('all'); // all, binge, balance
  const [selectedTag, setSelectedTag] = useState('All'); // filter by dietary tag

  const allItems = [...bingeItems, ...balanceItems];

  const getFilteredItems = () => {
    let items = allItems;
    if (activeTab === 'binge') {
      items = bingeItems;
    } else if (activeTab === 'balance') {
      items = balanceItems;
    }

    if (selectedTag !== 'All') {
      items = items.filter(item => item.tags.includes(selectedTag));
    }
    return items;
  };

  // Get unique tags across all/selected menus
  const getAvailableTags = () => {
    let items = allItems;
    if (activeTab === 'binge') items = bingeItems;
    if (activeTab === 'balance') items = balanceItems;

    const tags = new Set(['All']);
    items.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  };

  const filteredItems = getFilteredItems();
  const availableTags = getAvailableTags();

  return (
    <>
      <Helmet>
        <title>Food & Drinks Menu — Binge N Balance | Awadhi & Healthy café</title>
        <meta name="description" content="Explore Nashik's first dual-theme culinary menu. Select between our Binge menu of dum Awadhi Biryani and desserts, or our Balance menu of high-protein salads and bowls." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-deep text-brand-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A15A_1.5px,transparent_1.5px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-forest/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-gold font-sans font-semibold mb-4 block"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Nashik's Dual Kitchen Concept
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            The Art of Nourishment <br />
            <span className="text-brand-gold italic font-light">& Indulgence</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            We curate two separate kitchens. One is dedicated to clean, macro-rich ingredients to fuel your fitness goals; the other is dedicated to slow-cooked royal traditions and comfort.
          </motion.p>
        </div>
      </section>

      {/* Signature Grid Section */}
      <section className="py-20 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Signature Creations"
            subtitle="Highly Recommended"
            align="center"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.id}
                className="glass-card bg-white rounded-2xl overflow-hidden border border-brand-forest/5 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="zoom-image-container relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    dish.type === 'balance' 
                      ? 'bg-brand-forest text-brand-ivory' 
                      : 'bg-brand-gold text-brand-deep'
                  }`}>
                    {dish.type}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-display text-brand-forest mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-brand-charcoal/70 font-sans font-light text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-brand-deep/5 pt-4">
                    <span className="text-brand-forest font-semibold text-lg font-display">₹{dish.price}</span>
                    <span className="text-xs font-sans text-brand-charcoal/50 flex items-center">
                      <Award className="w-4 h-4 mr-1 text-brand-gold animate-pulse" />
                      Chef's Special
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Menu Explorer */}
      <section className="py-20 bg-white text-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Explore Our Main Menus"
            subtitle="The Full Experience"
            align="center"
          />

          {/* Menu Categories Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { id: 'all', label: 'Complete Menu' },
              { id: 'binge', label: 'Binge Indulgences' },
              { id: 'balance', label: 'Balance Wellness' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedTag('All'); // Reset tag filter on menu toggle
                }}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest font-sans font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-forest text-brand-ivory shadow-md'
                    : 'bg-brand-ivory hover:bg-brand-forest/10 text-brand-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dietary Filter Badges */}
          {availableTags.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 border ${
                    selectedTag === tag
                      ? 'bg-brand-gold border-brand-gold text-brand-deep font-medium'
                      : 'border-brand-deep/10 bg-transparent text-brand-charcoal/80 hover:border-brand-gold/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-brand-ivory/50 border border-brand-forest/5 flex flex-col justify-between hover:bg-brand-ivory transition-colors duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg md:text-xl font-bold font-display text-brand-forest">
                        {item.name}
                      </h4>
                      <span className="text-base md:text-lg font-display text-brand-forest font-semibold ml-4">
                        ₹{item.price}
                      </span>
                    </div>
                    
                    <p className="text-brand-charcoal/80 font-sans font-light text-sm md:text-base leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-deep/5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-brand-forest/5 text-brand-forest/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-brand-charcoal/60"
            >
              <Leaf className="w-8 h-8 mx-auto mb-3 text-brand-gold animate-bounce" />
              <p className="font-sans font-light text-lg">No dishes found matching this selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Menu Actions / Download PDF and table booking */}
      <section className="py-16 md:py-24 bg-brand-deep text-brand-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#C8A15A_1px,transparent_1px),linear-gradient(to_bottom,#C8A15A_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <SectionHeading
            title="Reserve Your Culinary Experience"
            subtitle="Dine With Us"
            dark={true}
            align="center"
          />
          <p className="text-brand-ivory/80 font-sans font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Download our complete physical menu PDF, or click below to message us directly on WhatsApp to book a dining table or inquire about hosting private lunches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() => alert("Your menu download has started! (Simulated)")}
              variant="outline"
              icon={<Download className="w-4 h-4" />}
              className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-deep"
            >
              Download PDF Menu
            </Button>
            <Button
              to={siteConfig.contact.whatsapp}
              variant="secondary"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Book Table via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
