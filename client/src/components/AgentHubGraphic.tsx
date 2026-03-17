import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Landmark,
  ScanLine,
  BarChart3,
  Brain,
  CalendarClock,
  UserCircle,
  Building2,
} from "lucide-react";

// ─── Node definitions ───────────────────────────────────────────────
interface HubNode {
  icon: React.ElementType;
  emoji: string;
  label: string;
  sublabel: string;
}

const NODES: HubNode[] = [
  { icon: MessageSquare, emoji: "📱", label: "WhatsApp & Email", sublabel: "Mandanten-Kommunikation" },
  { icon: Landmark,      emoji: "🏦", label: "Banking",          sublabel: "Kontostände & Transaktionen" },
  { icon: ScanLine,      emoji: "📄", label: "Belege & OCR",     sublabel: "Rechnungen scannen" },
  { icon: BarChart3,     emoji: "📊", label: "DATEV Export",     sublabel: "Buchungssätze" },
  { icon: Brain,         emoji: "🧠", label: "KI-Modelle",       sublabel: "GPT · Claude · Gemini" },
  { icon: CalendarClock, emoji: "📅", label: "Fristen",          sublabel: "Proaktive Erinnerungen" },
  { icon: UserCircle,    emoji: "👤", label: "Mandant",          sublabel: "Self-Service" },
  { icon: Building2,     emoji: "🏢", label: "Kanzlei",          sublabel: "Dashboard & Kontrolle" },
];

// ─── Geometry helpers ───────────────────────────────────────────────
const NODE_COUNT = NODES.length;
const HUB_RADIUS_DESKTOP = 320;
const HUB_RADIUS_MOBILE = 140;
const SVG_SIZE_DESKTOP = 860;
const SVG_SIZE_MOBILE = 380;
const CENTER = { x: 0.5, y: 0.5 }; // relative center

function getNodePositions(radius: number, svgSize: number) {
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  return NODES.map((_, i) => {
    const angle = (2 * Math.PI * i) / NODE_COUNT - Math.PI / 2; // start from top
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });
}

// ─── Animated dot along a line ──────────────────────────────────────
function AnimatedDot({
  x1, y1, x2, y2, delay, duration = 2.5,
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number; duration?: number;
}) {
  return (
    <motion.circle
      r={4}
      fill="url(#dotGradient)"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, x2, x2],
        cy: [y1, y2, y2],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Connecting line with pulse ─────────────────────────────────────
function ConnectionLine({
  x1, y1, x2, y2, delay, inView,
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number; inView: boolean;
}) {
  return (
    <g>
      {/* Base line */}
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="var(--border, #334155)"
        strokeWidth={1.5}
        strokeOpacity={0.4}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: delay * 0.12 }}
      />
      {/* Pulse overlay */}
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="url(#lineGradient)"
        strokeWidth={2}
        strokeOpacity={0.15}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0.08, 0.25, 0.08] } : {}}
        transition={{ duration: 3, delay: delay * 0.15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Animated data dot */}
      {inView && (
        <AnimatedDot
          x1={x1} y1={y1} x2={x2} y2={y2}
          delay={delay * 0.3 + 0.8}
          duration={2 + (delay % 3) * 0.3}
        />
      )}
    </g>
  );
}

// ─── Central hub ────────────────────────────────────────────────────
function CentralHub({ cx, cy, inView }: { cx: number; cy: number; inView: boolean }) {
  const hubRadius = 64;
  return (
    <g>
      {/* Glow */}
      <motion.circle
        cx={cx} cy={cy} r={hubRadius + 24}
        fill="url(#hubGlow)"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: [0.3, 0.6, 0.3], scale: 1 } : {}}
        transition={{ opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.6 } }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Hub circle */}
      <motion.circle
        cx={cx} cy={cy} r={hubRadius}
        fill="url(#hubGradient)"
        stroke="url(#hubBorder)"
        strokeWidth={2}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Bot icon placeholder — rendered as foreignObject */}
      <foreignObject x={cx - 22} y={cy - 30} width={44} height={44}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
          <Bot size={38} color="white" strokeWidth={2} />
        </div>
      </foreignObject>
      {/* Label */}
      <text x={cx} y={cy + 24} textAnchor="middle" fill="white" fontSize={14} fontWeight={600} fontFamily="system-ui, sans-serif">
        FinRobotics Agent
      </text>
    </g>
  );
}

// ─── Outer node ─────────────────────────────────────────────────────
function OuterNode({
  node, x, y, index, inView,
}: {
  node: HubNode; x: number; y: number; index: number; inView: boolean;
}) {
  const NodeIcon = node.icon;
  const nodeRadius = 50;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.3 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.15 + index * 0.1 }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {/* Node background */}
      <circle
        cx={x} cy={y} r={nodeRadius}
        fill="var(--muted, #f1f5f9)"
        stroke="var(--border, #e2e8f0)"
        strokeWidth={1.5}
      />
      {/* Hover ring (CSS animation via class) */}
      <motion.circle
        cx={x} cy={y} r={nodeRadius + 4}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth={1.5}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
      />
      {/* Icon */}
      <foreignObject x={x - 16} y={y - 22} width={32} height={32}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
          <NodeIcon size={28} style={{ color: "var(--foreground, #1e293b)" }} strokeWidth={1.8} />
        </div>
      </foreignObject>
      {/* Label */}
      <text
        x={x} y={y + 16}
        textAnchor="middle"
        fill="var(--foreground, #1e293b)"
        fontSize={12}
        fontWeight={600}
        fontFamily="system-ui, sans-serif"
      >
        {node.label}
      </text>
      {/* Sublabel */}
      <text
        x={x} y={y + 30}
        textAnchor="middle"
        fill="var(--muted-foreground, #64748b)"
        fontSize={10}
        fontFamily="system-ui, sans-serif"
      >
        {node.sublabel}
      </text>
    </motion.g>
  );
}

// ─── Mobile card layout ─────────────────────────────────────────────
function MobileCard({
  node, index, inView,
}: {
  node: HubNode; index: number; inView: boolean;
}) {
  const NodeIcon = node.icon;
  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#0D9488]">
        <NodeIcon size={20} className="text-white" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground leading-tight">{node.label}</p>
        <p className="text-xs text-muted-foreground leading-tight">{node.sublabel}</p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Main component
// ═══════════════════════════════════════════════════════════════════
export default function AgentHubGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const desktopPositions = getNodePositions(HUB_RADIUS_DESKTOP, SVG_SIZE_DESKTOP);
  const cx = SVG_SIZE_DESKTOP / 2;
  const cy = SVG_SIZE_DESKTOP / 2;

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      {/* ── Desktop / Tablet: SVG hub ──────────────────────────── */}
      <div className="hidden md:block w-full max-w-[860px]">
        <svg
          viewBox={`0 0 ${SVG_SIZE_DESKTOP} ${SVG_SIZE_DESKTOP}`}
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0D9488" stopOpacity={0} />
            </radialGradient>
            <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="hubBorder" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2d5a8a" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0D9488" />
            </radialGradient>
          </defs>

          {/* Connection lines */}
          {desktopPositions.map((pos, i) => (
            <ConnectionLine
              key={`line-${i}`}
              x1={cx} y1={cy}
              x2={pos.x} y2={pos.y}
              delay={i}
              inView={inView}
            />
          ))}

          {/* Outer nodes */}
          {desktopPositions.map((pos, i) => (
            <OuterNode
              key={`node-${i}`}
              node={NODES[i]}
              x={pos.x}
              y={pos.y}
              index={i}
              inView={inView}
            />
          ))}

          {/* Central hub (rendered last to be on top) */}
          <CentralHub cx={cx} cy={cy} inView={inView} />
        </svg>
      </div>

      {/* ── Mobile: Central hub + card grid ────────────────────── */}
      <div className="md:hidden w-full flex flex-col items-center gap-4 px-4">
        {/* Mini hub graphic */}
        <svg
          viewBox={`0 0 ${SVG_SIZE_MOBILE} ${SVG_SIZE_MOBILE}`}
          className="w-48 h-48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="hubGlowMobile" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0D9488" stopOpacity={0} />
            </radialGradient>
            <linearGradient id="hubGradientMobile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>
          {/* Glow */}
          <motion.circle
            cx={SVG_SIZE_MOBILE / 2} cy={SVG_SIZE_MOBILE / 2} r={80}
            fill="url(#hubGlowMobile)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Hub */}
          <motion.circle
            cx={SVG_SIZE_MOBILE / 2} cy={SVG_SIZE_MOBILE / 2} r={56}
            fill="url(#hubGradientMobile)"
            stroke="#14b8a6"
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformOrigin: `${SVG_SIZE_MOBILE / 2}px ${SVG_SIZE_MOBILE / 2}px` }}
          />
          {/* Small radiating lines */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (2 * Math.PI * i) / 8 - Math.PI / 2;
            const innerR = 62;
            const outerR = 100;
            const mcx = SVG_SIZE_MOBILE / 2;
            const mcy = SVG_SIZE_MOBILE / 2;
            return (
              <motion.line
                key={i}
                x1={mcx + innerR * Math.cos(angle)}
                y1={mcy + innerR * Math.sin(angle)}
                x2={mcx + outerR * Math.cos(angle)}
                y2={mcy + outerR * Math.sin(angle)}
                stroke="#0D9488"
                strokeWidth={2}
                strokeOpacity={0.3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              />
            );
          })}
          {/* Icon */}
          <foreignObject x={SVG_SIZE_MOBILE / 2 - 20} y={SVG_SIZE_MOBILE / 2 - 28} width={40} height={36}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
              <Bot size={32} color="white" strokeWidth={2} />
            </div>
          </foreignObject>
          <text
            x={SVG_SIZE_MOBILE / 2} y={SVG_SIZE_MOBILE / 2 + 20}
            textAnchor="middle" fill="white" fontSize={12} fontWeight={600} fontFamily="system-ui, sans-serif"
          >
            FinRobotics Agent
          </text>
        </svg>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
          {NODES.map((node, i) => (
            <MobileCard key={i} node={node} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}
