import { Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <div className="bg-white text-navy border-b">

        {/* Main Hero Content */}
        <div className="container mx-auto max-w-7xl px-4 md:px-8 pt-10 md:pt-20 pb-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12">
              <div className="animate-fade-in-up">
                <p className="text-primary font-bold mb-4 tracking-wide uppercase text-sm">
                  Gujarat University Graduation Students — Ahmedabad
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] font-display">
                  Ek bar purchase kro aur 3 sal k liye books ki tension khatam..<br />
                  <span className="text-primary">AURA bna rhe...sbse mangte firne ki zarurt nhi hai ab</span>
                </h1>
                <p className="text-xl text-foreground mb-2 max-w-2xl leading-relaxed">
                  Assignment likhna ho ya fir exam aane vali ho, Bohot se mere bhai-behen, apne friends ko call krenge aur request krna chalu krenge "Photo bhej de yarr🙏" (Samne vala dega nhi ya fir bohot WAIT krvata hai...AURA Negative🔻), ya fir groups me dhundega ki koi ek-do subject ki free ki pdf upload krde, past papers mil jaye...ab vo sare problems ko khatam krne k liye hmne YD App bnai hai..jo aapko ek coffee ki price me sari books provide krta hai
                </p>
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
                <p className="text-base font-medium text-muted-foreground mb-6">
                  🍎 Coming soon on <span className="font-semibold text-navy">Apple App Store</span>
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=in.ydapp.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-navy text-white font-bold text-base py-3 px-6 rounded-xl hover:bg-primary transition-colors shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                    <path d="M3.18 23.75a1.5 1.5 0 0 1-.68-.16A1.75 1.75 0 0 1 1.5 22V2A1.75 1.75 0 0 1 3 .41L14.09 6.5 3.18 23.75zm1.32-20.6v17.7L13.13 12 4.5 3.15zM15.5 7.59l2.8 1.62-2.8 1.62V7.59zm0 9.2v-3.24l2.8 1.62-2.8 1.62zm4.32-4.79L22 13.41a1 1 0 0 1 0 1.72l-2.18 1.26-3.32-1.92 3.32-1.47zM14.09 6.5 16.27 7.76 4.5 3.15 14.09 6.5zm0 11 2.18 1.26L4.5 20.85l9.59-3.35z"/>
                  </svg>
                  Download on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Strip — now below everything, not overlapping */}
        <div className="w-full border-t border-border bg-white/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-display font-extrabold text-navy">₹125 <span className="text-primary text-base font-semibold">/ semester</span></span>
                <span className="text-sm md:text-base text-muted-foreground">Any Single Semester · All Subjects · Validity till Exams End of that particular semester</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-display font-extrabold text-navy flex items-center gap-2">₹499 <span className="text-amber-600 text-xs font-bold bg-amber-100 px-2 py-1 rounded-full uppercase tracking-wide">Best Plan</span></span>
                <span className="text-sm md:text-base text-muted-foreground">All Semesters (1 to 6) · All Subjects · 3 Years Validity - Buy once & Books & Papers ki sari problems khatam</span>
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
              <p className="text-primary font-display font-bold text-4xl">600+</p>
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

      {/* CTA Buttons — moved here, after the highlights banner */}
      <div className="bg-white py-10 border-b">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 flex justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#products" className="inline-flex items-center justify-center bg-navy text-white hover:bg-navy-light h-14 px-8 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl">
              Explore Study Material
            </a>
            <a href="#contact" className="inline-flex items-center justify-center border-2 border-border hover:bg-muted h-14 px-8 text-lg font-medium rounded-xl transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
