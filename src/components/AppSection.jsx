import { Check } from 'lucide-react';

export default function AppSection() {
  return (
    <section id="app" className="container mx-auto max-w-7xl py-12 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">YD App — Live on Google Play Store</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy leading-tight">All your study material. One app.</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            YD App is an Android app (and soon live on Apple App store also), built for Gujarat University B.Com students. Buy access to any semester for just ₹125 and study anytime — with secure, encrypted content.
          </p>
          <ul className="flex flex-wrap justify-center gap-3 mb-10">
            <li className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-navy font-medium text-sm">Email OTP login</span>
            </li>
            <li className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-navy font-medium text-sm">Free Unit 1 preview</span>
            </li>
            <li className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-navy font-medium text-sm">Secure & encrypted content</span>
            </li>
            <li className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-navy font-medium text-sm">Single device per account</span>
            </li>
          </ul>

          <a
            href="https://play.google.com/store/apps/details?id=in.ydapp.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-navy text-white hover:bg-navy-light h-14 px-8 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Click here to Download on Google Play Store
          </a>
        </div>
      </div>
    </section>
  );
}
