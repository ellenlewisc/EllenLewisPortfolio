const accent = "#0f766e";
const accentSoft = "#e2f3f1";
const ink = "#14202b";
const muted = "#6b7684";
const line = "#e5e9ee";

function Phone({ x, children, title }) {
  return (
    <g>
      <rect x={x} y="60" width="440" height="900" rx="64" fill="#111316" />
      <rect x={x + 14} y="74" width="412" height="872" rx="52" fill="#ffffff" />
      <rect x={x + 170} y="92" width="100" height="28" rx="14" fill="#111316" />
      <text x={x + 220} y="172" fill={ink} fontSize="24" fontWeight="700" textAnchor="middle">
        {title}
      </text>
      <line x1={x + 14} x2={x + 426} y1="196" y2="196" stroke={line} strokeWidth="2" />
      {children}
    </g>
  );
}

function Bubble({ x, y, width, lines, fromUser }) {
  const height = 30 + lines.length * 30;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx="22" fill={fromUser ? accent : "#f1f3f6"} />
      {lines.map((text, i) => (
        <text key={i} x={x + 22} y={y + 42 + i * 30} fill={fromUser ? "#ffffff" : ink} fontSize="20">
          {text}
        </text>
      ))}
    </g>
  );
}

function Toggle({ x, y, label, on }) {
  return (
    <g>
      <text x={x} y={y + 22} fill={ink} fontSize="20">
        {label}
      </text>
      <rect x={x + 290} y={y} width="60" height="32" rx="16" fill={on ? accent : "#d6dbe1"} />
      <circle cx={on ? x + 334 : x + 306} cy={y + 16} r="12" fill="#ffffff" />
    </g>
  );
}

export default function BidrPhonesScreen() {
  const left = 300;
  const right = 860;

  return (
    <svg
      viewBox="0 0 1600 1000"
      role="img"
      aria-label="Illustration of two phone screens: an AI assistant chat turning a job description into a structured service request"
      style={{ display: "block", width: "100%", height: "100%", fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <rect width="1600" height="1000" fill="#f4f6f8" />

      <Phone x={left} title="Describe your job">
        <Bubble x={left + 120} y={230} width={286} lines={["My kitchen tap has", "been leaking all week,", "can someone fix it?"]} fromUser />
        <Bubble x={left + 34} y={378} width={300} lines={["Got it. Is the leak", "from the spout or", "under the sink?"]} />
        <Bubble x={left + 190} y={526} width={216} lines={["Under the sink"]} fromUser />
        <Bubble x={left + 34} y={614} width={316} lines={["Thanks! I've drafted a", "plumbing request for", "you to review."]} />
        <rect x={left + 34} y="860" width="372" height="56" rx="28" fill="#f1f3f6" />
        <text x={left + 62} y="895" fill={muted} fontSize="20">
          Type a message
        </text>
        <circle cx={left + 380} cy="888" r="20" fill={accent} />
        <path d={`M${left + 372},${888} l14,0 m-6,-7 l7,7 l-7,7`} stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </Phone>

      <Phone x={right} title="Your request">
        <rect x={right + 34} y="226" width="372" height="300" rx="24" fill="#ffffff" stroke={line} strokeWidth="2" />
        <rect x={right + 58} y="250" width="118" height="34" rx="17" fill={accentSoft} />
        <text x={right + 117} y="273" fill={accent} fontSize="17" fontWeight="700" textAnchor="middle">
          Plumbing
        </text>
        <text x={right + 58} y="326" fill={ink} fontSize="26" fontWeight="700">
          Fix leaking kitchen tap
        </text>
        <text x={right + 58} y="364" fill={muted} fontSize="19">
          Leak under the sink, ongoing
        </text>
        <text x={right + 58} y="392" fill={muted} fontSize="19">
          for about a week.
        </text>
        <line x1={right + 58} x2={right + 382} y1="420" y2="420" stroke={line} strokeWidth="2" />
        <text x={right + 58} y="458" fill={muted} fontSize="18">
          Area
        </text>
        <text x={right + 382} y="458" fill={ink} fontSize="18" fontWeight="600" textAnchor="end">
          Nearby providers
        </text>
        <text x={right + 58} y="494" fill={muted} fontSize="18">
          Timing
        </text>
        <text x={right + 382} y="494" fill={ink} fontSize="18" fontWeight="600" textAnchor="end">
          This week
        </text>

        <rect x={right + 34} y="548" width="372" height="56" rx="16" fill="#e7f6ee" />
        <circle cx={right + 66} cy="576" r="12" fill="#1f8a5b" />
        <path d={`M${right + 60},576 l4,4 l8,-8`} stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x={right + 90} y="583" fill="#1f6e4a" fontSize="19" fontWeight="600">
          Passed AI moderation
        </text>

        <text x={right + 34} y="652" fill={ink} fontSize="21" fontWeight="700">
          Share with providers
        </text>
        <Toggle x={right + 34} y={674} label="First name" on />
        <Toggle x={right + 34} y={724} label="Phone number" on />
        <Toggle x={right + 34} y={774} label="Email address" on={false} />

        <rect x={right + 34} y="852" width="372" height="64" rx="32" fill={accent} />
        <text x={right + 220} y="893" fill="#ffffff" fontSize="21" fontWeight="700" textAnchor="middle">
          Post request
        </text>
      </Phone>
    </svg>
  );
}
