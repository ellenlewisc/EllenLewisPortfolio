const navy = "#102132";
const blue = "#284279";
const gold = "#c08f55";
const ink = "#13202e";
const muted = "#6a7686";
const line = "#e4e8ee";

const status = {
  Current: { fg: "#1f8a5b", bg: "#e3f4ec" },
  Expiring: { fg: "#b4691f", bg: "#fbefe1" },
  Expired: { fg: "#c2413b", bg: "#fbe5e4" },
};

const cards = [
  { label: "Fleet compliance", value: "94%", note: "+2% this quarter" },
  { label: "Expiring in 30 days", value: "7", note: "Renewals booked: 5" },
  { label: "Courses scheduled", value: "12", note: "Next: Monday" },
];

const columns = ["S-92 type rating", "HUET", "Instrument check", "First aid"];

const crew = [
  { name: "Crew member A", role: "Pilot", certs: ["Current", "Current", "Expiring", "Current"] },
  { name: "Crew member B", role: "Pilot", certs: ["Current", "Expiring", "Current", "Current"] },
  { name: "Crew member C", role: "Engineer", certs: ["Current", "Current", "Current", "Expired"] },
  { name: "Crew member D", role: "Pilot", certs: ["Current", "Current", "Current", "Current"] },
  { name: "Crew member E", role: "Engineer", certs: ["Expiring", "Current", "Current", "Current"] },
];

const expiries = [
  { course: "HUET refresher", who: "Crew member B", when: "6 days" },
  { course: "Instrument check", who: "Crew member A", when: "12 days" },
  { course: "S-92 recurrent", who: "Crew member E", when: "21 days" },
];

function donutArc(cx, cy, r, fraction) {
  const angle = fraction * Math.PI * 2 - Math.PI / 2;
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  const large = fraction > 0.5 ? 1 : 0;
  return `M${cx},${cy - r} A${r},${r} 0 ${large} 1 ${x},${y}`;
}

export default function TrainingDashboardScreen() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      role="img"
      aria-label="Illustration of a crew training dashboard showing certification status, compliance and upcoming expiries"
      style={{ display: "block", width: "100%", height: "100%", fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <rect width="1600" height="1000" fill="#f4f6f9" />

      <rect width="1600" height="80" fill={navy} />
      <rect x="60" y="28" width="24" height="24" rx="6" fill={gold} />
      <text x="100" y="50" fill="#ffffff" fontSize="28" fontWeight="700">
        Training &amp; certifications
      </text>
      <text x="1540" y="50" fill="#c9d3e3" fontSize="22" textAnchor="end">
        Pilots · Engineers
      </text>

      {cards.map((c, i) => {
        const x = 60 + i * 340;
        return (
          <g key={c.label}>
            <rect x={x} y="120" width="315" height="150" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
            <text x={x + 28} y="165" fill={muted} fontSize="20" fontWeight="600">
              {c.label}
            </text>
            <text x={x + 28} y="225" fill={ink} fontSize="48" fontWeight="700">
              {c.value}
            </text>
            <text x={x + 28} y="254" fill={blue} fontSize="18" fontWeight="600">
              {c.note}
            </text>
          </g>
        );
      })}

      <rect x="60" y="300" width="995" height="660" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="88" y="348" fill={ink} fontSize="24" fontWeight="700">
        Crew certifications
      </text>
      <text x="88" y="400" fill={muted} fontSize="18" fontWeight="600">
        Crew
      </text>
      {columns.map((c, i) => (
        <text key={c} x={360 + i * 172} y="400" fill={muted} fontSize="17" fontWeight="600">
          {c}
        </text>
      ))}
      {crew.map((person, r) => {
        const y = 420 + r * 104;
        return (
          <g key={person.name}>
            <line x1="88" x2="1027" y1={y} y2={y} stroke={line} strokeWidth="2" />
            <circle cx="118" cy={y + 52} r="24" fill={r % 2 ? "#e6ebf4" : "#f3e9dd"} />
            <text x="118" y={y + 59} fill={r % 2 ? blue : "#8e5f31"} fontSize="18" fontWeight="700" textAnchor="middle">
              {person.name.slice(-1)}
            </text>
            <text x="158" y={y + 46} fill={ink} fontSize="20" fontWeight="600">
              {person.name}
            </text>
            <text x="158" y={y + 72} fill={muted} fontSize="17">
              {person.role}
            </text>
            {person.certs.map((cert, i) => {
              const s = status[cert];
              return (
                <g key={i}>
                  <rect x={360 + i * 172} y={y + 34} width="128" height="36" rx="18" fill={s.bg} />
                  <text x={424 + i * 172} y={y + 58} fill={s.fg} fontSize="17" fontWeight="700" textAnchor="middle">
                    {cert}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      <rect x="1085" y="120" width="455" height="400" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="1113" y="165" fill={ink} fontSize="24" fontWeight="700">
        Compliance
      </text>
      <circle cx="1312" cy="335" r="115" fill="none" stroke="#edf0f5" strokeWidth="34" />
      <path d={donutArc(1312, 335, 115, 0.94)} fill="none" stroke={blue} strokeWidth="34" strokeLinecap="round" />
      <text x="1312" y="345" fill={ink} fontSize="52" fontWeight="700" textAnchor="middle">
        94%
      </text>
      <text x="1312" y="380" fill={muted} fontSize="18" textAnchor="middle">
        certifications current
      </text>
      <g>
        <circle cx="1140" cy="490" r="8" fill={blue} />
        <text x="1156" y="497" fill={muted} fontSize="17">
          Current
        </text>
        <circle cx="1270" cy="490" r="8" fill={gold} />
        <text x="1286" y="497" fill={muted} fontSize="17">
          Due soon
        </text>
        <circle cx="1405" cy="490" r="8" fill="#c2413b" />
        <text x="1421" y="497" fill={muted} fontSize="17">
          Overdue
        </text>
      </g>

      <rect x="1085" y="550" width="455" height="410" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="1113" y="595" fill={ink} fontSize="24" fontWeight="700">
        Upcoming expiries
      </text>
      {expiries.map((e, i) => {
        const y = 630 + i * 108;
        return (
          <g key={e.course}>
            <rect x="1113" y={y} width="399" height="88" rx="12" fill="#f7f8fb" />
            <rect x="1113" y={y} width="6" height="88" rx="3" fill={gold} />
            <text x="1137" y={y + 36} fill={ink} fontSize="19" fontWeight="700">
              {e.course}
            </text>
            <text x="1137" y={y + 66} fill={muted} fontSize="17">
              {e.who}
            </text>
            <text x="1492" y={y + 52} fill="#b4691f" fontSize="18" fontWeight="700" textAnchor="end">
              {e.when}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
