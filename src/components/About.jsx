import { BookOpen, CheckCircle2, Tag } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="container mx-auto max-w-7xl py-24 px-4 md:px-8 scroll-mt-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">About YD Publication</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy leading-tight">Learn. Grow.</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            YD Publication is an Ahmedabad-based edtech initiative designed specifically for Gujarat University Graduation students. We create concise, syllabus-aligned Books, Summary books and Exam papers at very affordable price so you can prepare confidently — even if you open the book a week before exams.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">Exam-Ready Study Material</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Summary books and past papers for all 6 semesters, priced affordably.</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">100% Syllabus Covered</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Mapped strictly to the latest Gujarat University curriculum for Graduation students.</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 rounded-2xl bg-muted border border-border transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
              <Tag className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-navy">Highly Affordable</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Complete semester study material with all subjects included for just ₹75.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}