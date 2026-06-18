import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "The summary books are a lifesaver! I started studying just 10 days before exams and managed to score 75% in Statistics.",
    name: "Raj Patel",
    college: "GLS University",
    initial: "R",
    color: "bg-primary/10 text-primary",
  },
  {
    text: "Solved past papers helped me understand the GU exam pattern perfectly. The ₹125 price is totally worth it for the whole semester.",
    name: "Khushal Sharma",
    college: "Lokmanya College of Commerce",
    initial: "K",
    color: "bg-green-500/10 text-green-600",
  },
  {
    text: "Finally, content that is actually mapped to our Gujarat University syllabus. No more searching through massive textbooks.",
    name: "Vans Kantiliya",
    college: "Narayan Guru Commerce College",
    initial: "V",
    color: "bg-purple-500/10 text-purple-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-12 container mx-auto max-w-7xl px-4 md:px-8">
      <div className="text-center mb-8">
        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">What Students Say</h2>
        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-navy">Trusted by 900+ Students</h3>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Card */}
        <div className="rounded-2xl border bg-white p-8 shadow-lg flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-lg text-navy italic mb-6 leading-relaxed">"{t.text}"</p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold ${t.color}`}>{t.initial}</div>
            <div>
              <p className="font-bold text-navy">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.college}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button onClick={prev} className="h-10 w-10 rounded-full border border-border bg-white shadow hover:bg-muted flex items-center justify-center transition-colors">
            <ChevronLeft className="h-5 w-5 text-navy" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-primary' : 'w-2 bg-border'}`} />
            ))}
          </div>
          <button onClick={next} className="h-10 w-10 rounded-full border border-border bg-white shadow hover:bg-muted flex items-center justify-center transition-colors">
            <ChevronRight className="h-5 w-5 text-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
