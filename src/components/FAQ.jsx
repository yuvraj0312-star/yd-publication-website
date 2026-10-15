import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: 'Are the books as per the NEP syllabus?', answer: 'Yes. All books, IMP books and past papers follow the latest Gujarat University NEP syllabus.' },
  { question: 'Which mediums are available?', answer: 'Books are available in English medium. Gujarati medium is coming soon. University past papers solutions are available in both Gujarati and English medium.' },
  { question: 'Can I study on a tablet?', answer: 'Yes. YD App works on Android phones and tablets.' },
  { question: 'Can I print the notes?', answer: 'No. The content is designed for reading inside YD App to prevent unauthorised sharing, so printing is disabled.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-4 py-9 md:py-14 scroll-mt-20">
      <div className="mx-auto max-w-3xl flex flex-col gap-2.5">
        <h2 className="font-display font-extrabold text-[26px] md:text-4xl mb-1">Common questions</h2>
        {faqs.map((f, i) => (
          <div key={i} className="border border-[#E3E7F2] rounded-2xl">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full text-left p-4 flex justify-between items-center gap-3 font-extrabold text-[15.5px]"
            >
              {f.question}
              {open === i ? <Minus className="h-5 w-5 text-primary shrink-0" /> : <Plus className="h-5 w-5 text-primary shrink-0" />}
            </button>
            {open === i && <p className="px-4 pb-4 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
