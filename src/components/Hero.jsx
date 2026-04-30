import { Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-white text-navy pt-20 pb-32 border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f8fafc_0%,_transparent_50%)]"></div>
        <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12">
              <div className="animate-fade-in-up">
                <p className="text-primary font-bold mb-4 tracking-wide uppercase text-sm">
                  Gujarat University Graduation Students — Ahmedabad
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] font-display">
                  Study Smart.<br />
                  <span className="text-primary">Score Better.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Affordable, exam-ready study material for Graduation students — crafted for Gujarat University syllabus.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#products" className="inline-flex items-center justify-center bg-navy text-white hover:bg-navy-light h-14 px-8 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl">
                    Explore Study Material
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center border-2 border-border hover:bg-muted h-14 px-8 text-lg font-medium rounded-xl transition-all">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            
            {/* YD App Early Access Form */}
            <div className="lg:w-5/12 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">YD App — Coming Soon</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">Get Early Access</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Once the app is live, you will receive a direct download link. Enter your details below to get notified.
                </p>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will notify you when the app is live.'); }}>
                  <input type="text" placeholder="Your Name" className="w-full h-12 rounded-xl bg-muted border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" required />
                  <input type="text" placeholder="WhatsApp Number / Email" className="w-full h-12 rounded-xl bg-muted border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" required />
                  <button type="submit" className="w-full h-12 bg-navy text-white hover:bg-navy-light rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    Get Download Link
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Proof Strip */}
        <div className="absolute bottom-0 w-full border-t border-border bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-navy">B.Com</span>
                <span className="text-sm text-muted-foreground">6 Semesters</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-navy">₹75</span>
                <span className="text-sm text-muted-foreground">Per semester</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-navy">All</span>
                <span className="text-sm text-muted-foreground">Subjects covered</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-display font-bold text-navy">100%</span>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Original content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Banner */}
      <section className="bg-navy py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-primary font-display font-bold text-4xl">900+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Students Bought</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>
            <div className="space-y-1">
              <p className="text-primary font-display font-bold text-4xl">100%</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Syllabus Covered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}