import { useState, useMemo } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';

export default function Products({ products = [] }) {
  const [filter, setFilter] = useState('Sem 1');
  const [q, setQ] = useState('');
  const sems = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];

  const fallbackProducts = [
    { id: 1, sem: 'Sem 1', name: 'Sem 1 Complete Study Pack', price: 125, active: true, subjects: ['Financial Accounting 1', 'Financial Accounting 2', 'Basic of Statistics', 'Gandhian Economics & Rural Development', 'Vavharik Hindi', 'Writing & Presentation Skills', 'Indic Knowledge'] },
    { id: 2, sem: 'Sem 2', name: 'Sem 2 Complete Study Pack', price: 125, active: true, subjects: ['Cloud Accounting 1', 'Financial Accounting 3', 'Probability and Discrete Statistics', 'Economics (Rural Development)', 'Practical English', 'Personality & Leadership Development', 'Indic Knowledge Tradition'] },
    { id: 3, sem: 'Sem 3', name: 'Sem 3 Complete Study Pack', price: 125, active: true, subjects: ['Cost Accounting 1', 'Corporate Accounting', 'Taxation 1', 'Basics of Statistics', 'Common Employability Skills', 'English & Communication', 'Indic Knowledge System'] },
    { id: 4, sem: 'Sem 4', name: 'Sem 4 Complete Study Pack', price: 125, active: true, subjects: ['Cost Accounting 2', 'Taxation 2', 'Cloud Accounting 2', 'Industrial Statistics', 'Fundamental of Communication in English 1', 'Essential Marketing Communication', 'IKS - Mahabharat & Ramayan'] },
    { id: 5, sem: 'Sem 5', name: 'Sem 5 Complete Study Pack', price: 125, active: true, subjects: ['Cost Accounting 3', 'Management Accounting 1', 'Auditing 1', 'Operation Research 1', 'Operation Research 2', 'English Language Comprehension'] },
    { id: 6, sem: 'Sem 6', name: 'Sem 6 Complete Study Pack', price: 125, active: false, subjects: ['Auditing 2', 'Corporate Accounting 2', 'Sampling in Research', 'Fundamental of Communication in English 2', 'And all other subjects'] },
  ];

  const data = products.length ? products : fallbackProducts;

  const filtered = useMemo(() => {
    return data.filter(p => p.sem === filter && p.name.toLowerCase().includes(q.toLowerCase()));
  }, [data, filter, q]);

  return (
    <section id="products" className="bg-muted pt-8 pb-12 border-y scroll-mt-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 text-navy">Our Study Material (English & Gujarati)</h2>
          <p className="text-muted-foreground">Full Books, Summary Books, IMP Books & Past Papers</p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search your subject (e.g. Statistics)"
            className="w-full pl-12 pr-4 h-14 rounded-2xl bg-white border border-border shadow-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        {/* Semester Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {sems.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-6 py-2 text-sm font-semibold border transition-colors ${filter === s ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-border hover:bg-muted'}`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <div key={p.id || p._id} className={`rounded-2xl border bg-white transition-all ${p.active ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-75'}`}>
              <div className="p-6 border-b border-muted">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-semibold text-navy">{p.sem}</span>
                  {!p.active && <span className="inline-flex items-center rounded-md bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-white">Added Soon</span>}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{p.name}</h3>
                <div className="text-sm text-muted-foreground mt-2 space-y-1">
                  {(p.subjects || []).map((sub, idx) => (
                    <p key={idx}>• {sub}</p>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-4 bg-gray-50/50 rounded-b-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-navy">
                    {p.price ? `₹${p.price}` : '—'} <span className="text-xs font-normal text-muted-foreground">/ sem access</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {p.active ? (
                    <button className="w-full bg-navy text-white hover:bg-navy-light rounded-xl py-2.5 text-sm font-bold transition-colors">
                      Check on App
                    </button>
                  ) : (
                    <button disabled className="w-full bg-muted text-muted-foreground rounded-xl py-2.5 text-sm font-bold cursor-not-allowed">
                      All subjects added soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* Bundle Banner */}
        <div className="mt-12 bg-navy text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-xs font-bold text-white mb-4 uppercase tracking-wider">Best Value</span>
              <h3 className="text-3xl font-display font-bold mb-4">All 6 Semester Bundle <span className="text-amber-300 text-base align-middle">Best Deal</span></h3>
              <p className="text-white/70 mb-8 leading-relaxed">Get all subjects for all 6 semesters at the best price. Complete exam preparation in one go.</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-display font-bold text-primary">₹500</span>
                <span className="text-amber-300 text-sm font-bold bg-amber-400/10 px-2 py-1 rounded">3 Years Validity</span>
              </div>
              <button disabled className="bg-white/20 text-white/70 rounded-xl font-bold h-14 px-8 w-full sm:w-auto cursor-not-allowed border border-white/20">
              Now, both plans are live on the App, ₹125 for any single-semester- Validity till end of University exams & ₹500 for all-semester- Validity for 3 years from purchase
              </button>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> All Subjects Books</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Summary Books</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Past Papers</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> IMP Books</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> All 6 Semesters</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> English or Gujarati</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] -z-0 rounded-full"></div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Do you have any query? <a href="#contact" className="text-primary font-bold hover:underline">Contact us →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
