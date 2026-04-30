import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ faqs = [] }) {
  const [open, setOpen] = useState(null);
  
  const fallbackFaqs =[
    { question: 'Are these updated for the 2025-26 syllabus?', answer: 'Yes, all our summary books and past paper solutions are strictly based on the latest Gujarat University syllabus for the 2024-25 academic year.' },
    { question: 'How do I access the PDF after payment?', answer: "Once your payment is verified, the content will be instantly unlocked in your 'My Library' dashboard. You can also access it through the YD App using your registered mobile number." },
    { question: 'Can I print these notes?', answer: 'Our notes are designed for digital reading within the YD App and website to prevent unauthorized distribution. Printing is currently disabled to protect our original content.' },
    { question: "How do I pay if I don't have UPI?", answer: 'While UPI is our preferred method, you can contact us via WhatsApp for alternative payment options like Bank Transfer or QR code payment.' }
  ];

  const data = faqs.length ? faqs : fallbackFaqs;

  return (
    <section id="faq" className="bg-muted py-24 border-y scroll-mt-10">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-navy">Everything you need to know</h3>
        </div>
        
        <div className="space-y-4">
          {data.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)} 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h4 className="font-bold text-lg text-navy pr-4">{f.question}</h4>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground">
                  <p>{f.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}