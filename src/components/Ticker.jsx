import { Bell } from 'lucide-react';

export default function Ticker({ items =[] }) {
  const data = items.length ? items :[
    { text: '🛡️ Trusted by many GU Students — Per semester B.Com books & study material at just ₹125' },
    { text: '🛡️ Trusted by many GU Students — All 6 semester B.Com books & study material at just ₹500' },
    { text: '' }
  ];
  
  return (
    <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10 relative flex">
      <div className="flex animate-marquee gap-12 items-center min-w-full pl-4 pr-12">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-bold">
            <Bell className="h-4 w-4" /> {item.text}
          </div>
        ))}
      </div>
      <div className="flex animate-marquee gap-12 items-center min-w-full pl-4 pr-12" aria-hidden="true">
        {data.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-2 text-sm font-bold">
            <Bell className="h-4 w-4" /> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
