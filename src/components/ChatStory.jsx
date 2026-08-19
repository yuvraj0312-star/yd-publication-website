import { useState, useEffect, useRef, useCallback } from 'react';
import { Check, CheckCheck, RotateCcw, Download } from 'lucide-react';

// The full story, told as a chat feed that plays out on its own once scrolled into view.
// Screen A: 1-on-1 friend — long wait, seen, no reply (Aura hit #1)
// Screen B: class group — everyone dodges sharing (Aura hit #2)
// Screen C: YD Publication — the fix (Aura restored)
const STEPS = [
  { screen: 'A', type: 'header', name: 'Aryan', sub: 'online' },
  { screen: 'A', type: 'sent', text: 'Bhai Stats ki notes ki photo bhej dena thoda 🙏', tick: 'sent', wait: 700 },
  { screen: 'A', type: 'tick-update', tick: 'delivered', wait: 900 },
  { screen: 'A', type: 'typing', wait: 1800 },
  { screen: 'A', type: 'typing-stop', wait: 1400 },
  { screen: 'A', type: 'tick-update', tick: 'seen', meta: 'Seen 11:52 PM', wait: 1200 },
  { screen: 'A', type: 'caption', text: 'AURA –40 🔻 (bohot der wait karwaya, reply hi nahi aaya)', tone: 'bad', wait: 2200 },

  { screen: 'B', type: 'header', name: 'B.Com Sem 3 🎓', sub: '38 members' },
  { screen: 'B', type: 'sent', text: 'Guys, Cost Accounting ki PDF kisi ke paas hai kya? 🙏', tick: 'seen', wait: 900 },
  { screen: 'B', type: 'received', name: 'Priya', color: 'bg-rose-100 text-rose-600', text: 'Maine to paiso se li thi yaar, free mein kaise doon 😅', wait: 1400 },
  { screen: 'B', type: 'received', name: 'Karan', color: 'bg-amber-100 text-amber-600', text: '+1, mujhe bhi chahiye thi 🙈', wait: 1200 },
  { screen: 'B', type: 'caption', text: 'IJJAT –30 😶 (koi PDF nahi mili, sab apna bacha rahe hai)', tone: 'bad', wait: 2200 },

  { screen: 'C', type: 'header', name: 'YD Publication', sub: 'Official', brand: true },
  { screen: 'C', type: 'received', name: 'YD', color: 'bg-primary/10 text-primary', text: 'Ruk ja bhai, tension mat le 😌', wait: 1100 },
  { screen: 'C', type: 'received', name: 'YD', color: 'bg-primary/10 text-primary', text: 'Sem ki saari Books + Summary + Past Papers — bas ek coffee ki price mein ☕📚', wait: 1400 },
  { screen: 'C', type: 'card', wait: 900 },
  { screen: 'C', type: 'caption', text: 'AURA fully recharged 💯🔥', tone: 'good', wait: 400 },
];

function TypingDots() {
  return (
    <span className="inline-flex gap-1 items-center px-4 py-3 rounded-2xl rounded-bl-sm bg-muted">
      <span className="yd-dot" style={{ animationDelay: '0ms' }}></span>
      <span className="yd-dot" style={{ animationDelay: '150ms' }}></span>
      <span className="yd-dot" style={{ animationDelay: '300ms' }}></span>
    </span>
  );
}

export default function ChatStory() {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [ticks, setTicks] = useState({});
  const [showTyping, setShowTyping] = useState(false);
  const wrapRef = useRef(null);
  const timers = useRef([]);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const play = useCallback(() => {
    clearTimers();
    setVisible(0);
    setDone(false);
    setShowTyping(false);
    setTicks({});
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setVisible(STEPS.length);
      setDone(true);
      const t = {};
      STEPS.forEach((s, i) => { if (s.type === 'sent' || s.type === 'tick-update') t.a = s.tick || t.a; });
      setTicks({ a: 'seen' });
      return;
    }

    let elapsed = 0;
    STEPS.forEach((step, i) => {
      elapsed += step.wait || 800;
      const t = setTimeout(() => {
        if (step.type === 'typing') setShowTyping(true);
        if (step.type === 'typing-stop') setShowTyping(false);
        if (step.type === 'tick-update') setTicks((p) => ({ ...p, a: step.tick, meta: step.meta }));
        setVisible(i + 1);
        if (i === STEPS.length - 1) setDone(true);
      }, elapsed);
      timers.current.push(t);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            play();
          }
        });
      },
      { threshold: 0.35 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => { observer.disconnect(); clearTimers(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, play]);

  const shown = STEPS.slice(0, visible);
  const currentHeader = [...shown].reverse().find((s) => s.type === 'header');

  const TickIcon = ({ state }) => {
    if (state === 'sent') return <Check className="h-3.5 w-3.5 text-white/70" />;
    if (state === 'delivered') return <CheckCheck className="h-3.5 w-3.5 text-white/70" />;
    if (state === 'seen') return <CheckCheck className="h-3.5 w-3.5 text-blue-300" />;
    return null;
  };

  return (
    <section ref={wrapRef} className="bg-muted py-12 border-y">
      <style>{`
        @keyframes ydDotBounce { 0%,60%,100% { transform: translateY(0); opacity: .4; } 30% { transform: translateY(-4px); opacity: 1; } }
        .yd-dot { width: 6px; height: 6px; border-radius: 999px; background: #64748b; display:inline-block; animation: ydDotBounce 1s infinite ease-in-out; }
        .yd-bubble-in { animation: ydBubbleIn .35s ease-out; }
        @keyframes ydBubbleIn { from { opacity:0; transform: translateY(8px) scale(.97); } to { opacity:1; transform: translateY(0) scale(1); } }
        .yd-caption-in { animation: ydCaptionIn .4s ease-out; }
        @keyframes ydCaptionIn { from { opacity:0; transform: scale(.9); } to { opacity:1; transform: scale(1); } }
      `}</style>

      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Sach Wali Kahani</h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy">Har student ki yehi kahani hoti hai</h3>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
          {/* header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-white sticky top-0 z-10">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${currentHeader?.brand ? 'bg-navy text-white' : 'bg-primary/10 text-primary'}`}>
              {currentHeader?.brand ? 'YD' : (currentHeader?.name?.[0] || '?')}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-navy text-sm truncate">{currentHeader?.name || '...'}</p>
              <p className="text-xs text-muted-foreground truncate">{currentHeader?.sub || ''}</p>
            </div>
          </div>

          {/* messages */}
          <div className="px-5 py-6 space-y-3 min-h-[380px] bg-gradient-to-b from-muted/40 to-white">
            {shown.map((step, i) => {
              if (step.type === 'header') return null;

              if (step.type === 'sent' || step.type === 'tick-update') {
                if (step.type === 'tick-update') return null;
                return (
                  <div key={i} className="flex justify-end yd-bubble-in">
                    <div className="max-w-[75%] bg-navy text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
                      {step.text}
                      <div className="flex items-center justify-end gap-1 mt-1">
                        {ticks.meta && <span className="text-[10px] text-white/60">{ticks.meta}</span>}
                        <TickIcon state={ticks.a || step.tick} />
                      </div>
                    </div>
                  </div>
                );
              }

              if (step.type === 'received') {
                return (
                  <div key={i} className="flex justify-start items-end gap-2 yd-bubble-in">
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${step.color}`}>
                      {step.name[0]}
                    </div>
                    <div className="max-w-[75%] bg-muted text-navy px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed">
                      <p className="text-[11px] font-bold text-muted-foreground mb-0.5">{step.name}</p>
                      {step.text}
                    </div>
                  </div>
                );
              }

              if (step.type === 'card') {
                return (
                  <div key={i} className="flex justify-start yd-bubble-in">
                    <div className="max-w-[80%] bg-white border border-border rounded-2xl rounded-bl-sm overflow-hidden shadow-sm">
                      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-blue-400"></div>
                      <div className="p-4">
                        <p className="font-bold text-navy text-sm mb-1">YD App</p>
                        <p className="text-xs text-muted-foreground mb-3">₹125 se shuru · Sem 1 to 6</p>
                        <a href="#products" className="flex items-center justify-center gap-2 w-full bg-navy text-white text-xs font-bold py-2.5 rounded-xl hover:bg-primary transition-colors">
                          <Download className="h-3.5 w-3.5" /> Explore Study Material
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              if (step.type === 'caption') {
                return (
                  <div key={i} className="flex justify-center py-2 yd-caption-in">
                    <span className={`text-xs font-bold px-4 py-2 rounded-full ${step.tone === 'good' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                      {step.text}
                    </span>
                  </div>
                );
              }

              return null;
            })}

            {showTyping && (
              <div className="flex justify-start">
                <TypingDots />
              </div>
            )}
          </div>

          {done && (
            <div className="border-t border-border px-5 py-3 flex justify-center bg-white">
              <button onClick={play} className="flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                <RotateCcw className="h-3.5 w-3.5" /> Dobara dekho
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
