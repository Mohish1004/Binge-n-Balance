import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Food from './pages/Food';
import Recreation from './pages/Recreation';
import Events from './pages/Events';
import Community from './pages/Community';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/recreation" element={<Recreation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;
