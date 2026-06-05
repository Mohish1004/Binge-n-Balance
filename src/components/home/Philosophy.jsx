import { useState } from 'react';
import Button from '../shared/Button';
import SectionHeading from '../shared/SectionHeading';

const Philosophy = () => {
  const [hoveredSide, setHoveredSide] = useState(null); // 'binge', 'balance', or null

  const items = {
    binge: [
      "Traditional Dum Awadhi Biryanis",
      "Creamy, Rich Shahi Nawabi Curries",
      "Indulgent Chocolate Desserts & Waffles",
      "Savory, Cheesy Loaded Comfort Platters"
    ],
    balance: [
      "High-Protein Grilled Grain Meals",
      "Nutrient-Packed Quinoa & Avocado Bowls",
      "Antioxidant-Rich Superfood Smoothies",
      "Low-Carb, Keto-Friendly Custom Plates"
    ]
  };

  return (
    <section id="philosophy" className="py-24 bg-brand-ivory overflow-hidden border-b border-brand-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="The Art of Eat what you love, Stay who you want to be"
          subtitle="Our Brand Philosophy"
          align="center"
        />

        {/* Split Screen Container */}
        <div className="relative mt-12 h-[550px] md:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-700 ease-out">
          
          {/* BINGE SIDE - DARK & MOODY */}
          <div
            onMouseEnter={() => setHoveredSide('binge')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-1/2 md:h-full flex flex-col justify-between p-8 md:p-12 transition-all duration-750 ease-out z-20 ${
              hoveredSide === 'binge'
                ? 'md:w-[60%] h-[55%] md:h-full'
                : hoveredSide === 'balance'
                ? 'md:w-[40%] h-[45%] md:h-full'
                : 'md:w-1/2 h-1/2 md:h-full'
            }`}
          >
            {/* Background Image & Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=80')`,
                transform: hoveredSide === 'binge' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-brand-deep/80 z-10" />

            {/* Content (Z-20 to sit above overlay) */}
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                  Indulgence without guilt
                </span>
                <h3 className="text-brand-ivory text-4xl md:text-5xl font-bold font-display mb-4">
                  Binge
                </h3>
                
                {/* Bullet lists */}
                <ul className="space-y-2.5 text-brand-ivory/80 text-sm md:text-base font-sans font-light mt-6">
                  {items.binge.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button to="/food" variant="secondary">
                  Explore Binge Menu
                </Button>
              </div>
            </div>
          </div>

          {/* BALANCE SIDE - LIGHT & FRESH */}
          <div
            onMouseEnter={() => setHoveredSide('balance')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-1/2 md:h-full flex flex-col justify-between p-8 md:p-12 transition-all duration-750 ease-out z-20 ${
              hoveredSide === 'balance'
                ? 'md:w-[60%] h-[55%] md:h-full'
                : hoveredSide === 'binge'
                ? 'md:w-[40%] h-[45%] md:h-full'
                : 'md:w-1/2 h-1/2 md:h-full'
            }`}
          >
            {/* Background Image & Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80')`,
                transform: hoveredSide === 'balance' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-brand-ivory/90 z-10" />

            {/* Content (Z-20) */}
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <span className="text-brand-forest uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                  Wellness without compromise
                </span>
                <h3 className="text-brand-charcoal text-4xl md:text-5xl font-bold font-display mb-4">
                  Balance
                </h3>
                
                {/* Bullet lists */}
                <ul className="space-y-2.5 text-brand-charcoal/80 text-sm md:text-base font-sans font-light mt-6">
                  {items.balance.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-forest rounded-full mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button to="/food" variant="outline">
                  Explore Balance Menu
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
