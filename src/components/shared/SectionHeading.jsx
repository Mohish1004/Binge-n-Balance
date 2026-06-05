import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const SectionHeading = ({
  title,
  subtitle,
  align = 'center', // center, left
  dark = false, // if true, text colors are set for dark background
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={`max-w-2xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {subtitle && (
        <span className={`text-xs uppercase tracking-[0.25em] font-sans font-semibold mb-3 block ${dark ? 'text-brand-gold' : 'text-brand-forest'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display ${dark ? 'text-brand-ivory' : 'text-brand-charcoal'} leading-tight`}>
        {title}
      </h2>
      <div className={`h-[3px] w-16 mt-4 rounded-full ${dark ? 'bg-brand-gold' : 'bg-brand-forest'} ${isCenter ? 'mx-auto' : 'mr-auto'}`} />
    </motion.div>
  );
};

export default SectionHeading;
