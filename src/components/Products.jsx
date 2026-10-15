import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const SEMESTERS = [
  { sem: 'Sem 1', subjects: ['Financial Accounting 1', 'Financial Accounting 2', 'Basic of Statistics', 'Gandhian Economics & Rural Development', 'Vavharik Hindi', 'Writing & Presentation Skills', 'Indic Knowledge'] },
  { sem: 'Sem 2', subjects: ['Cloud Accounting 1', 'Financial Accounting 3', 'Probability and Discrete Statistics', 'Economics (Rural Development)', 'Practical English', 'Personality & Leadership Development', 'Indic Knowledge Tradition', 'Talent Management'] },
  { sem: 'Sem 3', subjects: ['Cost Accounting 1', 'Corporate Accounting', 'Taxation 1', 'Basics of Statistics', 'Common Employability Skills', 'English & Communication', 'Indic Knowledge System'] },
  { sem: 'Sem 4', subjects: ['Cost Accounting 2', 'Taxation 2', 'Cloud Accounting 2', 'Industrial Statistics', 'Fundamental of Communication in English 1', 'Essential Marketing Communication', 'GREAT EPICS OF INDIA (IKS) - Mahabharat & Ramayan'] },
  { sem: 'Sem 5', subjects: ['Cost Accounting 3', 'Management Accounting 1', 'Auditing 1', 'Operation Research 1', 'Operation Research 2', 'English Language Comprehension'] },
  { sem: 'Sem 6', subjects: ['Auditing 2', 'Corporate Accounting 2', 'Sampling in Research', 'Fundamental of Communication in English 2', 'Economics (Indian Economy 2)', 'Legal & Business Environment'] },
];

export default function Products() {
  const [active, setActive] = useState('Sem 1');
  const [q, setQ] = useState('');

  // With a search term, show matching subjects across all semesters.
  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return SEMESTERS.filter(s => s.sem === active);
    return SEMESTERS
      .map(s => ({ ...s, subjects: s.subjects.filter(x => x.toLowerCase().includes(term)) }))
      .filter(s => s.subjects.length);
  }, [active, q]);

  return (
    <section id="products" className="px-4 py-9 md:py-14 scroll-mt-20">
      <div className="mx-auto max-w-3xl flex flex-col gap-3.5">
        <div>
          <h2 className="font-display font-extrabold text-[26px] md:text-4xl leading-tight">Semester-wise B.Com Syllabus</h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Books, IMP Books and Past Papers (NEP)</p>
        </div>

        <label className="flex items-center gap-2.5 bg-soft rounded-2xl h-[50px] px-3.5 focus-within:ring-2 focus-within:ring-primary/40">
          <Search className="h-[18px] w-[18px] text-muted-foreground shrink-0" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search your subject (e.g. Statistics)"
            aria-label="Search your subject"
            className="flex-1 bg-transparent text-[15px] text-navy placeholder:text-muted-foreground outline-none"
          />
        </label>

        {!q.trim() && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-0.5">
            {SEMESTERS.map(({ sem }) => (
              <button
                key={sem}
                onClick={() => setActive(sem)}
                className={`shrink-0 min-h-[40px] px-4 rounded-full text-[13.5px] font-bold border transition-colors ${active === sem ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-[#DDE1EC] hover:bg-soft'}`}
              >
                {sem}
              </button>
            ))}
          </div>
        )}

        {shown.map(s => (
          <div key={s.sem} className="border border-[#E3E7F2] rounded-[18px] p-[18px]">
            <div className="flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">Semester {s.sem.replace('Sem ', '')}</h3>
              <span className="text-xs font-bold text-muted-foreground">{s.subjects.length} subjects</span>
            </div>
            <ul className="mt-2.5">
              {s.subjects.map(sub => (
                <li key={sub} className="flex items-center gap-2.5 py-2.5 border-t border-[#F0F2F7] text-[14.5px] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-yd shrink-0"></span>{sub}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {shown.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No subject found. Try another name.</p>
        )}
      </div>
    </section>
  );
}
