import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, TrendingUp, Globe, CheckCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const outcomes = [
  { value: '<5μs', label: 'Tick-to-Trade', sub: 'Measured on live hardware' },
  { value: '700ns', label: 'Internal Routing', sub: 'Order to risk gate' },
  { value: '100ns', label: 'Risk Clearance', sub: 'All 7 checks combined' },
  { value: '<20μs', label: 'FX End-to-End', sub: 'Quote receipt to ACK' },
  { value: '100%', label: 'Replay Fidelity', sub: 'Deterministic audit trail' },
  { value: '5+', label: 'Venues Live', sub: 'Simultaneous execution' },
]

const businessValue = [
  {
    icon: TrendingUp,
    color: '#22d3ee',
    title: 'Capture More Alpha',
    desc: 'Every microsecond of latency advantage translates directly into better fill prices, tighter spreads captured, and more arbitrage windows exploited before competitors react.',
  },
  {
    icon: Shield,
    color: '#00ff88',
    title: 'Trade with Confidence',
    desc: 'Seven independent risk guardrails clear every order in under 100 nanoseconds — position limits, price collars, rate limiters, and a hardware kill switch that never misses.',
  },
  {
    icon: Globe,
    color: '#a78bfa',
    title: 'Any Market, Any Protocol',
    desc: 'Connect to equities, FX spot, NDFs, futures, and options across any venue. The platform adapts to your exchange — not the other way around.',
  },
  {
    icon: Zap,
    color: '#f59e0b',
    title: 'Proven in Production',
    desc: 'Every performance number is measured on real hardware under live market conditions. No simulated benchmarks. No marketing estimates. Reproducible on your infrastructure.',
  },
]

const platforms = [
  {
    name: 'UltraFastHFT',
    tag: 'Equities · Futures · Multi-Asset',
    color: '#22d3ee',
    headline: 'The fastest path from market signal to executed order.',
    pitch: 'Built for prop desks and HFT firms that compete on speed. UltraFastHFT delivers a complete execution stack — market data, strategy, order management, and risk — on a single zero-copy data path. Deploy on co-located bare metal or cloud VMs with identical performance characteristics.',
    outcomes: [
      'Capture price dislocations before slower participants react',
      'Run 7 simultaneous strategy types with independent risk budgets',
      'Full deterministic replay for regulatory audit and post-trade analysis',
      'Deploy in hours, not months — production-ready from day one',
    ],
  },
  {
    name: 'FX Nexus',
    tag: 'FX Spot · NDF · Swaps · Options',
    color: '#a78bfa',
    headline: 'Institutional FX execution without the institutional overhead.',
    pitch: 'FX Nexus connects your trading desk to any venue via any protocol — FIX, binary, REST, or WebSocket — with end-to-end latency under 20 microseconds. Full RFQ and streaming quote workflows, CBBO aggregation, VWAP and TWAP execution, and a live Nexus Dashboard for P&L and position monitoring.',
    outcomes: [
      'Quote and execute Spot, NDF, FX Swaps, and Vanilla Options from one platform',
      'Streaming quotes with configurable validity windows and auto-reject on stale prices',
      'CBBO aggregation across multiple liquidity providers for best execution',
      'Swap any venue adapter without touching core trading logic',
    ],
  },
]

const riskLayers = [
  { id: 'L0', name: 'Strategy Limits', desc: 'Position sizing and inventory targets enforced before any order intent is generated.' },
  { id: 'L1', name: 'Kill Switch', desc: 'Instant halt. Hardware-enforced. Survives configuration reload.' },
  { id: 'L2', name: 'Price Collar', desc: 'Rejects orders priced outside a configurable band vs last market quote.' },
  { id: 'L3', name: 'Rate Limiter', desc: 'Maximum orders per second enforced atomically — no burst through.' },
  { id: 'L4', name: 'Notional Cap', desc: 'Per-order and per-session notional limits. Cannot be overridden by strategy.' },
  { id: 'L5', name: 'Exposure Gate', desc: 'Portfolio-wide gross and net exposure monitored in real time.' },
  { id: 'L6', name: 'Drawdown Stop', desc: 'Realised and unrealised P&L tracked per bot and portfolio. Auto-cancel on breach.' },
]

const fxWorkflows = [
  { label: 'RFQ', desc: 'Request-for-Quote — single dealer or multi-dealer price discovery with configurable response windows.' },
  { label: 'RFS', desc: 'Request-for-Stream — continuous streaming quotes with live spread and validity management.' },
  { label: 'CBBO', desc: 'Composite Best Bid/Offer — aggregates liquidity across providers for best execution.' },
  { label: 'VWAP Slice', desc: 'Volume-weighted execution sliced across the session to minimise market impact.' },
  { label: 'TWAP Slice', desc: 'Time-weighted execution for predictable, schedule-driven order flow.' },
]

export default function HftFx() {
  const [activePlatform, setActivePlatform] = useState(0)
  const [activeRisk, setActiveRisk] = useState<number | null>(null)

  return (
    <div style={{ backgroundColor: '#020408' }}>

      {/* ── ANIMATED HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        {/* Animated CSS background */}
        <div className="animated-hero-bg">
          {/* Base image grid */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {[
              '/images/hft-screen.webp',
              '/images/hft-datacenter.webp',
              '/images/equities.webp',
              '/images/fx-trading.webp',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.18) saturate(1.6)', transform: 'scale(1.05)', transition: 'transform 8s ease' }} />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.5) 0%, rgba(2,4,8,0.65) 55%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 70%)' }} />

          {/* Animated orbs */}
          <div className="orb" style={{ width: 600, height: 600, top: '-15%', left: '-10%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', animationDelay: '0s', animationDuration: '7s' }} />
          <div className="orb" style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)', animationDelay: '2s', animationDuration: '9s' }} />
          <div className="orb" style={{ width: 300, height: 300, top: '40%', right: '20%', background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)', animationDelay: '4s', animationDuration: '11s' }} />

          {/* Scanline */}
          <div className="scanline" />

          {/* Animated grid */}
          <div className="grid-pan" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(6,182,212,0.35)', backgroundColor: 'rgba(6,182,212,0.08)', backdropFilter: 'blur(8px)' }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400">HFT · FX · Equities · Futures · Multi-Asset</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              Win the Race<br />
              <span className="text-gradient">Before It Starts</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              BytesThread builds <span className="text-cyan-400 font-semibold">execution infrastructure</span> for trading firms
              that compete on speed. When your order reaches the exchange microseconds ahead of the market,
              you capture better prices, tighter spreads, and more opportunities — every session.
            </p>
            <p className="text-slate-500 max-w-xl mb-10">
              Trusted by prop desks, HFT firms, and institutional FX operations across equities, futures, FX, and crypto.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all glow-cyan"
                style={{ backgroundColor: '#22d3ee' }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
                Our Story
              </Link>
            </div>

            {/* Outcome metrics */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {outcomes.map((o, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }}
                  style={{ backgroundColor: 'rgba(6,12,24,0.75)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.1rem', color: '#22d3ee', lineHeight: 1 }}>{o.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{o.label}</div>
                  <div style={{ fontSize: '0.6rem', color: '#475569', marginTop: '2px' }}>{o.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BUSINESS VALUE ── */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Speed Is a Business Advantage
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              In electronic markets, the firm with the fastest, most reliable execution infrastructure consistently outperforms. Here's what that means in practice.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {businessValue.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '16px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: v.color + '18', border: `1px solid ${v.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <v.icon size={20} style={{ color: v.color }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM SELECTOR ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Our Platforms</span>
            <h2 className="text-3xl font-black text-white mt-2">Two Platforms. One Standard.</h2>
            <p className="text-slate-400 mt-2 max-w-xl">
              Whether you're running a high-frequency equities desk or an institutional FX operation, we have a production-ready platform built for your market.
            </p>
          </FadeIn>

          {/* Tab selector */}
          <div className="flex gap-3 mb-8">
            {platforms.map((p, i) => (
              <button key={i} onClick={() => setActivePlatform(i)}
                style={{
                  padding: '10px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s',
                  border: activePlatform === i ? `1px solid ${p.color}60` : '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: activePlatform === i ? p.color + '15' : 'transparent',
                  color: activePlatform === i ? p.color : '#64748b',
                }}>
                {p.name}
              </button>
            ))}
          </div>

          <motion.div key={activePlatform} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div style={{ backgroundColor: '#07101f', border: `1px solid ${platforms[activePlatform].color}25`, borderRadius: '20px', overflow: 'hidden' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative" style={{ minHeight: '320px' }}>
                  <img
                    src={activePlatform === 0 ? '/images/hft-screen.webp' : '/images/fx-trading.webp'}
                    alt={platforms[activePlatform].name}
                    className="w-full h-full object-cover"
                    style={{ filter: `brightness(0.4) saturate(1.8) hue-rotate(${activePlatform === 0 ? '170' : '240'}deg)` }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(7,16,31,1) 100%)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(7,16,31,0.9) 100%)' }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', padding: '4px 12px', borderRadius: '999px', backgroundColor: platforms[activePlatform].color + '18', border: `1px solid ${platforms[activePlatform].color}40`, color: platforms[activePlatform].color }}>
                      {platforms[activePlatform].tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '36px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{platforms[activePlatform].name}</h3>
                  <p style={{ fontSize: '0.9rem', color: platforms[activePlatform].color, fontWeight: 600, marginBottom: '16px' }}>{platforms[activePlatform].headline}</p>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.75, marginBottom: '20px' }}>{platforms[activePlatform].pitch}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {platforms[activePlatform].outcomes.map((o, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <CheckCircle size={15} style={{ color: platforms[activePlatform].color, flexShrink: 0, marginTop: '2px' }} />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all"
                    style={{ backgroundColor: platforms[activePlatform].color }}>
                    Discuss This Platform <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FX WORKFLOWS ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#a78bfa' }}>FX Nexus</span>
            <h2 className="text-2xl font-black text-white mt-2">Every FX Workflow, Out of the Box</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              From single-dealer RFQ to multi-provider CBBO aggregation — FX Nexus handles the full execution lifecycle for Spot, NDF, Swaps, and Options.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fxWorkflows.map((w, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.12)', borderRadius: '14px', padding: '22px', height: '100%', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.42)'; e.currentTarget.style.backgroundColor = '#0a0820' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.12)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1rem', color: '#a78bfa', marginBottom: '10px' }}>{w.label}</div>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── RISK GUARDRAILS ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Risk Management</span>
            <h2 className="text-2xl font-black text-white mt-2">
              Seven Guardrails. One Hundred Nanoseconds.
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Every order clears seven independent risk checks before it touches the exchange — all in under 100 nanoseconds. Your compliance team gets the controls they need without slowing down the trading desk.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {riskLayers.map((r, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  style={{ backgroundColor: activeRisk === i ? '#0a1525' : '#07101f', border: `1px solid ${activeRisk === i ? 'rgba(6,182,212,0.5)' : 'rgba(6,182,212,0.12)'}`, borderRadius: '14px', padding: '20px', cursor: 'default', transition: 'all 0.2s', height: '100%' }}
                  onMouseEnter={() => setActiveRisk(i)}
                  onMouseLeave={() => setActiveRisk(null)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: '#22d3ee', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '5px', padding: '2px 7px', fontWeight: 700 }}>{r.id}</span>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.82rem' }}>{r.name}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hft-datacenter.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.15) saturate(1.5) hue-rotate(180deg)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.7), rgba(2,4,8,0.95))' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.12), transparent)' }} />
          <div className="grid-pan absolute inset-0 opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Ready to execute faster<br />
              <span className="text-gradient">than your competition?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Tell us your asset class, venue, and latency target. We'll design and deliver a production-ready execution platform — measured, not estimated.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-black text-black text-lg transition-all glow-cyan"
                style={{ backgroundColor: '#22d3ee' }}>
                Start the Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/ai-trading"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all"
                style={{ border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
                See AI Trading
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
