import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

const WhatsAppFab = () => {
  return (
    <motion.a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center animate-fab-pulse transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Contact us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.411 1.453 5.465 0 9.91-4.444 9.913-9.91.002-2.648-1.02-5.136-2.877-6.995C17.238 1.846 14.75 1.825 12.11 1.825c-5.474 0-9.918 4.444-9.921 9.911-.001 1.986.518 3.926 1.503 5.63l-1.007 3.676 3.763-.987zM17.56 14.22c-.3-.15-1.78-.88-2.057-.98-.278-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.178.2-.357.23-.657.08-3.097-1.507-5.078-4.57-5.857-5.91-.2-.35-.02-.54.16-.72.16-.16.35-.4.53-.6.18-.2.24-.33.36-.55.12-.23.06-.43-.03-.63-.09-.2-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppFab;
