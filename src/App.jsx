import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import AppSection from './components/AppSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getAnnouncements, getProducts, getFaqs } from './api/api';

export default function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [products, setProducts] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    if (typeof getAnnouncements === 'function') {
      getAnnouncements().then(r => setAnnouncements(r?.data || [])).catch(() => {});
    }
    if (typeof getProducts === 'function') {
      getProducts().then(r => setProducts(r?.data || [])).catch(() => {});
    }
    if (typeof getFaqs === 'function') {
      getFaqs().then(r => setFaqs(r?.data || [])).catch(() => {});
    }
  }, []);

  return (
    <div className="selection:bg-primary selection:text-white font-sans text-navy bg-white overflow-x-hidden">
      <Ticker items={announcements} />
      <Navbar />
      <Hero />
      <About />
      <Products products={products} />
      <Testimonials />
      <AppSection />
      <FAQ faqs={faqs} />
      <Contact />
      <Footer />
    </div>
  );
}
