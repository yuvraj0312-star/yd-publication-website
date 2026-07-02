import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

// ⚠️ REPLACE THESE with your JSONBin values to capture real votes privately
const BIN_ID = 'YOUR_BIN_ID';
const MASTER_KEY = 'YOUR_MASTER_KEY';

export default function Poll() {
  const [open, setOpen] = useState(false);
  const [voted, setVoted] = useState(false);
  const [choice, setChoice] = useState(null);
  const [display, setDisplay] = useState({ a: 0, b: 0 });
  const [animateBars, setAnimateBars] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const triggerRef = useRef(null);
  const hasTriggered = useRef(false);

  function burstConfetti() {
    const colors = ['#2E75B6', '#FFD700', '#375623', '#C00000', '#1F3864', '#3b82f6'];
    const pieces = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: 50 + (Math.random() * 40 - 20),
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: (Math.random() * 2 - 1) * 220,
      dy: -(120 + Math.random() * 260),
      rot: Math.random() * 720 - 360,
      delay: Math.random() * 0.12,
      size: 7 + Math.random() * 7,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 2200);
  }

  // Auto pop-up when user scrolls to this point
  useEffect(() => {
    const prevVote = window.localStorage ? localStorage.getItem('yd_poll_choice') : null;
    const dismissed = window.localStorage ? localStorage.getItem('yd_poll_dismissed') : null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current && !dismissed) {
            hasTriggered.current = true;
            if (prevVote) {
              setVoted(true);
              setChoice(prevVote);
              const saved = localStorage.getItem('yd_poll_display');
              if (saved) setDisplay(JSON.parse(saved));
            }
            setTimeout(() => setOpen(true), 400);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open && voted) setTimeout(() => setAnimateBars(true), 200);
  }, [open, voted]);

  // Public total starts at 1589 and increases by exactly 1 per real vote (shared via JSONBin).
  // Split always shown ~72% for ₹500 (b) and ~28% for ₹125 (a), regardless of actual choice.
  async function getPublicCounts(picked) {
    let total = 1589;
    if (BIN_ID !== 'YOUR_BIN_ID') {
      try {
        const r = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, { headers: { 'X-Master-Key': MASTER_KEY } });
        const j = await r.json();
        const cur = j.record || { a: 0, b: 0 };
        total = 1589 + (cur.a || 0) + (cur.b || 0);
      } catch {}
    } else {
      // no backend configured yet — fallback so at least this device sees it grow
      const local = parseInt(localStorage.getItem('yd_poll_local_total') || '0', 10);
      total = 1589 + local;
    }
    total += 1; // this vote
    if (BIN_ID === 'YOUR_BIN_ID') {
      localStorage.setItem('yd_poll_local_total', String(total - 1589));
    }
    const b = Math.round(total * 0.72);
    const a = total - b;
    return { a, b };
  }

  async function recordRealVote(picked) {
    if (BIN_ID === 'YOUR_BIN_ID') return;
    try {
      const r = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': MASTER_KEY },
      });
      const j = await r.json();
      const cur = j.record || { a: 0, b: 0 };
      const next = { a: cur.a || 0, b: cur.b || 0 };
      next[picked] += 1;
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': MASTER_KEY },
        body: JSON.stringify(next),
      });
    } catch {}
  }

  const vote = async (picked) => {
    if (voted) return;
    setChoice(picked);
    setVoted(true);
    burstConfetti();
    const counts = await getPublicCounts(picked);
    setDisplay(counts);
    if (window.localStorage) {
      localStorage.setItem('yd_poll_choice', picked);
      localStorage.setItem('yd_poll_display', JSON.stringify(counts));
    }
    setTimeout(() => setAnimateBars(true), 250);
    recordRealVote(picked);
  };

  const close = () => {
    setOpen(false);
    if (window.localStorage) localStorage.setItem('yd_poll_dismissed', '1');
  };

  const total = display.a + display.b || 1;
  const aPct = Math.round((display.a / total) * 100);
  const bPct = 100 - aPct;

  return (
    <>
      {/* invisible scroll trigger anchor */}
      <div ref={triggerRef} className="h-px w-full"></div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 yd-poll-overlay">
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm"></div>

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden yd-poll-pop">
            {/* Confetti burst layer */}
            {confetti.length > 0 && (
              <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                {confetti.map((c) => (
                  <span
                    key={c.id}
                    className="yd-confetti"
                    style={{
                      left: `${c.left}%`,
                      top: '45%',
                      width: `${c.size}px`,
                      height: `${c.size * 0.6}px`,
                      background: c.color,
                      animationDelay: `${c.delay}s`,
                      '--dx': `${c.dx}px`,
                      '--dy': `${c.dy}px`,
                      '--rot': `${c.rot}deg`,
                    }}
                  ></span>
                ))}
              </div>
            )}

            {/* top gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] yd-poll-shimmer"></div>

            <div className="p-7 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide yd-poll-badge">
                  <TrendingUp className="h-3 w-3" /> Quick Poll
                </span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-navy mb-1">Aap kaunsa plan lena chahoge? 🤔</h3>
              <p className="text-muted-foreground text-sm mb-6">Bas ek tap — koi detail nahi puchi jayegi!</p>

              {!voted ? (
                <div className="space-y-4">
                  <button
                    onClick={() => vote('a')}
                    className="w-full text-left p-5 rounded-2xl border-2 border-border bg-white hover:border-primary hover:bg-primary/5 hover:scale-[1.02] active:scale-100 transition-all group yd-poll-opt"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-display font-extrabold text-navy">₹125</p>
                        <p className="text-xs text-muted-foreground mt-0.5">One Semester · 6 Months</p>
                      </div>
                      <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">Vote</span>
                    </div>
                  </button>
                  <button
                    onClick={() => vote('b')}
                    className="w-full text-left p-5 rounded-2xl border-2 border-border bg-white hover:border-primary hover:bg-primary/5 hover:scale-[1.02] active:scale-100 transition-all group yd-poll-opt yd-poll-opt-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-display font-extrabold text-navy">₹500</p>
                        <p className="text-xs text-muted-foreground mt-0.5">All Semesters (1-6) · 3 Years</p>
                      </div>
                      <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">Vote</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="space-y-4 yd-poll-results">
                  <div className={`p-4 rounded-2xl border-2 ${choice === 'a' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-navy text-sm flex items-center gap-1.5">
                        ₹125 · One Semester {choice === 'a' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                      </span>
                      <span className="font-extrabold text-navy">{aPct}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full transition-all duration-1000 ease-out" style={{ width: animateBars ? `${aPct}%` : '0%' }}></div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border-2 ${choice === 'b' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-navy text-sm flex items-center gap-1.5">
                        ₹500 · All Semesters {choice === 'b' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                      </span>
                      <span className="font-extrabold text-primary">{bPct}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: animateBars ? `${bPct}%` : '0%' }}></div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-1">
                    <span className="font-bold text-navy">{total.toLocaleString('en-IN')}</span> students ne vote kiya · Aapka vote add ho gaya ✅
                  </p>
                  <button onClick={close} className="w-full bg-navy text-white font-bold py-3 rounded-xl hover:bg-primary transition-colors">
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>

          <style>{`
            .yd-poll-overlay { animation: ydFade 0.3s ease-out; }
            @keyframes ydFade { from { opacity: 0; } to { opacity: 1; } }
            .yd-poll-pop { animation: ydPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
            @keyframes ydPop { 0% { transform: scale(0.8) translateY(30px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
            .yd-poll-shimmer { animation: ydShimmer 2.5s linear infinite; }
            @keyframes ydShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
            .yd-poll-badge { animation: ydPulse 1.8s ease-in-out infinite; }
            @keyframes ydPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
            .yd-poll-opt { animation: ydSlideUp 0.5s ease-out backwards; animation-delay: 0.15s; }
            .yd-poll-opt-2 { animation-delay: 0.28s; }
            @keyframes ydSlideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
            .yd-poll-results { animation: ydSlideUp 0.4s ease-out; }
            .yd-confetti {
              position: absolute;
              border-radius: 2px;
              opacity: 0;
              animation: ydConfetti 1.8s ease-out forwards;
            }
            @keyframes ydConfetti {
              0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
              100% { opacity: 0; transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
