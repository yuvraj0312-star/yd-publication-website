import { BookOpen, CheckCircle2, Tag, Smartphone, GraduationCap, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Tag className="h-5 w-5" />,
    iconBg: 'bg-emerald-500 text-white',
    cardBg: 'bg-emerald-50 border-emerald-100',
    title: '6 sem sirf ₹500 mein',
    sub: 'Market mein ek semester ki books ₹800+ ki milti hai!',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    iconBg: 'bg-blue-500 text-white',
    cardBg: 'bg-blue-50 border-blue-100',
    title: 'Sari books Phone mein hai, use kr skte ho kabhi bhi',
    sub: 'Books sambhalna, Book store jana chnage krvane esi sari zanzat khatam',
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    iconBg: 'bg-purple-500 text-white',
    cardBg: 'bg-purple-50 border-purple-100',
    title: 'Har exam ke liye ready',
    sub: 'Assignment bnana ho, ya Internal exams, ya fir University exams!',
  },
  {
    icon: <Users className="h-5 w-5" />,
    iconBg: 'bg-amber-500 text-white',
    cardBg: 'bg-amber-50 border-amber-100',
    title: 'Ek ek book k liye groups me wait krna aur fir sbse mangne ki zarurt khtm - Aura 100%',
    sub: 'Ek bar 500 pay kro aur 3 sal ka tension khtm - Get Updated books and papers and other benefits in future',
  },
];

export default function About() {
  return (
    <section id="about" className="container mx-auto max-w-7xl py-12 px-4 md:px-8 scroll-mt-20">
      {/* About Intro */}
      <div className="grid gap-10 lg:grid-cols-2 mb-16">
        <div>
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">About YD Publication</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy leading-tight">Learn. Earn. Grow.</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            YD Publication is an Ahmedabad-based edtech initiative designed specifically for Gujarat University B.Com students. We create concise, syllabus-aligned books, summary notes and exam papers at the most affordable price — so you can prepare confidently, even if you open the book a week before exams.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">Exam-Ready Study Material</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Full books, summary books, IMP books and past papers for all 6 semesters.</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">100% Syllabus Covered</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Mapped strictly to the latest Gujarat University NEP 2020 curriculum for B.Com students.</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
              <Tag className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">Very Affordable</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Any single semester for ₹125. All 6 semesters for just ₹500 with 3 years validity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-4">
        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Why Choose YD Publication</h2>
        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy mb-6">Benefits</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border ${b.cardBg} hover:shadow-md transition-all`}>
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${b.iconBg}`}>
                {b.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-bold text-navy leading-tight">{b.title}</h4>
                <p className="text-sm text-navy/60 leading-snug">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
