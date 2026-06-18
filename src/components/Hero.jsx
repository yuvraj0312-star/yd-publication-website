import { Smartphone } from 'lucide-react';

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

            {/* YD App Card */}
            <div className="lg:w-5/12 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy">YD App</h3>
                </div>
                <p className="text-base font-medium text-navy mb-2">
                  ✅ App is live on <span className="text-primary font-bold">Google Play Store</span>
                </p>
                <p className="text-base font-medium text-muted-foreground">
                  🍎 Coming soon on <span className="font-semibold text-navy">Apple App Store</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Strip */}
        <div className="absolute bottom-0 w-full border-t border-border bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-navy">
                <span className="font-extrabold text-navy">B.Com</span>
                <span className="text-muted-foreground">—</span>
                <span>Any Single Semester</span>
                <span className="text-muted-foreground">—</span>
                <span>All Subjects</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-primary font-extrabold">₹125</span>
                <span className="text-muted-foreground">—</span>
                <span>6 Months Validity</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-navy">
                <span className="font-extrabold text-navy">B.Com</span>
                <span className="text-muted-foreground">—</span>
                <span>All Semesters (1 to 6)</span>
                <span className="text-muted-foreground">—</span>
                <span>All Subjects</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-primary font-extrabold">₹500</span>
                <span className="text-muted-foreground">—</span>
                <span>3 Years Validity</span>
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
