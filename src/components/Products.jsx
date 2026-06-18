import { useState, useMemo } from 'react';
import { Search, Download, CheckCircle2 } from 'lucide-react';

export default function Products({ products = [] }) {
  const[filter, setFilter] = useState('Sem 1');
  const [q, setQ] = useState('');
  const sems =['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];

  // Dummy fallback data mimicking HTML structure
  const fallbackProducts =[
    { id: 1, sem: 'Sem 1', name: 'Sem 1 Complete Bundle', price: 125, active: true, subjects:['1.	Financial Accounting 1', '2.	Financial Accounting 2', '3.	Basic of Statistics', '4.	Ghandhian Economics & Rural Development', '5.	Vavharik Hindi', '6.	Writing & Presentation Skills', '7.	Indic Knowledge']},
    { id: 2, sem: 'Sem 2', name: 'Sem 2 Complete Bundle', price: 125, active: true, subjects:['1.	Cloud Accounting 1', '2.	Financial Accounting 3', '3.	Probability and discrete (statistics)', '4.	Economics (Rural Development: Policies and Programmes)', '5.	Practical English', '6.	Personality & Leadership Development', '7.	Indic Knowledge Tradition']},
    { id: 3, sem: 'Sem 3', name: 'Sem 3 Complete Bundle', price: 125, active: true, subjects:['1.	Cost Accounting 1', '2.	Corporate Accounting', '3.	Taxation 1', '4.	Basics of Statistics', '5.	Common Employability Skills', '6.	English & Communication', '7.	Indic Knowledge System']},
    { id: 4, sem: 'Sem 4', name: 'Sem 4 Complete Bundle', price: 125, active: true, subjects:['1.	Cost Accounting 2', '2.	Taxation 2', '3.	Cloud Accounting 2', '4.	Industrial Statistics', '5.	Fundamental of Communication in English 1', '6.	Essential Marketing Communication', '7.	IKS - Mahabharat & Ramayan']},
    { id: 5, sem: 'Sem 5', name: 'Sem 5 Complete Bundle', price: 125, active: true, subjects:['1.	Cost Accounting 3', '2.	Management Accounting 1', '3.	Auditing 1', '4.	Operation Research 1', '5.	Operation Research 2', '6.	English Language Comprehension']},
    { id: 6, sem: 'Sem 6', name: 'Sem 6 Complete Bundle', price: 125, active: true, subjects:['Auditing 2', 'Corporate Accounting 2', 'Sampling in research', 'Fundamental of Communication in English 2', 'And all other subjects']}
  ];

  const data = products.length ? products : fallbackProducts;

  const filtered = useMemo(() => {
    return data.filter(p => p.sem === filter && p.name.toLowerCase().includes(q.toLowerCase()));
  },[data, filter, q]);

  return (
    <section id="products" className="bg-muted py-12 border-y scroll-mt-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 text-navy">Our Study Material (English & Gujarati)</h2>
          <p className="text-muted-foreground">Full Books, Summary Books, Imp Books & Past Papers</p>
        </div>
        
        {/* Search & Filters */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search your subject (e.g. Statistics)" 
            className="w-full pl-12 pr-4 h-14 rounded-2xl bg-white border border-border shadow-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {sems.map(s => (
            <button 
              key={s} 
              onClick={() => setFilter(s)} 
              className={`rounded-full px-6 py-2 text-sm font-semibold border transition-colors ${filter === s ? 'bg-navy text-white border-border' : 'bg-white text-navy border-border hover:bg-muted'}`}
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
                  {!p.active && <span className="inline-flex items-center rounded-md bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-white">Coming Soon</span>}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{p.name}</h3>
                <div className="text-sm text-muted-foreground mt-2 space-y-1">
                  {(p.subjects ||[]).map((sub, idx) => (
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
                    <>
                      <button className="w-full bg-navy text-white hover:bg-navy-light rounded-xl py-2.5 text-sm font-bold transition-colors">Check on App</button>
                      <button className="w-full text-primary hover:bg-primary/5 rounded-xl py-2.5 text-xs font-bold transition-colors flex items-center justify-center gap-1">
                      </button>
                    </>
                  ) : (
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

        {/* Subject Bundles */}
        <div className="mt-16 bg-navy text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-xs font-bold text-white mb-4 uppercase tracking-wider">Best Value</span>
              <h3 className="text-3xl font-display font-bold mb-4">Full Semester Bundle</h3>
              <p className="text-white/70 mb-8 leading-relaxed">Get all subjects for a semester at a discounted price. Complete exam preparation in one go.</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-display font-bold text-primary">₹75</span>
                <span className="text-white/40 line-through">₹150</span>
                <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">Save 50%</span>
              </div>
              <button className="bg-white text-navy hover:bg-white/90 rounded-xl font-bold h-14 px-8 w-full sm:w-auto transition-colors">
                Get Full Bundle
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> All Subjects</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Summary Books</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Solved Papers</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Exam Tips</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="h-4 w-4 text-primary" /> Unit-wise MCQs</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] -z-0 rounded-full"></div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want the full list or a specific subject? <a href="#contact" className="text-primary font-bold hover:underline">Contact us →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
