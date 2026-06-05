import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import Experiences from '../components/home/Experiences';
import RecreationHub from '../components/home/RecreationHub';
import FounderVision from '../components/home/FounderVision';
import Community from '../components/home/Community';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Binge N Balance — Where Health, Indulgence & Recreation Meet</title>
        <meta name="description" content="Welcome to Binge N Balance, Nashik's premier lifestyle hub. Experience the ultimate harmony of healthy food options, indulgent Awadhi specialties, professional snooker tables, and private reading rooms." />
      </Helmet>
      
      <Hero />
      <Philosophy />
      <Experiences />
      <RecreationHub />
      <FounderVision />
      <Community />
      <CTASection />
    </>
  );
};

export default Home;
