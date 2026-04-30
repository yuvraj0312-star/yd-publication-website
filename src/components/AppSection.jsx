import { Check, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AppSection() {
  return (
    <section id="app" className="container mx-auto max-w-7xl py-24 px-4 md:px-8 scroll-mt-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
          <div className="relative w-full aspect-[9/19] bg-navy rounded-[3rem] border-[8px] border-navy-lighter shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-navy-lighter rounded-b-2xl z-20"></div>
            <div className="p-6 pt-12 space-y-4 h-full bg-navy text-white">
              <div className="flex items-center gap-3 mb-8 mt-4">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-lg shadow-lg">YD</div>
                <div>
                  <div className="h-2.5 w-24 bg-white/20 rounded-full mb-1"></div>
                  <div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Semester 1</p>
                    <p className="text-[10px] text-white/40 mt-1">All subjects</p>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-white/20"></div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Semester 2</p>
                    <p className="text-[10px] text-white/40 mt-1">All subjects</p>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-white/20"></div>
                </div>
                <div className="p-4 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-blue-300">Semester 4</p>
                    <p className="text-[10px] text-primary mt-1 font-semibold">Access Active</p>
                  </div>
                  <div className="text-[10px] text-primary font-bold flex items-center gap-1"><Check className="h-3 w-3" /> Unlocked</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-sm font-bold">Semester 3</p>
                    <p className="text-[10px] text-white/40 mt-1">Soon</p>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-white/20"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 h-12 bg-primary rounded-xl flex items-center justify-center text-sm font-bold hover:bg-blue-600 transition-colors cursor-pointer shadow-lg shadow-primary/30">
                Continue Learning
              </div>
            </div>
          </div>
          {/* App Preview Overlay */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border md:block hidden animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">Beta Testing Live</p>
                <p className="text-xs text-muted-foreground">Join 100+ students</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">YD App — Coming to Play Store</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy leading-tight">All your study material. One app.</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            YD App is an Android app purpose-built for Gujarat University students. Buy access to a semester for just ₹75 and study anytime — with encrypted, secure PDFs.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ChevronRight className="h-3 w-3" />
              </div>
              <span className="text-navy font-medium">Phone OTP login — no passwords to remember</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ChevronRight className="h-3 w-3" />
              </div>
              <span className="text-navy font-medium">Free Unit 1 preview before you buy</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ChevronRight className="h-3 w-3" />
              </div>
              <span className="text-navy font-medium">Secure, encrypted content — no screenshots allowed</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ChevronRight className="h-3 w-3" />
              </div>
              <span className="text-navy font-medium">Single device access per account</span>
            </li>
          </ul>
          
          <div className="bg-muted p-8 rounded-2xl border shadow-sm">
            <p className="font-bold mb-4 text-navy">Be first to know when YD App launches</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will notify you.'); }}>
              <input type="text" placeholder="Your WhatsApp / email" className="flex-grow h-12 rounded-xl border border-border px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-navy" required />
              <button type="submit" className="h-12 bg-navy text-white hover:bg-navy-light px-6 rounded-xl font-semibold transition-colors whitespace-nowrap">Notify Me</button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">Invite: First 100 students get 1 semester FREE as beta testers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}