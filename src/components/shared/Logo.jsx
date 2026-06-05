
const Logo = ({ size = 60, className = '' }) => {
  
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definition of text paths */}
        <defs>
          {/* Top text path - clockwise arch over the top */}
          <path
            id="topTextPath"
            d="M 30,100 A 70,70 0 0,1 170,100"
            fill="none"
          />
          {/* Bottom text path - clockwise arch under the bottom, going right to left so text is right-side up */}
          <path
            id="bottomTextPath"
            d="M 170,100 A 70,70 0 0,1 30,100"
            fill="none"
          />
        </defs>

        {/* Circular background */}
        <circle cx="100" cy="100" r="95" className="fill-brand-forest" />

        {/* Outer thin white circle */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="#F7F5F0" strokeWidth="2" />

        {/* Inner thin white circle (inside text) */}
        <circle cx="100" cy="100" r="62" fill="none" stroke="#F7F5F0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#F7F5F0" strokeWidth="1" opacity="0.8" />

        {/* Top arched text: GREENS & GUILTY PLEASURES */}
        <text className="fill-brand-ivory font-sans font-medium uppercase tracking-[0.18em]" style={{ fontSize: '12.5px' }}>
          <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
            Greens & Guilty Pleasures
          </textPath>
        </text>

        {/* Center Text: BNB */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className="fill-brand-ivory font-sans font-bold"
          style={{ fontSize: '42px', letterSpacing: '1px' }}
        >
          BNB
        </text>

        {/* Sub-Center Text: EST 2025 */}
        <text
          x="100"
          y="126"
          textAnchor="middle"
          className="fill-brand-gold font-sans font-medium uppercase tracking-widest"
          style={{ fontSize: '9px' }}
        >
          Est 2025
        </text>

        {/* Bottom arched text: SERVED DAILY */}
        <text className="fill-brand-ivory font-sans font-semibold uppercase tracking-[0.22em]" style={{ fontSize: '13px' }}>
          <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
            Served Daily
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
