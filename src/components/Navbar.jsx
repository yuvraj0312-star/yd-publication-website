import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const links = [
  { href: '#inside', label: "What's Inside" },
  { href: '#products', label: 'Syllabus' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-[#ECEEF4] bg-white/90 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-5xl flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="YD Connect logo" className="h-9 w-9 rounded-lg" />
          <span className="leading-tight">
            <span className="block font-display font-bold text-base">YD App</span>
            <span className="block text-[11px] text-muted-foreground">by YD Connect</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-navy transition-colors">{l.label}</a>
          ))}
        </div>

        <button
          className="md:hidden h-11 w-11 rounded-xl border border-[#ECEEF4] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#ECEEF4]">
          <div className="flex flex-col px-4 py-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[15px] font-semibold text-navy border-b border-[#F0F2F7] last:border-0">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
