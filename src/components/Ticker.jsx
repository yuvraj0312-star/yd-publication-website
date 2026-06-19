import { Bell } from 'lucide-react';

export default function Ticker() {
  return (
    <div style={{
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '10px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      width: '100%',
      textAlign: 'center',
    }}>
      <span style={{ fontSize: '14px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        Per semester B.Com books &amp; study material at just ₹125 - 6 months validity &nbsp;&nbsp;|&nbsp;&nbsp;
        All 6 semesters B.Com books &amp; study material at just ₹500 - 3 years validity
      </span>
    </div>
  );
}
