const PLAY_URL = 'https://play.google.com/store/apps/details?id=in.ydapp.app';

function PageLines({ accent }) {
  return (
    <>
      <div className={`h-[3px] rounded ${accent ? 'bg-primary w-[70%]' : 'bg-[#C9D0E8]'}`}></div>
      <div className="h-[3px] rounded bg-[#C9D0E8] w-[85%]"></div>
      <div className="h-[3px] rounded bg-[#C9D0E8]"></div>
      <div className="h-[3px] rounded bg-[#C9D0E8] w-[60%]"></div>
    </>
  );
}

export default function Hero() {
  return (
    <header className="bg-yd ruled px-4 pt-7 pb-8 md:pt-12 md:pb-14">
      <div className="mx-auto max-w-xl flex flex-col items-center gap-[18px] text-center">
        <p className="bg-navy text-white font-bold text-[13px] tracking-wide px-4 py-2 rounded-full">
          For B.Com Students · Gujarat University
        </p>

        {/* Animated book — a page turns */}
        <div aria-hidden="true" className="relative flex justify-center w-[132px] h-[84px]" style={{ perspective: '600px' }}>
          <div className="w-16 h-20 bg-white rounded-l-lg rounded-r-sm flex flex-col gap-[7px] px-2.5 py-3.5 shadow-[inset_-6px_0_0_#E8EBF5,0_6px_0_rgba(15,31,92,.15)]">
            <PageLines />
          </div>
          <div className="w-16 h-20 bg-white rounded-r-lg rounded-l-sm flex flex-col gap-[7px] px-2.5 py-3.5 shadow-[inset_6px_0_0_#E8EBF5,0_6px_0_rgba(15,31,92,.15)]">
            <PageLines accent />
          </div>
          <div className="absolute left-[66px] top-0 w-16 h-20 bg-[#F7F8FC] border border-[#E3E7F2] rounded-r-lg rounded-l-sm yd-flip"></div>
        </div>

        <div className="w-full bg-white rounded-3xl px-5 pt-6 pb-7 shadow-[0_10px_0_rgba(15,31,92,.12)]">
          <h1 className="font-display">
            <span className="block font-bold text-xl md:text-2xl text-primary">All Semester</span>
            <span className="block font-extrabold text-[58px] md:text-7xl leading-none tracking-[-1.5px] text-primary mt-1">Books</span>
            <span className="block font-extrabold text-[72px] md:text-[88px] leading-none tracking-[-2px] text-navy">FREE!</span>
          </h1>
          <svg aria-hidden="true" width="220" height="18" viewBox="0 0 220 18" fill="none" className="block mx-auto mt-1">
            <path d="M4 12 C 50 3, 120 3, 216 10" stroke="#FFC72C" strokeWidth="6" strokeLinecap="round" className="yd-draw" />
          </svg>
        </div>

        <div>
          <p className="font-extrabold text-base">English Medium available</p>
          <p className="font-gujarati font-semibold text-[15px] text-[#2E3560] mt-0.5">ગુજરાતી માધ્યમ જલ્દી ઉપલબ્ધ થશે</p>
        </div>

        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[420px] min-h-[56px] bg-navy text-white rounded-2xl flex items-center justify-center gap-3 font-display font-bold text-[17px] hover:bg-primary transition-colors shadow-lg"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="#FFC72C">
            <path d="M5 3.5v17a1 1 0 0 0 1.5.87l14-8.5a1 1 0 0 0 0-1.74l-14-8.5A1 1 0 0 0 5 3.5z" />
          </svg>
          Download on Google Play
        </a>
      </div>
    </header>
  );
}
