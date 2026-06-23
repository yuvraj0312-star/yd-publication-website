import { BookOpen, CheckCircle2, Tag, Smartphone, GraduationCap, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Tag className="h-6 w-6" />,
    color: 'bg-green-500/10 text-green-600',
    title: '💸 Market mein ek semester ₹700+ ka — yahan 6 semester sirf ₹500 mein!',
    highlight: 'Save ₹3,700+',
    highlightColor: 'bg-green-500/10 text-green-600',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    color: 'bg-blue-500/10 text-blue-500',
    title: '📱 Phone mein hai — kabhi bhi, kahin bhi padho. Books carry karne ki zarurat nahi!',
    highlight: 'Mobile Access',
    highlightColor: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'bg-purple-500/10 text-purple-500',
    title: '📝 Assignment ho, Internal ho ya University Exam — ek hi jagah se poori preparation!',
    highlight: 'All Round Use',
    highlightColor: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: <Users className="h-6 w-6" />,
    color: 'bg-amber-500/10 text-amber-500',
    title: '🏠 External students ke liye best — exam se pehle bhi shuru karo, pass zaroor hoge!',
    highlight: 'External Friendly',
    highlightColor: 'bg-amber-500/10 text-amber-600',
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
              <h4 className="text-xl font-bold mb-2 text-navy">Highly Affordable</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Any single semester for ₹125. All 6 semesters for just ₹500 with 3 years validity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-4">
        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Why Choose YD Publication</h2>
        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy mb-10">Benefits at a Glance</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl border bg-white hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${b.color}`}>
                  {b.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.highlightColor}`}>{b.highlight}</span>
              </div>
              <h4 className="text-base font-semibold text-navy leading-snug">{b.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
