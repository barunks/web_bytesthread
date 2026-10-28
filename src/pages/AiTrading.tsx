import { useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Zap, Shield, TrendingUp, BarChart2, Activity, Clock, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const GalaxyBackground = lazy(() => import('../components/GalaxyBackground'))

const brokers = [
  { name: 'Interactive Brokers', sub: 'TWS API' },
  { name: 'Alpaca', sub: 'Paper + Live' },
  { name: 'Market Data Feed', sub: 'Multiple Sources' },
  { name: 'Virtual Venue', sub: 'Simulated' },
  { name: '+ Any Broker', sub: 'Configurable' },
]

const heroStats = [
  { value: '<100μs', label: 'OMS P99 Target', sub: 'intent-to-route' },
  { value: '30μs', label: 'Measured P50', sub: 'full-stack run' },
  { value: '7', label: 'Strategy Types', sub: 'session-aware' },
  { value: '0', label: 'Cloud Dependency', sub: 'fully local AI' },
]

const strategies = [
  {
    id: 'mean_reversion',
    icon: Activity,
    title: 'Mean Reversion',
    tag: 'Z-Score',
    tagColor: '#22d3ee',
    session: 'All Day',
    regime: 'Low–Med Vol',
    entry: 'Z-score of EWM fair price crosses ±entryZ threshold. Quarter-Kelly position sizing from realised vol.',
    exit: 'Z-score reverts past exitZ, or daily P&L stop hit.',
    signals: ['BB(20,2σ) band touch', 'RSI(14) < 30 / > 70', 'compositeScore confirms direction'],
    edge: 'Captures mean-reversion premium in liquid ETFs and large-caps. Regime-gated: disabled in high-vol (regime 3).',
  },
  {
    id: 'momentum',
    icon: TrendingUp,
    title: 'Momentum',
    tag: 'EWM Trend',
    tagColor: '#a78bfa',
    session: 'All Day',
    regime: 'Med–High Vol',
    entry: 'EWM(α=0.2) momentum positive and flat position. EMA(9) crosses above EMA(21). MACD histogram zero-cross confirms.',
    exit: 'EWM momentum flips sign, or EMA cross reverses.',
    signals: ['MACD(12,26,9) histogram cross', 'EMA(9/21) fast/slow cross', 'compositeScore > minThreshold'],
    edge: 'Trend-following when mean-reversion is unfavourable. Regime-scaled: higher composite multiplier in med-vol.',
  },
  {
    id: 'opening_range_breakout',
    icon: Zap,
    title: 'Opening Range Breakout',
    tag: 'ORB',
    tagColor: '#f59e0b',
    session: '09:30–10:00 Lock',
    regime: 'Low–Med Vol Only',
    entry: 'Price closes above ORB High (long) or below ORB Low (short) after 30-min window locks. Volume bar > 1.5× 5-bar avg. compositeScore confirms direction.',
    exit: 'Stop at opposite ORB level. Target = ORB High + (ORB High − ORB Low). MOC close at 15:45.',
    signals: ['ORB High / Low lock at 10:00 ET', 'Volume breakout confirmation', 'Regime 3 (high-vol) blocks entry'],
    edge: 'ORB and gap setups are among the most consistently profitable retail equity setups in academic literature. Rule-based, verifiable, no ML dependency.',
  },
  {
    id: 'gap_fade',
    icon: BarChart2,
    title: 'Gap Fade / Gap-and-Go',
    tag: 'Gap',
    tagColor: '#f97316',
    session: 'SOD Window (first 5 min)',
    regime: 'Low News Impact',
    entry: 'Gap Fade: overnight gap 0.5–3%, no high-impact news, RSI > 65 (short) or < 35 (long), price stalls within first 5 min. Gap-and-Go: gap > 3% or high-impact news catalyst.',
    exit: 'Gap Fade target = prevClose (full gap fill). Stop = 1.5× gap size extension.',
    signals: ['Overnight gap % vs prevClose', 'News sentiment gate (no high-impact)', 'RSI(14) overextension confirm'],
    edge: 'Fades overreaction on moderate gaps; rides momentum on large catalyst gaps. News-gated to avoid trading into earnings or macro events.',
  },
  {
    id: 'vwap_reversion',
    icon: Activity,
    title: 'VWAP Reversion',
    tag: 'OFI-Confirmed',
    tagColor: '#00ff88',
    session: 'Continuous (intraday)',
    regime: 'All Regimes',
    entry: 'VWAP deviation > threshold bps → short limit at VWAP. Deviation < −threshold → long limit at VWAP. OFI must confirm: ofi < −0.3 for short, > +0.3 for long.',
    exit: 'Target = VWAP (zero deviation). Stop = 2× deviation threshold from entry. EOD window forces close.',
    signals: ['VWAP deviation in bps', 'OFI (Order Flow Imbalance) [-1,+1]', 'CVD (Cumulative Volume Delta) trend'],
    edge: 'OFI confirmation filters false breakouts. CVD rising into a VWAP short is a contra-signal — trade blocked. Microstructure-aware entry timing.',
  },
  {
    id: 'moc_rebalance',
    icon: Clock,
    title: 'Market-on-Close Rebalance',
    tag: 'MOC',
    tagColor: '#94a3b8',
    session: '15:45 ET trigger',
    regime: 'All Regimes',
    entry: 'Triggered automatically when session enters EOD window (15:45 ET). Submits TimeInForce::Cls orders for all open positions.',
    exit: 'Market close execution. No new positions opened in EOD window.',
    signals: ['SessionEngine EOD transition event', 'Open position inventory scan', 'TimeInForce::Cls order type'],
    edge: 'Eliminates overnight gap risk on intraday positions. Ensures clean P&L attribution per session. Configurable — disable per bot if overnight holding is intended.',
  },
  {
    id: 'kalman_pair',
    icon: Brain,
    title: 'Kalman Pair Trading',
    tag: 'Cointegration-Gated',
    tagColor: '#ec4899',
    session: 'Continuous',
    regime: 'Low–Med Vol',
    entry: 'Engle-Granger cointegration test at bot startup (p < 0.05 required). Kalman filter tracks dynamic hedge ratio. Entry when spread Z-score > threshold.',
    exit: 'Z-score reverts past exitZ. Stop on Z-score explosion. Weekly cointegration re-test — bot suspended if pair breaks.',
    signals: ['Kalman hedge ratio uncertainty P[0][0]', 'Spread Z-score vs dynamic mean', 'Cointegration p-value gate'],
    edge: 'Dynamic hedge ratio adapts to regime shifts — static OLS ratio degrades over time. Cointegration gate prevents trading broken pairs.',
  },
]

const signalStack = [
  { name: 'realizedVol', formula: '20-tick rolling log-return stddev (annualised)', role: 'Sizing denominator, regime classifier' },
  { name: 'momentum', formula: 'EWM(α=0.2) of log-return', role: 'Momentum entry, composite factor' },
  { name: 'MACD(12,26,9)', formula: 'Histogram zero-cross, trend confirmation', role: 'Momentum confirmation' },
  { name: 'RSI(14)', formula: 'OB > 70 / OS < 30', role: 'Gap fade confirm, mean-rev gate' },
  { name: 'BB(20,2σ)', formula: 'Mean-reversion bands, squeeze detection', role: 'Mean-reversion entry bands' },
  { name: 'ATR(14)', formula: 'True range average', role: 'Stop distance, Kelly denominator' },
  { name: 'EMA(9/21)', formula: 'Fast/slow trend cross', role: 'Momentum entry trigger' },
  { name: 'OFI', formula: '(bidQty − askQty) / (bidQty + askQty) ∈ [−1,+1]', role: 'VWAP reversion confirmation' },
  { name: 'VWAP Deviation', formula: '(price − vwap) / vwap × 10000 bps', role: 'VWAP reversion threshold' },
  { name: 'IV Rank', formula: '(currentVol − minVol52w) / (maxVol52w − minVol52w) × 100', role: 'Strategy selection bias' },
  { name: 'compositeScore', formula: 'Weighted[-1,+1] of above, regime-scaled', role: 'Universal entry gate' },
  { name: 'sentiment', formula: 'EWM of news sentiment × confidence', role: 'Gap catalyst gate, composite bias' },
]

const aiLoop = [
  { step: '01', label: 'Trading Day', desc: 'Bots execute across 7 strategy types. Every fill, signal, and rejection recorded with nanosecond timestamps.', color: '#a78bfa' },
  { step: '02', label: 'EOD Report', desc: 'Structured JSON at 15:30 ET: per-bot P&L, win rate, slippage bps, signal IC, regime history, execution quality.', color: '#22d3ee' },
  { step: '03', label: 'deepseek-r1:14b', desc: 'Local Ollama queries the EOD report. Chain-of-thought reasoning visible in audit log. Zero cloud, zero API fees.', color: '#a78bfa' },
  { step: '04', label: 'Guardrail Validation', desc: 'Every suggestion clamped to hard field limits. Structural fields immutable. Max 8 changes per cycle.', color: '#f59e0b' },
  { step: '05', label: 'Operator Approval', desc: 'Recommendations shown in dashboard with full config diff. One-click apply or reject.', color: '#22d3ee' },
  { step: '06', label: 'SIGHUP Hot-Reload', desc: 'Config written atomically. SIGHUP to utp_strategy and utp_om. New parameters live immediately — no restart.', color: '#00ff88' },
]

const riskLayers = [
  { order: '1', name: 'Kill Switch', desc: 'Instant halt. Survives hot-reload. Toggle via dashboard or REST.' },
  { order: '2', name: 'Quantity Limit', desc: 'Per-order max qty — cheapest check, runs first.' },
  { order: '3', name: 'Price Sanity', desc: 'Rejects orders outside configurable band vs last quote.' },
  { order: '4', name: 'Notional Limit', desc: 'Per-order notional cap. Cannot exceed bot allocation.' },
  { order: '5', name: 'Gross Exposure', desc: 'Portfolio-wide gate. Regime-scaled: tighter in high-vol.' },
  { order: '6', name: 'Daily Drawdown', desc: 'Per-bot and portfolio P&L stop. Session-baseline aware.' },
  { order: '7', name: 'Velocity', desc: 'Max orders/sec and orders/min rate limiter per bot.' },
  { order: '8', name: 'Portfolio VaR', desc: 'Parametric 95% VaR. Blocks order if portfolio VaR breaches limit.' },
]

export default function AiTrading() {
  const [activeStrategy, setActiveStrategy] = useState(0)
  const active = strategies[activeStrategy]

  return (
    <div className="pt-24" style={{ backgroundColor: '#020408' }}>

      {/* ── HERO: full-screen galaxy video with purple AI tint ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        {/* Galaxy video — hue-rotated to deep violet */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'hue-rotate(260deg) saturate(3) brightness(0.38)', opacity: 0.9 }}>
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>

        {/* Three.js galaxy overlay — also tinted purple via CSS */}
        <div className="absolute inset-0 z-0" style={{ filter: 'hue-rotate(260deg) saturate(2)', opacity: 0.5 }}>
          <Suspense fallback={null}><GalaxyBackground /></Suspense>
        </div>

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.18) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.3) 0%, rgba(2,4,8,0.15) 40%, rgba(2,4,8,0.85) 85%, rgba(2,4,8,1) 100%)' }} />
        <div className="absolute inset-0 z-10 grid-bg opacity-30" />

        {/* Animated pulse rings */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {[1,2,3].map(i => (
            <motion.div key={i}
              className="absolute rounded-full"
              style={{ border: '1px solid rgba(167,139,250,0.15)', width: `${i * 280}px`, height: `${i * 280}px` }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 4, delay: i * 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>

            {/* Live badge */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(167,139,250,0.35)', backgroundColor: 'rgba(124,58,237,0.1)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#a78bfa' }} />
              <span className="text-xs font-mono" style={{ color: '#a78bfa' }}>LIVE · deepseek-r1:14b · IBKR + Alpaca · 7 Strategy Types</span>
            </motion.div>

            <h1 className="font-black tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
              <span className="text-white">AI Bots That Trade.</span><br />
              <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Learn. Adapt. Improve.
              </span>
            </h1>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: '#94a3b8' }}>
              C++20 intraday trading platform connecting to <span style={{ color: '#a78bfa', fontWeight: 600 }}>IBKR, Alpaca</span> and any broker.
              Local Ollama LLM analyses performance every night and tunes bot parameters —
              <span style={{ color: '#a78bfa', fontWeight: 600 }}> zero cloud, zero API fees, data never leaves your server.</span>
            </p>

            {/* Broker pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {brokers.map((b) => (
                <div key={b.name} style={{
                  display: 'inline-flex', flexDirection: 'column', alignItems: 'center', padding: '6px 16px', borderRadius: '999px',
                  backgroundColor: b.name.startsWith('+') ? 'rgba(167,139,250,0.04)' : 'rgba(167,139,250,0.1)',
                  border: b.name.startsWith('+') ? '1px dashed rgba(167,139,250,0.3)' : '1px solid rgba(167,139,250,0.28)',
                  backdropFilter: 'blur(6px)',
                }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 700, color: b.name.startsWith('+') ? '#64748b' : '#c4b5fd' }}>{b.name}</span>
                  <span style={{ fontSize: '0.6rem', color: '#475569', marginTop: '1px' }}>{b.sub}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 0 32px rgba(124,58,237,0.4)' }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/hft-fx" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: '1px solid rgba(167,139,250,0.3)', color: '#a78bfa', backdropFilter: 'blur(6px)' }}>
                HFT Platform <ArrowRight size={16} />
              </Link>
            </div>

            {/* Hero stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {heroStats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                  style={{ backgroundColor: 'rgba(10,6,30,0.7)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '14px', padding: '16px 12px', backdropFilter: 'blur(12px)' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.4rem', color: '#a78bfa', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.72rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '0.62rem', color: '#475569', marginTop: '2px' }}>{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 z-20" style={{ color: '#475569' }}>
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── STRATEGY EXPLORER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <FadeIn className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#a78bfa' }}>Intraday Strategies</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            7 Strategy Types.<br />
            <span style={{ background: 'linear-gradient(90deg,#a78bfa,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Session-Aware. Regime-Gated.
            </span>
          </h2>
          <p className="text-sm mt-3 max-w-2xl" style={{ color: '#64748b' }}>
            Every strategy is time-anchored to the US equity session, gated by volatility regime, and confirmed by a composite signal score before any order is submitted.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-3" style={{ alignItems: 'start' }}>
          {/* Selector */}
          <div className="flex sm:flex-col flex-row flex-wrap gap-2 sm:gap-[5px]">
            {strategies.map((s, i) => (
              <button key={s.id} onClick={() => setActiveStrategy(i)} style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 14px', borderRadius: '10px',
                border: `1px solid ${i === activeStrategy ? s.tagColor + '60' : 'rgba(255,255,255,0.05)'}`,
                backgroundColor: i === activeStrategy ? s.tagColor + '12' : 'transparent',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { if (i !== activeStrategy) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { if (i !== activeStrategy) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}
              >
                <s.icon size={14} style={{ color: i === activeStrategy ? s.tagColor : '#475569', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: i === activeStrategy ? '#fff' : '#94a3b8' }}>{s.title}</div>
                  <div style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: i === activeStrategy ? s.tagColor : '#334155', marginTop: '1px' }}>{s.tag}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div key={active.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.22 }}
            style={{ backgroundColor: '#07101f', border: `1px solid ${active.tagColor}28`, borderRadius: '18px', padding: '28px', boxShadow: `0 0 40px ${active.tagColor}0a` }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: active.tagColor + '18', border: `1px solid ${active.tagColor}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <active.icon size={20} style={{ color: active.tagColor }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>{active.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '5px' }}>
                  {[active.tag, active.session, active.regime].map((t, i) => (
                    <span key={i} style={{ fontSize: '0.62rem', fontFamily: 'monospace', padding: '2px 9px', borderRadius: '999px', backgroundColor: i === 0 ? active.tagColor + '18' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? active.tagColor + '40' : 'rgba(255,255,255,0.08)'}`, color: i === 0 ? active.tagColor : '#64748b' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div style={{ backgroundColor: '#040c1a', borderRadius: '12px', padding: '16px', border: '1px solid rgba(34,211,238,0.1)' }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>▶ Entry Logic</div>
                <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.7 }}>{active.entry}</p>
              </div>
              <div style={{ backgroundColor: '#040c1a', borderRadius: '12px', padding: '16px', border: '1px solid rgba(249,115,22,0.1)' }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>◼ Exit Logic</div>
                <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.7 }}>{active.exit}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div style={{ backgroundColor: '#040c1a', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Signals Used</div>
                {active.signals.map((sig, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '5px' }}>
                    <span style={{ color: active.tagColor, flexShrink: 0 }}>▸</span>{sig}
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: active.tagColor + '08', borderRadius: '12px', padding: '16px', border: `1px solid ${active.tagColor}20` }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: active.tagColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Edge</div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.7 }}>{active.edge}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNAL STACK ── */}
      <section style={{ background: 'linear-gradient(180deg, #020408 0%, #06030f 50%, #020408 100%)', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#a78bfa' }}>Signal Stack</span>
            <h2 className="text-3xl font-black text-white mt-2">12 Signals. One Composite Score.</h2>
            <p className="text-sm mt-2 max-w-xl" style={{ color: '#64748b' }}>
              All signals feed a regime-scaled compositeScore ∈ [−1,+1]. No strategy fires without composite confirmation.
            </p>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {signalStack.map((s, i) => (
              <FadeIn key={i} delay={i * 0.035}>
                <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr_1fr] gap-2 sm:gap-4 px-4 py-3 rounded-xl cursor-default transition-all" style={{ backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'; e.currentTarget.style.backgroundColor = '#0a1428' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.06)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', color: '#a78bfa' }}>{s.name}</span>
                  <span style={{ fontSize: '0.75rem', color: '#475569' }}>{s.formula}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.role}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI FEEDBACK LOOP ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <FadeIn className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#a78bfa' }}>AI Feedback Loop</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            Bots That Get Better<br />
            <span style={{ background: 'linear-gradient(90deg,#a78bfa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every Single Night.</span>
          </h2>
          <p className="text-sm mt-3 max-w-2xl" style={{ color: '#64748b' }}>
            Local deepseek-r1:14b analyses daily performance and proposes parameter changes with chain-of-thought reasoning visible in the audit log. Your data never leaves your server.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {aiLoop.map((step, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ backgroundColor: '#07101f', border: `1px solid ${step.color}18`, borderRadius: '16px', padding: '24px', height: '100%', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = step.color + '50'; e.currentTarget.style.backgroundColor = '#0a1428'; e.currentTarget.style.boxShadow = `0 0 30px ${step.color}12` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = step.color + '18'; e.currentTarget.style.backgroundColor = '#07101f'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: `radial-gradient(circle at top right, ${step.color}10, transparent 70%)`, pointerEvents: 'none' }} />
                <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.6rem', color: step.color, opacity: 0.25, lineHeight: 1, marginBottom: '12px' }}>{step.step}</div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '8px' }}>{step.label}</div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Flow arrow connector */}
        <FadeIn delay={0.5}>
          <div style={{ marginTop: '24px', padding: '20px 28px', borderRadius: '14px', backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.15)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Brain size={18} style={{ color: '#a78bfa', flexShrink: 0 }} />
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>
              <span style={{ color: '#a78bfa', fontWeight: 700 }}>Guardrail rules:</span> structural fields (symbol, strategyType) are immutable. Max 8 parameter changes per cycle. Every recommendation written to an append-only audit trail. Config backup created atomically before any change.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── RISK ENGINE ── */}
      <section style={{ background: 'linear-gradient(180deg,#020408,#0a0308,#020408)', borderTop: '1px solid rgba(239,68,68,0.08)', borderBottom: '1px solid rgba(239,68,68,0.08)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(239,68,68,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#ef4444' }}>Risk Engine</span>
            <h2 className="text-3xl font-black text-white mt-2 flex items-center gap-3">
              <Shield size={24} style={{ color: '#ef4444' }} /> 8-Layer Pre-Trade Risk
            </h2>
            <p className="text-sm mt-2 max-w-xl" style={{ color: '#64748b' }}>
              Cheapest check first. Hot-reload via SIGHUP — no restart. Kill switch state preserved across reload.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {riskLayers.map((r, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(239,68,68,0.1)', borderRadius: '14px', padding: '18px', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)'; e.currentTarget.style.backgroundColor = '#100a0a'; e.currentTarget.style.boxShadow = '0 0 20px rgba(239,68,68,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.1)'; e.currentTarget.style.backgroundColor = '#07101f'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '5px', padding: '2px 7px', fontWeight: 700 }}>L{r.order}</span>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.82rem' }}>{r.name}</span>
                  </div>
                  <p style={{ fontSize: '0.74rem', color: '#475569', lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATENCY + AI MODELS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn>
            <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '18px', padding: '28px', height: '100%' }}>
              <div style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>⚡ OMS Latency</div>
              {[
                { label: 'Intent-to-Route P99 target', value: '<100 μs', sub: 'internal, single host' },
                { label: 'Measured P50 (full-stack)', value: '30 μs', sub: 'P95: 61 μs · P99: 84 μs' },
                { label: 'SPSC ring transit', value: '~700 ns', sub: 'p50 measured' },
                { label: 'Risk gate (8 checks)', value: '~100 ns', sub: 'p50 measured' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontSize: '0.78rem', color: '#475569' }}>{m.label}</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'monospace', fontWeight: 800, color: '#a78bfa', fontSize: '1rem' }}>{m.value}</div>
                    <div style={{ fontSize: '0.6rem', color: '#334155' }}>{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '18px', padding: '28px', height: '100%' }}>
              <div style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>🧠 Local AI Models</div>
              {[
                { model: 'deepseek-r1:14b', role: 'Primary EOD analyst', note: 'Chain-of-thought reasoning, best JSON output', size: '9 GB', primary: true },
                { model: 'qwen3.5:latest', role: 'Fast fallback', note: 'Time-constrained cycles', size: '6.6 GB', primary: false },
                { model: 'llama3:latest', role: 'Backup', note: 'If primary models fail', size: '4.7 GB', primary: false },
              ].map((m, i) => (
                <div key={i} style={{ padding: '12px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, color: m.primary ? '#a78bfa' : '#64748b', fontSize: '0.82rem' }}>{m.model}</span>
                    <span style={{ fontSize: '0.62rem', color: '#334155', fontFamily: 'monospace' }}>{m.size}</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#fff', marginBottom: '2px' }}>{m.role}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155' }}>{m.note}</div>
                </div>
              ))}
              <div style={{ marginTop: '16px', padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)' }}>
                <span style={{ fontSize: '0.73rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  All models run locally via Ollama. Customer data never leaves your server. No OpenAI. No cloud. No per-query fees.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ padding: '100px 0' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover"
            style={{ filter: 'hue-rotate(260deg) saturate(2.5) brightness(0.2)', opacity: 0.7 }}>
            <source src="/videos/galaxy.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, rgba(2,4,8,0.9) 70%)' }} />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'linear-gradient(135deg,#7c3aed,#ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}>
              <Brain size={30} color="#fff" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Deploy AI-driven bots<br />
              <span style={{ background: 'linear-gradient(135deg,#a78bfa,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>on your own infrastructure</span>
            </h2>
            <p className="mb-10 text-lg" style={{ color: '#94a3b8' }}>
              7 strategy types, local LLM parameter tuning, IBKR and Alpaca connectivity —
              all running on your server with zero cloud dependency.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-white text-lg transition-all"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#6d28d9)', boxShadow: '0 0 40px rgba(124,58,237,0.45)' }}>
              Get Started <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
