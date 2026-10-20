export default function Ticker() {
  return (
    <div className="bg-navy text-white px-4 py-2.5 flex items-center justify-center gap-2.5 text-[13px] font-bold text-center">
      <span className="h-2 w-2 rounded-full bg-yd shrink-0 yd-blink" aria-hidden="true"></span>
      <span>Now in Gujarati medium — only on YD App</span>
    </div>
  );
}
