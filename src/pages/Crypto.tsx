import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Cpu, GitBranch, Zap, Shield } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { products } from '../data/content'

const arbProduct = products.find((p) => p.id === 'arbtrading')!

const exchanges = [
  { name: 'Coinbase', region: 'US' },
  { name: 'Binance', region: 'Global' },
  { name: 'Bitfinex', region: 'Global' },
  { name: 'Deribit', region: 'Derivatives' },
  { name: 'OKX', region: 'Global' },
  { name: '+ Any Exchange', region: 'Configurable' },
]

const strategies = [
  {
    icon: TrendingUp,
    title: 'Cross-Exchange Spatial Arbitrage',
    desc: 'Exploits price differences for the same asset across venues. Triggers when: Price(VenueB Bid) − Price(VenueA Ask) > Fee_A + Fee_B + MinProfitTicks.',
    badge: 'Live',
    badgeColor: '#00ff88',
  },
  {
    icon: GitBranch,
    title: 'Futures Roll Arbitrage',
    desc: 'Market-makes on illiquid dated futures while instantly hedging on liquid perpetuals. Captures the roll spread with controlled inventory risk.',
    badge: 'Primary',
    badgeColor: '#22d3ee',
  },
  {
    icon: Zap,
    title: 'Ultra-Fast Predictive Arbitrage',
    desc: 'Microsecond-level opportunity detection combined with ML-based trend analysis to pre-position before competitors react.',
    badge: 'ML-Enhanced',
    badgeColor: '#a78bfa',
  },
  {
    icon: Shield,
    title: 'Crypto Perpetual Market Making',
    desc: 'Fee-aware post-only quoter enforcing maker execution to capture rebates. Inventory-skewed microprice quoting with funding rate awareness.',
    badge: 'Market Making',
    badgeColor: '#22d3ee',
  },
]

const pipeline = [
  {
    step: '01',
    label: 'Native WebSocket Gateway',
    desc: 'Direct native WebSocket connections to every configured exchange — no third-party adapter, no overhead. Parallel feed ingestion with per-venue reconnect logic.',
    transport: 'Native WS',
  },
  {
    step: '02',
    label: 'Market Data Normaliser',
    desc: 'Microsecond normalisation of raw exchange ticks into a unified internal format. Publishes via lock-free SPSC queues to all downstream consumers simultaneously.',
    transport: 'SPSC Ring',
  },
  {
    step: '03',
    label: 'Integrated Arbitrage Engine',
    desc: 'Multi-strategy coordinator consuming normalised ticks. Runs spatial arb, roll arb, and ML trend overlay in parallel CPU-pinned threads.',
    transport: 'SPSC Ring',
  },
  {
    step: '04',
    label: 'Execution & Order Management',
    desc: 'Order lifecycle management with synchronous pre-trade risk checks. Sends orders back to exchange via native WebSocket. Manages ACK/NACK and fill reconciliation.',
    transport: 'Native WS',
  },
  {
    step: '05',
    label: 'Telemetry & Persistence',
    desc: 'Async time-series persistence with nanosecond precision. Real-time WebSocket dashboard for live P&L, position, and latency monitoring.',
    transport: 'Async UDS',
  },
]

const techPillars = [
  { label: 'Native WebSocket', sub: 'Zero-overhead exchange connectivity' },
  { label: 'SPSC Lock-Free Queues', sub: 'Cache-line aligned, zero allocation' },
  { label: 'POSIX SHM + mmap', sub: 'Sub-microsecond IPC' },
  { label: 'Aeron IPC', sub: 'Reliable pub/sub between services' },
  { label: 'CPU Affinity Pinning', sub: 'NUMA-aware thread placement' },
  { label: 'ML Trend Overlay', sub: 'Pre-emptive positioning engine' },
]

export default function Crypto() {
  return (
    <div className="pt-24" style={{ backgroundColor: '#020408' }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0">
          <img
            src="/images/crypto-trading.webp"
            alt="Crypto Trading"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.18) saturate(2)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.45) 0%, rgba(2,4,8,0.65) 55%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,255,136,0.14) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Crypto Trading</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-3 mb-5 leading-tight">
              Microsecond Crypto<br />
              <span className="text-gradient">Arbitrage at Scale</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
              C++23 multi-exchange arbitrage platform with <span style={{ color: '#00ff88', fontWeight: 600 }}>native WebSocket connectivity</span>,
              lock-free SPSC queues, and ML-enhanced opportunity detection.
              Configurable for any exchange — production-ready from day one.
            </p>

            {/* Exchange pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {exchanges.map((ex) => (
                <div key={ex.name} style={{
                  display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                  padding: '6px 14px', borderRadius: '999px',
                  backgroundColor: ex.name.startsWith('+') ? 'rgba(0,255,136,0.06)' : 'rgba(0,255,136,0.08)',
                  border: ex.name.startsWith('+') ? '1px dashed rgba(0,255,136,0.3)' : '1px solid rgba(0,255,136,0.22)',
                }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 600, color: ex.name.startsWith('+') ? '#64748b' : '#00ff88' }}>{ex.name}</span>
                  <span style={{ fontSize: '0.6rem', color: '#475569', marginTop: '1px' }}>{ex.region}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all glow-blue" style={{ backgroundColor: '#06b6d4' }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/hft-fx" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all" style={{ border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}>
                HFT Platform <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARB ENGINE PRODUCT CARD WITH IMAGE ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Platform</span>
          <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
            <TrendingUp size={20} style={{ color: '#00ff88' }} /> ArbTrading Engine
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '0', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,255,136,0.18)' }}>
            {/* Image panel */}
            <div className="relative" style={{ minHeight: '340px' }}>
              <img
                src="/images/crypto-trading.webp"
                alt="ArbTrading Engine"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.35) saturate(1.8) hue-rotate(100deg)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(8,15,30,1) 100%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(8,15,30,0.8) 100%)' }} />
              {/* Floating stats */}
              <div className="absolute bottom-5 left-5 right-5">
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { v: '<5 μs', l: 'p50 Tick-to-Trade' },
                    { v: '700 ns', l: 'SPSC Ring p50' },
                    { v: '∞', l: 'Exchanges' },
                  ].map((s) => (
                    <div key={s.l} style={{ flex: 1, backgroundColor: 'rgba(2,4,8,0.75)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '10px', padding: '10px', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'monospace', color: '#00ff88' }}>{s.v}</div>
                      <div style={{ fontSize: '0.62rem', color: '#64748b', marginTop: '2px' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div style={{ backgroundColor: '#080f1e', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#00ff88', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{arbProduct.category}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>{arbProduct.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{arbProduct.subtitle}</p>
                </div>
                <span style={{ padding: '3px 12px', borderRadius: '999px', fontSize: '0.7rem', fontFamily: 'monospace', backgroundColor: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88', whiteSpace: 'nowrap' }}>{arbProduct.badge}</span>
              </div>

              <p style={{ fontSize: '0.82rem', color: '#22d3ee', fontWeight: 600, margin: '14px 0 8px' }}>{arbProduct.headline}</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65, marginBottom: '16px' }}>{arbProduct.description}</p>

              <ul style={{ marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {arbProduct.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#cbd5e1' }}>
                    <span style={{ color: '#00ff88', flexShrink: 0, marginTop: '1px' }}>▸</span>{b}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {arbProduct.tech.map((t) => (
                  <span key={t} style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.68rem', fontFamily: 'monospace', backgroundColor: '#060c18', border: '1px solid rgba(255,255,255,0.06)', color: '#94a3b8' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── TECH PILLARS ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(0,255,136,0.08)', borderBottom: '1px solid rgba(0,255,136,0.08)', padding: '56px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Architecture</span>
            <h2 className="text-2xl font-bold text-white mt-2">Built for Nanosecond Precision</h2>
            <p className="text-sm mt-1 max-w-xl" style={{ color: '#64748b' }}>
              Every component is designed around a single constraint: zero unnecessary latency between market event and order submission.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techPillars.map((t, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  style={{ backgroundColor: '#080f1e', border: '1px solid rgba(0,255,136,0.12)', borderRadius: '12px', padding: '18px', transition: 'border-color 0.2s, background-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.12)'; e.currentTarget.style.backgroundColor = '#080f1e' }}
                >
                  <div style={{ fontWeight: 700, color: '#00ff88', fontSize: '0.85rem', marginBottom: '5px' }}>{t.label}</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>{t.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIES ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Strategies</span>
          <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
            <GitBranch size={20} style={{ color: '#22d3ee' }} /> Trading Strategies
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {strategies.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.14)', borderRadius: '14px', padding: '22px', height: '100%', transition: 'border-color 0.2s, background-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.14)'; e.currentTarget.style.backgroundColor = '#080f1e' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <s.icon size={16} style={{ color: '#22d3ee' }} />
                    </div>
                    <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{s.title}</h3>
                  </div>
                  <span style={{ padding: '2px 10px', borderRadius: '999px', fontSize: '0.65rem', fontFamily: 'monospace', backgroundColor: 'rgba(6,182,212,0.1)', border: `1px solid ${s.badgeColor}40`, color: s.badgeColor, whiteSpace: 'nowrap', flexShrink: 0 }}>{s.badge}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── VISUAL BANNER ── */}
      <section className="relative overflow-hidden" style={{ height: '200px' }}>
        <img src="/images/crypto-trading.webp" alt="Crypto Markets" className="w-full h-full object-cover" style={{ filter: 'brightness(0.22) saturate(2) hue-rotate(130deg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(2,4,8,0.9) 0%, rgba(2,4,8,0.4) 50%, rgba(2,4,8,0.9) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#00ff88' }}>Multi-Exchange · Configurable · Production-Ready</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Native WebSocket · SPSC Queues · Any Exchange</h3>
          <p className="text-sm mt-2 max-w-xl" style={{ color: '#94a3b8' }}>Coinbase · Binance · Bitfinex · Deribit · OKX · and any exchange you configure</p>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Data Path</span>
            <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
              <Cpu size={20} style={{ color: '#22d3ee' }} /> End-to-End System Pipeline
            </h2>
            <p className="text-sm mt-1 max-w-xl" style={{ color: '#64748b' }}>
              Every hop uses the lowest-latency transport available. Zero unnecessary copies between exchange feed and order submission.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {pipeline.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '12px', padding: '18px 20px', transition: 'border-color 0.2s, background-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.backgroundColor = '#080f1e' }}
                >
                  <div style={{ minWidth: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.7rem', color: '#22d3ee', flexShrink: 0 }}>{p.step}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{p.label}</span>
                      <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', padding: '1px 8px', borderRadius: '999px', backgroundColor: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', color: '#00ff88' }}>{p.transport}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Build your crypto trading edge</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            Custom arbitrage engines, market-making bots, and multi-exchange crypto infrastructure
            built in C++23 for institutional-grade performance on any venue.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all glow-blue" style={{ backgroundColor: '#06b6d4' }}>
            Get Started <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}
