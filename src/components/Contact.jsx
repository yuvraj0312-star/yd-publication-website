import { useState } from 'react';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id: 'YOUR_PUBLIC_KEY',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'support@ydapp.in',
          },
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
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
                <p className="text-muted-foreground">We will get back to you at support@ydapp.in soon.</p>
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
