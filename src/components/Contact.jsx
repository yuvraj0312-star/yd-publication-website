import { Mail, Instagram, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 scroll-mt-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy">We're here to help</h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a question about study material, the app, or want to become a campus ambassador? Reach out — we reply fast.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email us</p>
                  <p className="font-bold text-navy text-lg">support@ydapp.in</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Follow us</p>
                  <p className="font-bold text-navy text-lg">@ydappofficial</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-bold text-navy text-lg">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-8 md:p-10 rounded-3xl border shadow-sm">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); e.target.reset(); }}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Your name</label>
                <input type="text" placeholder="e.g. Raj Patel" className="w-full h-12 rounded-xl bg-white border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Email address</label>
                <input type="email" placeholder="yourname@example.com" className="w-full h-12 rounded-xl bg-white border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Message</label>
                <textarea 
                  className="w-full min-h-[140px] rounded-xl bg-white border border-border p-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
                  placeholder="What would you like to know?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full h-14 text-lg font-bold flex items-center justify-center gap-2 bg-navy text-white hover:bg-navy-light rounded-xl transition-colors shadow-md">
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}