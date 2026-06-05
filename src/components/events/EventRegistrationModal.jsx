import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Ticket, CheckCircle2, Loader2 } from 'lucide-react';

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    seats: '1',
    notes: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!event) return null;

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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetAndClose = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      seats: '1',
      notes: ''
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={isSubmitting ? null : resetAndClose}
          />

          {/* Modal Container */}
          <motion.div
            className="bg-brand-deep border border-brand-gold/20 rounded-2xl w-full max-w-md p-6 md:p-8 relative z-10 text-brand-ivory shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            {/* Close Button */}
            {!isSubmitting && (
              <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-brand-ivory" />
              </button>
            )}

            {!isSuccess ? (
              <>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-gold mb-2 block">
                  Event Registration
                </span>
                <h3 className="text-2xl font-bold font-display text-brand-ivory mb-6 leading-tight">
                  {event.title}
                </h3>

                {/* Event Details Quick Summary */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-brand-forest/20 border border-brand-gold/10 text-sm font-sans text-brand-ivory/80">
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
                    <span>{event.price}</span>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-brand-ivory">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-brand-ivory/70 mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                        errors.name ? 'border-red-500' : 'border-white/15'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Contact Fields: Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-brand-ivory/70 mb-1.5 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                          errors.email ? 'border-red-500' : 'border-white/15'
                        }`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-brand-ivory/70 mb-1.5 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                          errors.phone ? 'border-red-500' : 'border-white/15'
                        }`}
                        placeholder="9876543210"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Seats dropdown */}
                  <div>
                    <label htmlFor="seats" className="block text-xs uppercase tracking-wider text-brand-ivory/70 mb-1.5 font-medium">
                      Number of Seats / Tickets
                    </label>
                    <select
                      id="seats"
                      name="seats"
                      value={form.seats}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-brand-deep border border-white/15 text-sm text-brand-ivory focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    >
                      <option value="1" className="bg-brand-deep">1 Guest</option>
                      <option value="2" className="bg-brand-deep">2 Guests</option>
                      <option value="3" className="bg-brand-deep">3 Guests</option>
                      <option value="4" className="bg-brand-deep">4 Guests</option>
                      <option value="5" className="bg-brand-deep">5 Guests (Max)</option>
                    </select>
                  </div>

                  {/* Custom Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-brand-ivory/70 mb-1.5 font-medium">
                      Notes / Dietary Requirements
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-brand-gold resize-none"
                      placeholder="Any specific requests or requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-brand-gold hover:bg-opacity-90 disabled:bg-brand-gold/50 text-brand-deep font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brand-deep" />
                        <span>Sending Registration...</span>
                      </>
                    ) : (
                      <span>Confirm Registration</span>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <motion.div
                className="text-center py-6 font-sans text-brand-ivory"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-gold mb-3">Registration Successful!</h3>
                <p className="text-brand-ivory/80 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-white">{form.name}</span>. We've reserved <span className="font-semibold text-white">{form.seats} {form.seats === '1' ? 'seat' : 'seats'}</span> for you at <span className="font-semibold text-brand-gold">{event.title}</span>.
                </p>
                <div className="p-4 rounded-xl bg-brand-forest/20 border border-brand-gold/10 text-xs text-brand-ivory/70 text-left space-y-1 mb-8">
                  <p>• A confirmation email has been dispatched to <strong>{form.email}</strong>.</p>
                  <p>• Show this ticket confirmation at the gate on event day.</p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-deep transition-all duration-300 uppercase tracking-widest text-xs font-semibold"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
