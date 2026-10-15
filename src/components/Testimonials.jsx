import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'Summary books ne sach mein bacha liya! Exam se sirf 10 din pehle padhai shuru ki aur Statistics mein 75% aa gaye.',
    name: 'Raj Patel',
    college: 'GLS University',
    initial: 'R',
  },
  {
    text: 'Solved past papers se GU ka exam pattern ekdum clear ho gaya. Jo bhi chahiye tha, sab ek hi jagah mil gaya.',
    name: 'Khushal Sharma',
    college: 'Lokmanya College of Commerce',
    initial: 'K',
  },
  {
    text: 'Finally aisa content mila jo exactly hamare Gujarat University syllabus ke hisaab se hai. Ab bade-bade textbooks mein dhoondhna nahi padta.',
    name: 'Vans Kantiliya',
    college: 'Narayan Guru Commerce College',
    initial: 'V',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="bg-soft px-4 py-9 md:py-14">
      <div className="mx-auto max-w-3xl flex flex-col gap-3.5">
        <h2 className="font-display font-extrabold text-[26px] md:text-4xl">What students say</h2>

        <div className="bg-white rounded-[18px] p-[18px] md:p-7 min-h-[220px] flex flex-col justify-between">
          <div>
            <svg aria-hidden="true" width="26" height="20" viewBox="0 0 26 20" fill="#FFC72C">
              <path d="M0 20V11C0 4.5 3.5 1 10 0v4C6.5 5 5 7 5 10h5v10H0zm16 0V11c0-6.5 3.5-10 10-11v4c-3.5 1-5 3-5 6h5v10H16z" />
            </svg>
            <p key={current} className="text-[15.5px] md:text-lg leading-relaxed mt-2.5 font-medium yd-in"><span className="yd-rise inline-block">{t.text}</span></p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-[38px] w-[38px] rounded-full bg-navy text-yd font-extrabold flex items-center justify-center">{t.initial}</div>
            <div>
              <p className="font-extrabold text-sm">{t.name}</p>
              <p className="text-[12.5px] text-muted-foreground">{t.college}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button onClick={prev} aria-label="Previous review" className="h-11 w-11 rounded-full border border-[#DDE1EC] bg-white flex items-center justify-center hover:bg-soft">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-navy' : 'w-1.5 bg-[#C9D0E8]'}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next review" className="h-11 w-11 rounded-full border border-[#DDE1EC] bg-white flex items-center justify-center hover:bg-soft">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
