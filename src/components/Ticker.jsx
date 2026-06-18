import { Bell } from 'lucide-react';

const messages = [
  '🛡️ Trusted by many GU Students — Per semester B.Com books & study material at just ₹125',
  '🛡️ Trusted by many GU Students — All 6 semester B.Com books & study material at just ₹500',
];

export default function Ticker() {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
      <div
        style={{
          display: 'inline-flex',
          animation: 'ticker-scroll 30s linear infinite',
          gap: '80px',
        }}
      >
        {[...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', paddingRight: '80px' }}>
            <Bell size={16} /> {msg}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
