import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 container mx-auto max-w-7xl px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">What Students Say</h2>
        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-navy">Trusted by 900+ Students</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="rounded-2xl border bg-white p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mb-6 text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="text-lg text-navy italic mb-8 leading-relaxed">"The summary books are a lifesaver! I started studying just 10 days before exams and managed to score 75% in Statistics."</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">R</div>
            <div>
              <p className="font-bold text-navy">Raj Patel</p>
              <p className="text-xs text-muted-foreground">GLS University</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial 2 */}
        <div className="rounded-2xl border bg-white p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mb-6 text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="text-lg text-navy italic mb-8 leading-relaxed">"Solved past papers helped me understand the GU exam pattern perfectly. The ₹75 price is totally worth it for the whole semester."</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center font-bold text-green-600">K</div>
            <div>
              <p className="font-bold text-navy">Khushal Sharma</p>
              <p className="text-xs text-muted-foreground">Lokmanya Collage of Commerce</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="rounded-2xl border bg-white p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mb-6 text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="text-lg text-navy italic mb-8 leading-relaxed">"Finally, content that is actually mapped to our Gujarat University syllabus. No more searching through massive textbooks."</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center font-bold text-purple-600">V</div>
            <div>
              <p className="font-bold text-navy">Vans Kantiliya</p>
              <p className="text-xs text-muted-foreground">Narayan Guru commerce collage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}