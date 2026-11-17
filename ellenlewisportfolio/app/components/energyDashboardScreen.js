const navy = "#00457c";
const ink = "#0f2236";
const muted = "#6b7a8c";
const line = "#e3e8ef";

const chart = { x: 60, y: 300, width: 980, height: 400 };
const days = 14;

function series(seed, base, swing) {
  return Array.from({ length: days }, (_, i) => base + Math.sin(i * 0.9 + seed) * swing + Math.cos(i * 0.4 + seed * 2) * swing * 0.6 + i * 1.4);
}

const priceSeries = [
  { name: "Day-ahead", color: navy, values: series(0.3, 44, 7) },
  { name: "Real-time", color: "#3fa3d8", values: series(1.7, 38, 9) },
];

const allValues = priceSeries.flatMap((s) => s.values);
const minValue = Math.min(...allValues) - 4;
const maxValue = Math.max(...allValues) + 4;

function point(i, value) {
  const x = chart.x + 40 + (i / (days - 1)) * (chart.width - 80);
  const y = chart.y + 70 + (1 - (value - minValue) / (maxValue - minValue)) * (chart.height - 120);
  return [x, y];
}

function smoothPath(values) {
  const pts = values.map((v, i) => point(i, v));
  return pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x},${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx},${py} ${cx},${y} ${x},${y}`;
  }, "");
}

const cards = [
  { label: "Day-ahead price", value: "$48.20", unit: "/MWh", delta: "+3.1%", up: true },
  { label: "Credit used", value: "68%", unit: "of limit", delta: "2 on watch", up: false },
  { label: "Trades today", value: "24", unit: "confirmed", delta: "+6", up: true },
];

const watch = [
  { name: "Counterparty A", used: 0.86 },
  { name: "Counterparty B", used: 0.72 },
  { name: "Counterparty C", used: 0.41 },
  { name: "Counterparty D", used: 0.27 },
];

const volumes = [32, 45, 38, 52, 47, 60, 55];

export default function EnergyDashboardScreen() {
  const fillPath = `${smoothPath(priceSeries[0].values)} L${point(days - 1, minValue)[0]},${chart.y + chart.height - 50} L${point(0, minValue)[0]},${chart.y + chart.height - 50} Z`;

  return (
    <svg
      viewBox="0 0 1600 1000"
      role="img"
      aria-label="Illustration of an energy trading dashboard with daily price trends, credit watch and trade volumes"
      style={{ display: "block", width: "100%", height: "100%", fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <defs>
        <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={navy} stopOpacity="0.18" />
          <stop offset="100%" stopColor={navy} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill="#f5f7fa" />

      <rect width="1600" height="80" fill={navy} />
      <text x="60" y="50" fill="#ffffff" fontSize="28" fontWeight="700">
        Daily pricing
      </text>
      <text x="1540" y="50" fill="#cfe3f3" fontSize="22" textAnchor="end">
        Updated 6:00 AM
      </text>

      {cards.map((c, i) => {
        const x = 60 + i * 340;
        return (
          <g key={c.label}>
            <rect x={x} y="120" width="315" height="150" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
            <text x={x + 28} y="165" fill={muted} fontSize="20" fontWeight="600">
              {c.label}
            </text>
            <text x={x + 28} y="222" fill={ink} fontSize="44" fontWeight="700">
              {c.value}
              <tspan fill={muted} fontSize="20" fontWeight="500" dx="8">
                {c.unit}
              </tspan>
            </text>
            <text x={x + 28} y="252" fill={c.up ? "#1f9d63" : "#d9822b"} fontSize="18" fontWeight="600">
              {c.delta}
            </text>
          </g>
        );
      })}

      <rect x={chart.x} y={chart.y} width={chart.width} height={chart.height} rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x={chart.x + 28} y={chart.y + 45} fill={ink} fontSize="24" fontWeight="700">
        Price trend, last 14 days
      </text>
      {priceSeries.map((s, i) => (
        <g key={s.name}>
          <rect x={chart.x + 640 + i * 170} y={chart.y + 28} width="22" height="6" rx="3" fill={s.color} />
          <text x={chart.x + 670 + i * 170} y={chart.y + 37} fill={muted} fontSize="18">
            {s.name}
          </text>
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => {
        const y = chart.y + 70 + i * ((chart.height - 120) / 3);
        return <line key={i} x1={chart.x + 40} x2={chart.x + chart.width - 40} y1={y} y2={y} stroke={line} strokeWidth="2" />;
      })}
      <path d={fillPath} fill="url(#priceFill)" />
      {priceSeries.map((s) => (
        <path key={s.name} d={smoothPath(s.values)} fill="none" stroke={s.color} strokeWidth="5" strokeLinecap="round" />
      ))}
      {(() => {
        const [x, y] = point(days - 1, priceSeries[0].values[days - 1]);
        return (
          <g>
            <circle cx={x} cy={y} r="10" fill="#ffffff" stroke={navy} strokeWidth="5" />
          </g>
        );
      })()}

      <rect x="1080" y="120" width="460" height="330" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="1108" y="165" fill={ink} fontSize="24" fontWeight="700">
        Credit watch
      </text>
      {watch.map((w, i) => {
        const y = 210 + i * 58;
        const color = w.used > 0.8 ? "#d9534f" : w.used > 0.6 ? "#d9822b" : "#1f9d63";
        return (
          <g key={w.name}>
            <text x="1108" y={y} fill={ink} fontSize="19" fontWeight="600">
              {w.name}
            </text>
            <text x="1512" y={y} fill={muted} fontSize="18" textAnchor="end">
              {Math.round(w.used * 100)}%
            </text>
            <rect x="1108" y={y + 12} width="404" height="10" rx="5" fill="#edf1f5" />
            <rect x="1108" y={y + 12} width={404 * w.used} height="10" rx="5" fill={color} />
          </g>
        );
      })}

      <rect x="1080" y="480" width="460" height="220" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="1108" y="525" fill={ink} fontSize="24" fontWeight="700">
        Volume this week
      </text>
      {volumes.map((v, i) => {
        const h = v * 2;
        return <rect key={i} x={1112 + i * 60} y={680 - h} width="34" height={h} rx="6" fill={i === volumes.length - 1 ? navy : "#b9d3e8"} />;
      })}

      <rect x="60" y="740" width="1480" height="220" rx="16" fill="#ffffff" stroke={line} strokeWidth="2" />
      <text x="88" y="785" fill={ink} fontSize="24" fontWeight="700">
        Recent transactions
      </text>
      {["Date", "Counterparty", "Volume", "Price", "Status"].map((h, i) => (
        <text key={h} x={88 + i * 300} y="830" fill={muted} fontSize="18" fontWeight="600">
          {h}
        </text>
      ))}
      {[
        ["Nov 14", "Counterparty A", "120 MWh", "$47.80", "Settled"],
        ["Nov 14", "Counterparty C", "85 MWh", "$48.20", "Pending"],
      ].map((row, r) => (
        <g key={r}>
          <line x1="88" x2="1512" y1={850 + r * 50} y2={850 + r * 50} stroke={line} strokeWidth="2" />
          {row.map((cell, i) => (
            <text key={i} x={88 + i * 300} y={882 + r * 50} fill={i === 4 ? (cell === "Settled" ? "#1f9d63" : "#d9822b") : ink} fontSize="19" fontWeight={i === 4 ? 600 : 400}>
              {cell}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
