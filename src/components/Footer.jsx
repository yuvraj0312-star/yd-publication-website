import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-muted bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-bold text-xl font-display">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-navy text-white text-sm">YD</div>
              <span className="text-navy">YD Publication</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pr-4">
              Empowering Gujarat University students with high-quality, affordable study materials. Learn. Grow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 font-display text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog & Exam Tips</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Campus Ambassador</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Student Lounge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 font-display text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 font-display text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@ydapp.in</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Ahmedabad, Gujarat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>© 2026 YD Publication. All rights reserved.</p>
          <p>Made with <span className="text-red-500">❤️</span> for Students</p>
        </div>
      </div>
    </footer>
  );
}