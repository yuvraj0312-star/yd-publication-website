import { useState } from 'react';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_lgo3eba',
          template_id: 'template_8dz3zun',
          user_id: 'HzMzGJCZFJaCS8DSM',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });

      const text = await res.text();
      if (res.status === 200 || text === 'OK') {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error('EmailJS error:', res.status, text);
        setStatus('error');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-12 scroll-mt-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy">We're here to help</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a question about study material, the app, or want to become a campus ambassador? Reach out — we reply fast.
            </p>
            <div className="space-y-6">
              <a href="https://wa.me/919537743279?text=Hi%20YD%20App%20team%2C%20I%20have%20a%20payment%20issue.%0APayment%20ID%3A%20%0AOrder%20ID%3A%20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group" aria-label="Chat with us on WhatsApp at +91 95377 43279">
                <div className="h-14 w-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37a9.82 9.82 0 0 1-1.5-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.85 9.85zm8.4-18.25A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.88 0-3.18-1.24-6.16-3.49-8.4z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp us</p>
                  <p className="font-bold text-navy text-lg group-hover:text-primary transition-colors">+91 95377 43279</p>
                </div>
              </a>
              <div className="rounded-2xl border border-[#F2C94C] bg-[#FFF8E1] p-4 text-sm text-navy leading-relaxed">
                <p className="font-bold mb-1">Facing a payment issue?</p>
                <p>We're sorry for the trouble. Kindly WhatsApp us screenshots of your <span className="font-semibold">Payment ID</span> and <span className="font-semibold">Order ID</span>. We'll resolve your issue within 24–48 hours.</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email us</p>
                  <p className="font-bold text-navy text-lg">support@ydapp.in</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Follow us</p>
                  <p className="font-bold text-navy text-lg">@ydappofficial</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-bold text-navy text-lg">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 md:p-10 rounded-3xl border shadow-sm">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-navy mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">We will get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-primary font-semibold hover:underline">Send another message</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Your name</label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="e.g. Raj Patel" className="w-full h-12 rounded-xl bg-white border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Email address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="yourname@example.com" className="w-full h-12 rounded-xl bg-white border border-border px-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className="w-full min-h-[130px] rounded-xl bg-white border border-border p-4 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y" placeholder="What would you like to know?" required></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please email us directly at support@ydapp.in</p>
                )}
                <button type="submit" disabled={status === 'sending'} className="w-full h-14 text-lg font-bold flex items-center justify-center gap-2 bg-navy text-white hover:bg-navy-light rounded-xl transition-colors shadow-md disabled:opacity-60">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
