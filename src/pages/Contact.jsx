import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialInquiry = searchParams.get('inquiry') || 'Dining Reservation';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: initialInquiry,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.phone.replace(/[-+\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!form.message.trim()) newErrors.message = 'Please type a short message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      purpose: 'Dining Reservation',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Binge N Balance | Location & Bookings</title>
        <meta name="description" content="Get in touch with Binge N Balance on Gangapur Road, Nashik. Send a reservation inquiry or talk to us directly on WhatsApp." />
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
            Connect With BNB
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Let's Start a <br />
            <span className="text-brand-gold italic font-light">Conversation</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-ivory/80 font-sans font-light max-w-3xl mx-auto leading-relaxed"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            Have a question about our snooker bookings, dietary menu queries, or hosting events? Drop us a line below or contact us directly.
          </motion.p>
        </div>
      </section>

      {/* Contact Split Grid */}
      <section className="py-20 md:py-28 bg-brand-ivory text-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details Column */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-forest mb-2 block">
                  Find Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-forest mb-6 leading-tight">
                  Reach Out to Our <br />
                  <span className="italic font-light">Nashik Venue</span>
                </h2>
                <p className="text-brand-charcoal/80 font-sans font-light leading-relaxed text-sm md:text-base">
                  Conveniently situated in the prime commercial zone of Gangapur Road, we invite you to stop by for wholesome dining, competitive matches, or quiet study sessions.
                </p>
              </div>

              {/* Information Cards List */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start p-5 rounded-2xl bg-white border border-brand-forest/5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold font-sans text-brand-forest mb-1">Our Location</h4>
                    <p className="text-sm font-sans font-light text-brand-charcoal/80 leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="flex items-start p-5 rounded-2xl bg-white border border-brand-forest/5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold font-sans text-brand-forest mb-1">Call & WhatsApp</h4>
                    <p className="text-sm font-sans font-light text-brand-charcoal/80 leading-relaxed mb-2">
                      {siteConfig.contact.phone}
                    </p>
                    <div className="flex space-x-3 text-xs font-sans font-semibold uppercase tracking-wider">
                      <a href={siteConfig.contact.phoneUrl} className="text-brand-forest hover:text-brand-gold">
                        Call Now
                      </a>
                      <span className="text-brand-deep/20">|</span>
                      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-forest hover:text-brand-gold flex items-center">
                        <MessageSquare className="w-3.5 h-3.5 mr-1" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start p-5 rounded-2xl bg-white border border-brand-forest/5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold font-sans text-brand-forest mb-1">Email Queries</h4>
                    <p className="text-sm font-sans font-light text-brand-charcoal/80 leading-relaxed">
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-gold transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start p-5 rounded-2xl bg-white border border-brand-forest/5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-forest/10 flex items-center justify-center mr-4 shrink-0">
                    <Clock className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold font-sans text-brand-forest mb-1">Operating Hours</h4>
                    <p className="text-xs font-sans font-light text-brand-charcoal/70 mb-1">
                      Weekdays: <span className="font-semibold text-brand-forest">{siteConfig.hours.weekday}</span>
                    </p>
                    <p className="text-xs font-sans font-light text-brand-charcoal/70">
                      Weekends: <span className="font-semibold text-brand-forest">{siteConfig.hours.weekend}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Inquiry Form Column */}
            <motion.div
              className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-brand-forest/5 shadow-xl relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              {!isSuccess ? (
                <>
                  <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-forest mb-2 block">
                    Drop a Message
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-forest mb-8 leading-tight">
                    Submit a Booking Inquiry
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-brand-charcoal/70 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 rounded-xl bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                          errors.name ? 'border-red-500' : 'border-brand-deep/10'
                        }`}
                        placeholder="Jane Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-brand-charcoal/70 mb-2 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`w-full px-4 py-3.5 rounded-xl bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                            errors.email ? 'border-red-500' : 'border-brand-deep/10'
                          }`}
                          placeholder="jane@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-brand-charcoal/70 mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`w-full px-4 py-3.5 rounded-xl bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                            errors.phone ? 'border-red-500' : 'border-brand-deep/10'
                          }`}
                          placeholder="9876543210"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="purpose" className="block text-xs uppercase tracking-wider text-brand-charcoal/70 mb-2 font-medium">
                        Purpose of Inquiry
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={form.purpose}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-ivory/50 border border-brand-deep/10 text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold"
                      >
                        <option value="Dining Reservation">Dining Reservation / Table booking</option>
                        <option value="Cue Sports Booking">Cue Sports (Snooker/Billiards) Slot</option>
                        <option value="Gaming Session">PlayStation Lounge Session</option>
                        <option value="Event Hosting">Private Event Hosting Booking</option>
                        <option value="Co-working space">Quiet Reading / Coworking desk</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-brand-charcoal/70 mb-2 font-medium">
                        Message Detail
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={4}
                        className={`w-full px-4 py-3.5 rounded-xl bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/35 focus:outline-none focus:ring-1 focus:ring-brand-gold resize-none ${
                          errors.message ? 'border-red-500' : 'border-brand-deep/10'
                        }`}
                        placeholder="Please write down your requirements or questions here..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 rounded-xl bg-brand-forest hover:bg-brand-deep disabled:bg-brand-forest/50 text-brand-ivory font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-brand-ivory" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success view */
                <motion.div
                  className="text-center py-10 font-sans text-brand-charcoal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-brand-forest/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-forest" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-forest mb-3">Inquiry Submitted!</h3>
                  <p className="text-brand-charcoal/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-brand-forest">{form.name}</span>. We've received your query regarding <span className="font-semibold text-brand-forest">{form.purpose}</span>. Our desk team will call you or text you back on <span className="font-semibold text-brand-forest">{form.phone}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full bg-brand-forest text-brand-ivory hover:bg-brand-deep transition-all duration-300 uppercase tracking-widest text-xs font-semibold shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="bg-brand-deep text-brand-ivory overflow-hidden relative aspect-[21/9] min-h-[300px]">
        <iframe
          src={siteConfig.mapEmbedUrl}
          className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-[1.1]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Binge N Balance Nashik location"
        />
        {/* Soft shadow overlay to blend map border */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
      </section>
    </>
  );
};

export default Contact;
