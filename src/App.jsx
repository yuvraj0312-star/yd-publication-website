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
import { MessageCircle } from 'lucide-react';
import { getAnnouncements, getProducts, getFaqs } from './api/api';

export default function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [products, setProducts] = useState([]);
  const[faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Gracefully handle if api functions exist
    if (typeof getAnnouncements === 'function') {
      getAnnouncements().then(r => setAnnouncements(r?.data ||[])).catch(() => {});
    }
    if (typeof getProducts === 'function') {
      getProducts().then(r => setProducts(r?.data ||[])).catch(() => {});
    }
    if (typeof getFaqs === 'function') {
      getFaqs().then(r => setFaqs(r?.data || [])).catch(() => {});
    }
  },[]);

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
      
      {/* WhatsApp Chat Bubble */}
      <a href="https://wa.me/919999999999" className="fixed bottom-8 right-8 h-16 w-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50">
        <MessageCircle className="h-8 w-8" />
        <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white animate-pulse">
          1
        </span>
      </a>
    </div>
  );
}