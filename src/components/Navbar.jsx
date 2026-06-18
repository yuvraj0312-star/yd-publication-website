import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md text-navy transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 font-bold text-xl font-display">
          <img src={logo} alt="YD Publication Logo" className="h-8 w-8 rounded" />
          <span className="hidden sm:inline-block">YD Publication</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-navy transition-colors">About</a>
          <a href="#products" className="hover:text-navy transition-colors">Products</a>
          <a href="#app" className="hover:text-navy transition-colors">App</a>
          <a href="#faq" className="hover:text-navy transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-navy transition-colors">Contact</a>
          <button className="md:hidden text-navy p-2" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-4 gap-4 text-sm font-medium text-muted-foreground">
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-navy">About</a>
            <a href="#products" onClick={() => setOpen(false)} className="hover:text-navy">Products</a>
            <a href="#app" onClick={() => setOpen(false)} className="hover:text-navy">App</a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:text-navy">FAQ</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-navy">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
