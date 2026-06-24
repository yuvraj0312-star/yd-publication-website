import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

// ⚠️ REPLACE THESE TWO LINES with your JSONBin values (instructions provided separately)
const BIN_ID = 'YOUR_BIN_ID';
const MASTER_KEY = 'YOUR_MASTER_KEY';

export default function Poll() {
  const [voted, setVoted] = useState(false);
  const [choice, setChoice] = useState(null);
  const [display, setDisplay] = useState({ a: 0, b: 0 });

  // Check if this device already voted
  useEffect(() => {
    const prev = window.localStorage ? localStorage.getItem('yd_poll_choice') : null;
    if (prev) {
      setVoted(true);
      setChoice(prev);
      setDisplay(computeFakeCounts(prev));
    }
  }, []);

  // Build a realistic-looking public count where ₹500 (option B) holds ~72-76%
  function computeFakeCounts(picked) {
    // base total that grows slowly with a date seed so it looks alive
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 6)); // changes every 6 hrs
    const base = 1240 + (daySeed % 90); // ~1240-1330 votes
    const bPct = 0.72 + ((daySeed % 5) * 0.01); // 72% to 76%
    let b = Math.round(base * bPct);
    let a = base - b;
    // make sure the option the user picked ticks up by 1 (feels responsive)
    if (picked === 'a') a += 1; else b += 1;
    return { a, b };
  }

  // Silently record the REAL vote to your private dashboard
  async function recordRealVote(picked) {
    if (BIN_ID === 'YOUR_BIN_ID') return; // not configured yet, skip silently
    try {
      // read current
      const r = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': MASTER_KEY },
      });
      const j = await r.json();
      const cur = j.record || { a: 0, b: 0 };
      const next = { a: cur.a || 0, b: cur.b || 0 };
      next[picked] += 1;
      // write back
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': MASTER_KEY },
        body: JSON.stringify(next),
      });
    } catch {
      // fail silently — never block the user
    }
  }

  const vote = (picked) => {
    if (voted) return;
    setChoice(picked);
    setVoted(true);
    setDisplay(computeFakeCounts(picked));
    if (window.localStorage) localStorage.setItem('yd_poll_choice', picked);
    recordRealVote(picked);
  };

  const total = display.a + display.b || 1;
  const aPct = Math.round((display.a / total) * 100);
  const bPct = 100 - aPct;

  return (
    <section className="bg-muted py-12 border-y">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Quick Poll</h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy">Aap kaunsa plan lena chahoge?</h3>
          <p className="text-muted-foreground mt-3">Ek option choose karo — koi detail nahi puchi jayegi 👇</p>
        </div>

        {!voted ? (
          <div className="grid sm:grid-cols-2 gap-5">
            <button
              onClick={() => vote('a')}
              className="text-left p-6 rounded-2xl border-2 border-border bg-white hover:border-primary hover:shadow-lg transition-all group"
            >
              <p className="text-2xl font-display font-extrabold text-navy mb-1">₹125</p>
              <p className="text-sm text-muted-foreground">One Semester · 6 Months Validity</p>
              <p className="mt-4 text-primary font-bold text-sm group-hover:underline">Tap to vote →</p>
            </button>
            <button
              onClick={() => vote('b')}
              className="text-left p-6 rounded-2xl border-2 border-border bg-white hover:border-primary hover:shadow-lg transition-all group"
            >
              <p className="text-2xl font-display font-extrabold text-navy mb-1">₹500</p>
              <p className="text-sm text-muted-foreground">All Semesters (1-6) · 3 Years Validity</p>
              <p className="mt-4 text-primary font-bold text-sm group-hover:underline">Tap to vote →</p>
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Option A bar */}
            <div className={`p-5 rounded-2xl border-2 bg-white ${choice === 'a' ? 'border-primary' : 'border-border'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-navy flex items-center gap-2">
                  ₹125 — One Semester {choice === 'a' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                </span>
                <span className="font-bold text-navy">{aPct}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full transition-all duration-700" style={{ width: `${aPct}%` }}></div>
              </div>
            </div>
            {/* Option B bar */}
            <div className={`p-5 rounded-2xl border-2 bg-white ${choice === 'b' ? 'border-primary' : 'border-border'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-navy flex items-center gap-2">
                  ₹500 — All Semesters {choice === 'b' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                </span>
                <span className="font-bold text-navy">{bPct}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${bPct}%` }}></div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground pt-2">
              {total.toLocaleString('en-IN')} students ne vote kiya · Aapka vote add ho gaya ✅
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
