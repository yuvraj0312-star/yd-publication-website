import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

// Adds "yd-in" when the element scrolls into view, which starts its animations.
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('yd-in'); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('yd-in'); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const stats = [
  { value: '650+', label: 'Students' },
  { value: 'Sem 1–6', label: 'All Semesters' },
  { value: 'NEP', label: 'Latest Syllabus' },
];

function Tick({ delay }) {
  return (
    <span className="h-[34px] w-[34px] rounded-full bg-primary shrink-0 flex items-center justify-center yd-pop" style={{ animationDelay: delay }}>
      <Check className="h-[17px] w-[17px] text-white" strokeWidth={3} />
    </span>
  );
}

export default function Highlights() {
  const insideRef = useReveal();
  const urgencyRef = useReveal();

  return (
    <>
      {/* Stats */}
      <section className="border-b border-[#ECEEF4]">
        <div className="mx-auto max-w-3xl grid grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-[18px] px-2 text-center ${i < 2 ? 'border-r border-[#ECEEF4]' : ''}`}>
              <p className="font-display font-extrabold text-[22px] md:text-3xl text-primary">{s.value}</p>
              <p className="text-[11.5px] md:text-sm font-semibold text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's inside YD App */}
      <section id="inside" ref={insideRef} className="bg-soft px-4 py-9 md:py-14 scroll-mt-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-extrabold tracking-[1.4px] text-primary">B.COM</p>
          <h2 className="font-display font-extrabold text-[26px] md:text-4xl leading-tight mt-1 mb-4">What's inside YD App?</h2>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="bg-white rounded-[18px] p-4 flex gap-3.5 items-start shadow-[0_1px_0_#E3E7F2] yd-rise">
              <Tick delay=".3s" />
              <div>
                <h3 className="font-sans font-extrabold text-[17px]">Books for All Semesters</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="bg-[#EEF1FA] text-xs font-bold px-2.5 py-1 rounded-lg">English Medium</span>
                  <span className="bg-[#EEF1FA] font-gujarati text-[12.5px] font-semibold px-2.5 py-1 rounded-lg">ગુજરાતી માધ્યમ જલ્દી ઉપલબ્ધ થશે</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[18px] p-4 flex gap-3.5 items-start shadow-[0_1px_0_#E3E7F2] yd-rise" style={{ animationDelay: '.15s' }}>
              <Tick delay=".5s" />
              <div>
                <h3 className="font-sans font-extrabold text-[17px]">University Past Papers Solution (NEP)</h3>
                <span className="inline-block mt-2 bg-[#FFF4D1] border border-[#F2C94C] font-gujarati text-[12.5px] font-semibold px-2.5 py-1 rounded-lg">
                  ગુજરાતી + English Medium બંનેમાં ઉપલબ્ધ
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[18px] p-4 flex gap-3.5 items-center shadow-[0_1px_0_#E3E7F2] yd-rise md:col-span-2" style={{ animationDelay: '.3s' }}>
              <Tick delay=".7s" />
              <h3 className="font-sans font-extrabold text-[17px]">Practical and IMP Books</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Friendly urgency band */}
      <section ref={urgencyRef} className="bg-navy text-white px-4 py-9 md:py-14">
        <div className="mx-auto max-w-3xl flex flex-col gap-3.5">
          <p className="text-yd font-extrabold text-xs tracking-[1.4px]">EXAM SEASON</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-4xl leading-tight">
            Exams don't wait.<br />Neither should you.
          </h2>
          <p className="text-[15px] md:text-base text-[#C9D0EE] leading-relaxed">
            Stop waiting for notes from friends. Your full syllabus, ready on your phone — for internals, assignments and university exams.
          </p>
          <div className="mt-1.5">
            <div className="flex justify-between text-[12.5px] font-bold text-[#C9D0EE] mb-2">
              <span>Syllabus covered</span><span className="text-yd">100%</span>
            </div>
            <div className="h-2.5 rounded-full bg-navy-lighter overflow-hidden">
              <div className="h-full bg-yd rounded-full yd-fill"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
