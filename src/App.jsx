import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="selection:bg-yd selection:text-navy font-sans text-navy bg-white overflow-x-hidden">
      <Ticker />
      <Navbar />
      <Hero />
      <Highlights />
      <Products />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
