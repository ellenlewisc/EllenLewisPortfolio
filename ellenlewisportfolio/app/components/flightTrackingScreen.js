const base = { x: 372, y: 418 };

const platforms = [
  { name: "Hebron", x: 860, y: 330, cx: 600, cy: 300 },
  { name: "Hibernia", x: 830, y: 470, cx: 610, cy: 400 },
  { name: "White Rose", x: 1010, y: 560, cx: 700, cy: 470 },
  { name: "Terra Nova", x: 900, y: 650, cx: 640, cy: 590 },
];

const flights = [
  { id: "Flight 311", to: "Hibernia", status: "En route", color: "#5eead4", t: 0.62 },
  { id: "Flight 327", to: "Hebron", status: "En route", color: "#5eead4", t: 0.35 },
  { id: "Flight 351", to: "White Rose", status: "Returning", color: "#fbbf24", t: 0.8 },
  { id: "Flight 362", to: "Terra Nova", status: "Scheduled", color: "#94a3b8" },
];

function pointOnCurve(p, t) {
  const x = (1 - t) ** 2 * base.x + 2 * (1 - t) * t * p.cx + t ** 2 * p.x;
  const y = (1 - t) ** 2 * base.y + 2 * (1 - t) * t * p.cy + t ** 2 * p.y;
  const dx = 2 * (1 - t) * (p.cx - base.x) + 2 * t * (p.x - p.cx);
  const dy = 2 * (1 - t) * (p.cy - base.y) + 2 * t * (p.y - p.cy);
  return { x, y, angle: (Math.atan2(dy, dx) * 180) / Math.PI };
}

export default function FlightTrackingScreen() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      role="img"
      aria-label="Illustration of a helicopter flight tracking screen showing routes from St. John's to offshore platforms"
      style={{ display: "block", width: "100%", height: "100%", fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <rect width="1600" height="1000" fill="#0b1726" />

      <g stroke="#13263b" strokeWidth="2">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="70" x2={i * 100} y2="1000" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={70 + i * 100} x2="1150" y2={70 + i * 100} />
        ))}
      </g>

      <path
        d="M0,70 L410,70 L392,150 L430,215 L376,288 L418,352 L372,418 L398,488 L344,560 L376,640 L326,724 L352,812 L282,890 L300,1000 L0,1000 Z"
        fill="#16283d"
        stroke="#2b4562"
        strokeWidth="3"
      />
      <path d="M190,330 C240,300 300,340 286,410 C270,470 210,470 186,420 Z" fill="#0b1726" stroke="#2b4562" strokeWidth="3" />

      <g fill="none" stroke="#1f3a57" strokeWidth="2" strokeDasharray="6 10">
        <circle cx={base.x} cy={base.y} r="220" />
        <circle cx={base.x} cy={base.y} r="440" />
        <circle cx={base.x} cy={base.y} r="660" />
      </g>

      {platforms.map((p) => (
        <path
          key={p.name}
          d={`M${base.x},${base.y} Q${p.cx},${p.cy} ${p.x},${p.y}`}
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.55"
          strokeWidth="3"
          strokeDasharray="12 10"
        />
      ))}

      {platforms.map((p) => (
        <g key={`${p.name}-marker`}>
          <rect x={p.x - 9} y={p.y - 9} width="18" height="18" fill="#0b1726" stroke="#e2e8f0" strokeWidth="3" transform={`rotate(45 ${p.x} ${p.y})`} />
          <text x={p.x + 22} y={p.y + 7} fill="#cbd5e1" fontSize="22" fontWeight="600">
            {p.name}
          </text>
        </g>
      ))}

      {flights
        .filter((f) => f.t !== undefined)
        .map((f) => {
          const p = platforms.find((pl) => pl.name === f.to);
          const pos = pointOnCurve(p, f.t);
          return (
            <g key={f.id} transform={`translate(${pos.x} ${pos.y}) rotate(${pos.angle})`}>
              <circle r="22" fill={f.color} fillOpacity="0.15" />
              <path d="M16,0 L-10,-10 L-5,0 L-10,10 Z" fill={f.color} />
            </g>
          );
        })}

      <circle cx={base.x} cy={base.y} r="11" fill="#38bdf8" />
      <circle cx={base.x} cy={base.y} r="22" fill="none" stroke="#38bdf8" strokeWidth="3" />
      <text x={base.x - 30} y={base.y + 58} fill="#e2e8f0" fontSize="24" fontWeight="700" textAnchor="end">
        St. John&apos;s
      </text>

      <rect width="1600" height="70" fill="#0f1f33" />
      <text x="40" y="45" fill="#f1f5f9" fontSize="26" fontWeight="700">
        Operations Control
      </text>
      <circle cx="1450" cy="35" r="8" fill="#22c55e" />
      <text x="1470" y="44" fill="#86efac" fontSize="22" fontWeight="600">
        Live sync
      </text>

      <rect x="1150" y="70" width="450" height="930" fill="#0f1f33" />
      <text x="1190" y="140" fill="#94a3b8" fontSize="22" fontWeight="600">
        Today&apos;s flights
      </text>
      {flights.map((f, i) => {
        const y = 190 + i * 150;
        return (
          <g key={`${f.id}-row`}>
            <rect x="1180" y={y} width="390" height="124" rx="14" fill="#13263b" />
            <text x="1210" y={y + 50} fill="#f1f5f9" fontSize="26" fontWeight="700">
              {f.id}
            </text>
            <text x="1210" y={y + 92} fill="#94a3b8" fontSize="22">
              To {f.to}
            </text>
            <rect x="1410" y={y + 26} width="140" height="38" rx="19" fill={f.color} fillOpacity="0.16" />
            <text x="1480" y={y + 52} fill={f.color} fontSize="20" fontWeight="600" textAnchor="middle">
              {f.status}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
