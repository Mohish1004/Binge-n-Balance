import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary', // primary, secondary, outline, text
  type = 'button',
  className = '',
  icon,
  iconPosition = 'right'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium text-sm tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-forest hover:bg-brand-deep text-brand-ivory px-6 py-3 shadow-md hover:shadow-lg',
    secondary: 'bg-brand-gold hover:bg-opacity-90 text-brand-deep px-6 py-3 shadow-md hover:shadow-lg',
    outline: 'border border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-ivory px-6 py-3',
    text: 'text-brand-forest hover:text-brand-gold font-semibold px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-gold after:transition-all after:duration-300'
  };

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const mergedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (to.startsWith('http') || to.startsWith('tel') || to.startsWith('mailto')) {
      return (
        <motion.a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={mergedClassName}
          whileHover={variant !== 'text' ? { scale: 1.03 } : {}}
          whileTap={variant !== 'text' ? { scale: 0.98 } : {}}
        >
          {renderContent()}
        </motion.a>
      );
    }
    return (
      <motion.div
        whileHover={variant !== 'text' ? { scale: 1.03 } : {}}
        whileTap={variant !== 'text' ? { scale: 0.98 } : {}}
        className="inline-block"
      >
        <Link to={to} className={mergedClassName}>
          {renderContent()}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={mergedClassName}
      whileHover={variant !== 'text' ? { scale: 1.03 } : {}}
      whileTap={variant !== 'text' ? { scale: 0.98 } : {}}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
