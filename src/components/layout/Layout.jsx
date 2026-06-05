import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFab from '../shared/WhatsAppFab';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-[76px]'}`}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Floating Elements */}
      <WhatsAppFab />

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
