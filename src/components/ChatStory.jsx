import { useState, useEffect, useRef, useCallback } from 'react';
import { Check, CheckCheck, RotateCcw, Download, ChevronLeft, ChevronRight } from 'lucide-react';

// Each scene is its own "screen" — it fully replaces the one before it.
// type: 'sent' (you), 'reaction' (cutaway: their face + real thought), 'received' (YD), 'card', 'badge'
const SCENES = [
  {
    key: 'A',
    header: { name: 'Aryan', sub: 'online' },
    beats: [
      { type: 'sent', text: 'Bhai Stats ki notes ki photo bhej dena thoda 🙏', hold: 1100 },
      { type: 'reaction', face: '😏', name: 'Aryan', bg: 'from-amber-100 to-orange-50', ring: 'ring-amber-300', thought: 'Ye firse maangne aaya... thoda wait karwate hai isko 😌', hold: 2100 },
      { type: 'badge', text: 'AURA + Ijjat –50% 🔻', tone: 'bad', hold: 1800 },
    ],
  },
  {
    key: 'B',
    header: { name: 'B.Com Sem 3 🎓', sub: '38 members' },
    beats: [
      { type: 'sent', text: 'Guys, Cost Accounting ki PDF kisi ke paas hai kya? 🙏', hold: 1100 },
      { type: 'reaction', face: '🙄', name: 'Priya', bg: 'from-rose-100 to-pink-50', ring: 'ring-rose-300', thought: 'Maine to paiso se li thi... free mein kyun doon? 😅', hold: 2000 },
      { type: 'reaction', face: '🙈', name: 'Karan', bg: 'from-amber-100 to-yellow-50', ring: 'ring-amber-300', thought: '+1, mujhe bhi chahiye thi... par hai kisi ke paas nahi 🤷', hold: 1900 },
      { type: 'badge', text: 'Aura + IJJAT Down –40% 😶', tone: 'bad', hold: 1800 },
    ],
  },
  {
    key: 'C',
    header: { name: 'YD Publication', sub: 'Official', brand: true },
    beats: [
      { type: 'received', text: 'Ruk ja, tension mat le 😌...AURA khrab nai hona chahiye dusro k samne', hold: 1500 },
      { type: 'received', text: 'Sem ki saari Books + Summary + Past Papers + Past Papers — bas ek coffee ki price mein ☕📚', hold: 1900 },
      { type: 'card', hold: 1400 },
      { type: 'badge', text: 'AURA fully recharged 💯🔥', tone: 'good', confetti: true, hold: 600 },
    ],
  },
];

export default function ChatStory() {
  const [sceneIdx, setSceneIdx] = useState(-1);
  const [beatIdx, setBeatIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const wrapRef = useRef(null);
  const timers = useRef([]);
  const hasStarted = useRef(false);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const burstConfetti = () => {
    const colors = ['#2E75B6', '#FFD700', '#1F3864', '#22c55e', '#3b82f6'];
    const pieces = Array.from({ length: 24 }).map((_, i) => ({
      id: i, left: 50 + (Math.random() * 60 - 30), color: colors[i % colors.length],
      dx: (Math.random() * 2 - 1) * 140, dy: -(80 + Math.random() * 160), rot: Math.random() * 500 - 250, delay: Math.random() * 0.1,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 1400);
  };

  const playScene = useCallback((idx) => {
    if (idx >= SCENES.length) { setDone(true); return; }
    setSceneIdx(idx);
    setBeatIdx(0);
    const scene = SCENES[idx];
    let elapsed = 0;
    scene.beats.forEach((beat, i) => {
      elapsed += beat.hold;
      const t = setTimeout(() => {
        setBeatIdx(i + 1);
        if (beat.confetti) burstConfetti();
        if (i === scene.beats.length - 1) {
          const t2 = setTimeout(() => playScene(idx + 1), 750);
          timers.current.push(t2);
        }
      }, elapsed);
      timers.current.push(t);
    });
  }, []);

  const goToScene = (idx) => {
    if (idx < 0 || idx >= SCENES.length) return;
    clearTimers();
    setConfetti([]);
    setSceneIdx(idx);
    setBeatIdx(SCENES[idx].beats.length);
    setDone(idx === SCENES.length - 1);
  };

  const play = useCallback(() => {
    clearTimers();
    setDone(false);
    setConfetti([]);
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setSceneIdx(SCENES.length - 1);
      setBeatIdx(SCENES[SCENES.length - 1].beats.length);
      setDone(true);
      return;
    }
    playScene(0);
  }, [playScene]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted.current) { hasStarted.current = true; play(); }
      }),
      { threshold: 0.3 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  useEffect(() => () => clearTimers(), []);

  const scene = sceneIdx >= 0 ? SCENES[sceneIdx] : null;
  const beats = scene ? scene.beats.slice(0, beatIdx) : [];

  const TickIcon = () => <CheckCheck className="h-3.5 w-3.5 text-blue-300" />;

  return (
    <section ref={wrapRef} className="bg-muted py-12 border-y overflow-hidden">
      <style>{`
        .yd-scene-in { animation: ydSceneIn .35s ease-out; }
        @keyframes ydSceneIn { from { opacity:0; transform: translateX(16px); } to { opacity:1; transform: translateX(0); } }
        .yd-beat-in { animation: ydBeatIn .3s ease-out; }
        @keyframes ydBeatIn { from { opacity:0; transform: translateY(8px) scale(.96); } to { opacity:1; transform: translateY(0) scale(1); } }
        .yd-badge-in { animation: ydBadgeIn .4s cubic-bezier(.34,1.56,.64,1); }
        @keyframes ydBadgeIn { from { opacity:0; transform: scale(.7); } to { opacity:1; transform: scale(1); } }
        .yd-confetti { position:absolute; border-radius:2px; opacity:0; animation: ydConfetti 1.3s ease-out forwards; }
        @keyframes ydConfetti { 0% { opacity:1; transform: translate(0,0) rotate(0); } 100% { opacity:0; transform: translate(var(--dx),var(--dy)) rotate(var(--rot)); } }
      `}</style>

      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Sach Wali Kahani</h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-navy">Har student ki yehi kahani hoti hai</h3>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl border border-border shadow-xl overflow-hidden relative">
          {/* progress segments */}
          <div className="flex gap-1.5 px-4 pt-3">
            {SCENES.map((s, i) => (
              <div key={s.key} className="h-1 flex-1 rounded-full bg-border overflow-hidden">
                <div className={`h-full bg-primary transition-all duration-500 ${i < sceneIdx || done ? 'w-full' : i === sceneIdx ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>

          {/* header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${scene?.header.brand ? 'bg-navy text-white' : 'bg-primary/10 text-primary'}`}>
              {scene?.header.brand ? 'YD' : (scene?.header.name?.[0] || '💬')}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-navy text-sm truncate">{scene?.header.name || 'Kahani shuru ho rahi hai...'}</p>
              <p className="text-xs text-muted-foreground truncate">{scene?.header.sub || ''}</p>
            </div>
          </div>

          {/* prev/next arrows to review any chat again */}
          {sceneIdx > 0 && (
            <button
              onClick={() => goToScene(sceneIdx - 1)}
              aria-label="Previous chat"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-white/95 border border-border shadow-md flex items-center justify-center text-navy hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          {sceneIdx > -1 && sceneIdx < SCENES.length - 1 && (
            <button
              onClick={() => goToScene(sceneIdx + 1)}
              aria-label="Next chat"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-white/95 border border-border shadow-md flex items-center justify-center text-navy hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          {/* scene content — fully swaps, never stacks */}
          <div key={sceneIdx} className="px-5 py-6 space-y-3 min-h-[340px] flex flex-col justify-center yd-scene-in relative">
            {confetti.length > 0 && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                {confetti.map((c) => (
                  <span key={c.id} className="yd-confetti" style={{ left: `${c.left}%`, top: '30%', width: '7px', height: '4px', background: c.color, animationDelay: `${c.delay}s`, '--dx': `${c.dx}px`, '--dy': `${c.dy}px`, '--rot': `${c.rot}deg` }}></span>
                ))}
              </div>
            )}

            {beats.map((beat, i) => {
              if (beat.type === 'sent') {
                return (
                  <div key={i} className="flex justify-end yd-beat-in">
                    <div className="max-w-[80%] bg-navy text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
                      {beat.text}
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <TickIcon />
                      </div>
                    </div>
                  </div>
                );
              }
              if (beat.type === 'reaction') {
                return (
                  <div key={i} className={`yd-beat-in bg-gradient-to-br ${beat.bg} border border-border rounded-2xl p-4 flex items-center gap-3`}>
                    <div className={`h-14 w-14 rounded-full bg-white flex items-center justify-center text-3xl shrink-0 ring-4 ${beat.ring}`}>
                      {beat.face}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-navy/60 uppercase tracking-wide mb-0.5">{beat.name} soch raha/rahi hai...</p>
                      <p className="text-sm font-semibold text-navy leading-snug">{beat.thought}</p>
                    </div>
                  </div>
                );
              }
              if (beat.type === 'received') {
                return (
                  <div key={i} className="flex justify-start yd-beat-in">
                    <div className="max-w-[80%] bg-primary/10 text-navy px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed font-medium">
                      {beat.text}
                    </div>
                  </div>
                );
              }
              if (beat.type === 'card') {
                return (
                  <div key={i} className="flex justify-start yd-beat-in">
                    <div className="max-w-[85%] w-full bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-blue-400"></div>
                      <div className="p-4">
                        <p className="font-bold text-navy text-sm mb-1">YD App</p>
                        <p className="text-xs text-muted-foreground mb-3">✅ Verified &amp; Tested Books + IMP Books — bas ₹125 poore semester ke liye</p>
                        <a href="#products" className="flex items-center justify-center gap-2 w-full bg-navy text-white text-xs font-bold py-2.5 rounded-xl hover:bg-primary transition-colors">
                          <Download className="h-3.5 w-3.5" /> Download Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              if (beat.type === 'badge') {
                return (
                  <div key={i} className="flex justify-center py-1 yd-badge-in">
                    <span className={`text-sm font-extrabold px-5 py-2.5 rounded-full ${beat.tone === 'good' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                      {beat.text}
                    </span>
                  </div>
                );
              }
              return null;
            })}

            {sceneIdx === -1 && (
              <p className="text-center text-xs text-muted-foreground">Neeche scroll karo, kahani yahin shuru hogi 👇</p>
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
