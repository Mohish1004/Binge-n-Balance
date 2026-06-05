import Button from '../components/shared/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <span className="text-brand-gold font-sans font-bold tracking-widest text-lg uppercase mb-2">
        Error 404
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-brand-forest mb-6">
        Page Not Found
      </h1>
      <p className="text-brand-charcoal/80 font-sans font-light max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
      </p>
      <Button to="/" variant="primary">
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
