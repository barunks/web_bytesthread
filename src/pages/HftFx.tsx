import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Clock, Layers, Lock, Globe, Activity } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ProductCard from '../components/ProductCard'
import { products } from '../data/content'

const hftProduct = products.find((p) => p.id === 'ultrafasthft')!
const fxProduct = products.find((p) => p.id === 'fxtrading')!

const latencyMetrics = [
  { metric: 'p50 Tick-to-Trade', value: '<5 μs', highlight: true },
  { metric: 'p99 End-to-End', value: '<20 μs', highlight: true },
  { metric: 'SPSC Ring p50', value: '700 ns', highlight: false },
  { metric: 'OMS Risk Gate p50', value: '100 ns', highlight: false },
  { metric: 'Aeron IPC p50', value: '<1 μs', highlight: false },
  { metric: 'Replay Determinism', value: '100%', highlight: false },
]

const transports = [
  {
    name: 'Aeron Sequencer',
    tag: 'Primary IPC',
    desc: 'Reliable UDP multicast and IPC via Aeron for ultra-low-latency pub/sub between microservices. Sub-microsecond p50 on loopback.',
    color: 'cyan',
  },
  {
    name: 'Memory-Mapped Ring',
    tag: 'SPSC',
    desc: 'POSIX shm_open + mmap SPSC ring buffers, cache-line aligned to 64 bytes. Zero-copy, zero-allocation on the hot path.',
    color: 'cyan',
  },
  {
    name: 'Unix Domain Socket',
    tag: 'UDS',
    desc: 'UDS for co-located process communication where kernel-bypass is not required. Lower overhead than TCP for same-host services.',
    color: 'accent',
  },
  {
    name: 'TCP / Raw Socket',
    tag: 'External',
    desc: 'Kernel-bypass TCP via DPDK or standard sockets for exchange connectivity. Configurable per venue based on co-location constraints.',
    color: 'accent',
  },
  {
    name: 'FIX Protocol',
    tag: 'FIX-Agnostic',
    desc: 'Protocol-agnostic FIX adapter layer — supports any FIX version, proprietary binary, or REST/WebSocket. Zero-copy message parsing, no dynamic allocation.',
    color: 'purple',
  },
]

const microservices = [
  { step: '01', name: 'Market Data Gateway', desc: 'Normalises raw feed from exchange WebSocket / FIX / binary into internal tick events. Publishes via Aeron multicast to all subscribers simultaneously.' },
  { step: '02', name: 'Strategy Engine', desc: 'Consumes normalised ticks from the Aeron subscriber ring. Runs signal logic, generates order intents. CPU-pinned, NUMA-aware, zero heap on hot path.' },
  { step: '03', name: 'Order Management System', desc: 'Receives intents via SPSC memory-mapped ring. Enforces 7-layer pre-trade risk synchronously in 100 ns. Sequences orders with monotonic IDs.' },
  { step: '04', name: 'Execution Gateway', desc: 'Translates OMS orders to venue protocol (FIX, binary, REST). Manages ACK/NACK lifecycle. Publishes fills back via Aeron to OMS and Strategy.' },
  { step: '05', name: 'Risk & Telemetry Bus', desc: 'Async UDS bus for P&L accounting, drawdown monitoring, and kill-switch propagation. Writes to time-series DB via ILP for nanosecond-precision audit trail.' },
]

const riskLayers = [
  { layer: 'L0', title: 'Strategy-Local Limits', desc: 'Quote count, inventory target, position sizing — enforced inside the strategy thread before intent is emitted.' },
  { layer: 'L1', title: 'Synchronous Pre-Trade Risk', desc: 'Kill switch, price collar, GCRA rate limiter, lot compliance, notional limits — 100 ns gate in OMS hot path.' },
  { layer: 'L2', title: 'Portfolio & Drawdown Controller', desc: 'Realised/unrealised P&L, gross/net exposure, max drawdown threshold → atomic mass-cancel via Aeron broadcast.' },
]

const fxCapabilities = [
  { icon: Globe, title: 'RFQ & RFS Workflows', desc: 'Full request-for-quote and request-for-stream lifecycle. Streaming quote support with configurable validity windows and auto-reject on stale prices.' },
  { icon: Activity, title: 'IQ Engine — CBBO / VWAP / TWAP', desc: 'Pluggable execution intelligence rules: Composite Best Bid/Offer aggregation, VWAP Slice, TWAP Slice, and custom rule sets per instrument class.' },
  { icon: Layers, title: 'Instrument Coverage', desc: 'FX Spot, NDF, FX Swaps, Vanilla Options. Configurable fixing source, settlement calendar, and notional currency per instrument.' },
  { icon: Zap, title: 'Protocol-Agnostic Connectivity', desc: 'FIX (any version), proprietary binary, REST/WebSocket adapters. Venue adapter is a hot-swappable plugin — no core changes required.' },
]

const hotPathTechniques = [
  {
    label: 'Kernel-Bypass',
    tag: 'DPDK / SHM',
    desc: 'POSIX shm_open + mmap and DPDK eliminate kernel entry on the hot path. Zero context switches between market data receipt and order submission.',
  },
  {
    label: 'CPU Affinity Pinning',
    tag: 'NUMA-Aware',
    desc: 'Every hot-path thread is isolated on a dedicated core via pthread_setaffinity. NUMA-local allocation ensures memory never crosses a socket boundary.',
  },
  {
    label: 'Cache-Line Optimisation',
    tag: 'alignas(64)',
    desc: 'All shared structures are aligned to 64-byte cache lines. Hot and cold fields are separated into distinct structs to maximise L1/L2 hit rate.',
  },
  {
    label: 'Cache Coherence Control',
    tag: 'SPSC Ownership',
    desc: 'SPSC queues enforce single-writer / single-reader ownership. No false sharing, no MESI invalidation storms — cache lines stay in Modified state on the owning core.',
  },
  {
    label: 'Branch Prediction',
    tag: '[[likely]] / [[unlikely]]',
    desc: 'Hot-path conditionals are annotated with C++23 [[likely]]/[[unlikely]] and ordered by execution probability to maximise branch predictor hit rate.',
  },
  {
    label: 'SIMD Acceleration',
    tag: 'AVX2 / AVX-512',
    desc: 'Price comparison, risk limit checks, and message serialisation use AVX2/AVX-512 intrinsics to process multiple values per clock cycle.',
  },
  {
    label: 'Zero-Copy',
    tag: 'No memcpy',
    desc: 'Market data is written once into shared memory and read in-place by all consumers. No intermediate copies between exchange feed and strategy logic.',
  },
  {
    label: 'Zero-Allocation',
    tag: 'No heap',
    desc: 'Thread-local object pools pre-allocate all order and event objects at startup. The hot path makes zero calls to malloc/new during market hours.',
  },
  {
    label: 'Zero-Syscall',
    tag: 'User-space only',
    desc: 'From tick receipt to order dispatch, the critical path makes no system calls. All IPC is via memory-mapped rings or Aeron IPC — pure user-space.',
  },
]

export default function HftFx() {
  const [activeTransport, setActiveTransport] = useState(0)

  return (
    <div className="pt-24" style={{ backgroundColor: '#020408' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {[
            { src: '/images/hft-screen.webp', label: 'HFT Engine' },
            { src: '/images/hft-datacenter.webp', label: 'Data Center' },
            { src: '/images/equities.webp', label: 'Equities' },
            { src: '/images/fx-trading.webp', label: 'FX Trading' },
          ].map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" style={{ filter: 'brightness(0.22) saturate(1.5)' }} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.55) 0%, rgba(2,4,8,0.72) 60%, rgba(2,4,8,1) 100%)' }} />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.18) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">HFT & FX Trading</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-3 mb-5 leading-tight">
              Sub-Microsecond<br />
              <span className="text-gradient">Execution Infrastructure</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-4">
              Native OS &amp; cloud-deployable trading platforms built in C++23. Every solution ships with a
              <span className="text-brand-400 font-semibold"> multi-transport messaging architecture</span> — Aeron Sequencer,
              memory-mapped SPSC rings, UDS, TCP, and FIX — selected per hop for minimum latency.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mb-8">
              Built for HFT desks, prop trading firms, and institutional FX operations that cannot tolerate jitter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all glow-blue" style={{ backgroundColor: '#06b6d4' }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all" style={{ border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LATENCY METRICS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Clock size={20} className="text-brand-400" /> Measured Performance
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real numbers from production builds on bare-metal Linux x86-64 — not marketing estimates.</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {latencyMetrics.map((m, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.18)', borderRadius: '12px', padding: '20px', textAlign: 'center', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.18)')}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: m.highlight ? '#22d3ee' : '#00ff88' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>{m.metric}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── HOT PATH OPTIMISATIONS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <FadeIn className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Engineering Depth</span>
          <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
            <Zap size={20} className="text-brand-400" /> Hot Path Optimisation Techniques
          </h2>
          <p className="text-sm mt-2 max-w-2xl" style={{ color: '#64748b' }}>
            Nine specific techniques applied to every nanosecond-sensitive code path. Each one is a deliberate engineering decision, not a default.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotPathTechniques.map((t, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.14)', borderRadius: '12px', padding: '18px', height: '100%', transition: 'border-color 0.2s, background-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.14)'; e.currentTarget.style.backgroundColor = '#080f1e' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{t.label}</span>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '999px', backgroundColor: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', color: '#00ff88', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: '8px' }}>{t.tag}</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── MESSAGING TRANSPORT ARCHITECTURE ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.1)', borderBottom: '1px solid rgba(6,182,212,0.1)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">Native OS &amp; Cloud</span>
            <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
              <Layers size={20} className="text-brand-400" /> Multi-Transport Messaging Architecture
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Every transport is selected per hop based on co-location topology, latency budget, and reliability requirements.
              The same platform runs on bare-metal Linux, cloud VMs, or hybrid co-lo — with zero code changes.
            </p>
          </FadeIn>

          {/* Transport selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {transports.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTransport(i)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: activeTransport === i ? '1px solid #06b6d4' : '1px solid rgba(6,182,212,0.2)',
                  backgroundColor: activeTransport === i ? 'rgba(6,182,212,0.15)' : 'transparent',
                  color: activeTransport === i ? '#22d3ee' : '#64748b',
                }}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active transport detail */}
          <FadeIn key={activeTransport}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '16px', padding: '28px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{transports[activeTransport].name}</span>
                  <span style={{ padding: '2px 10px', borderRadius: '999px', fontSize: '0.68rem', fontFamily: 'monospace', backgroundColor: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
                    {transports[activeTransport].tag}
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.7 }}>{transports[activeTransport].desc}</p>
              </div>
              {/* Pipeline diagram */}
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', backgroundColor: '#020408', borderRadius: '12px', padding: '16px', border: '1px solid rgba(6,182,212,0.1)' }}>
                <div style={{ color: '#22d3ee', marginBottom: '8px' }}>// Transport hop diagram</div>
                {[
                  { from: 'Market Data GW', to: 'Strategy', via: 'Aeron / Mem-Mapped Ring' },
                  { from: 'Strategy', to: 'OMS', via: 'SPSC Ring' },
                  { from: 'OMS', to: 'Exec GW', via: 'SPSC Ring' },
                  { from: 'Exec GW', to: 'Exchange', via: 'TCP / FIX' },
                ].map((hop, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#64748b' }}>
                    <span style={{ color: '#e2e8f0' }}>{hop.from}</span>
                    <span style={{ color: '#06b6d4' }}>→</span>
                    <span style={{ color: '#e2e8f0' }}>{hop.to}</span>
                    <span style={{ marginLeft: 'auto', color: i === 0 ? '#22d3ee' : '#00ff88', fontSize: '0.65rem' }}>[{hop.via}]</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* All transports grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {transports.map((t, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  onClick={() => setActiveTransport(i)}
                  style={{
                    backgroundColor: '#080f1e',
                    border: activeTransport === i ? '1px solid rgba(6,182,212,0.5)' : '1px solid rgba(6,182,212,0.12)',
                    borderRadius: '12px',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (activeTransport !== i) e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)' }}
                  onMouseLeave={e => { if (activeTransport !== i) e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{t.name}</span>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '999px', backgroundColor: 'rgba(6,182,212,0.1)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.2)', whiteSpace: 'nowrap' }}>{t.tag}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap size={20} className="text-brand-400" /> Our HFT &amp; FX Platforms
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard {...hftProduct} index={0} />
          <ProductCard {...fxProduct} index={1} />
        </div>
      </section>

      {/* ── FX IMAGE BANNER ── */}
      <section className="relative overflow-hidden">
        <img src="/images/fx-trading.webp" alt="FX Trading" className="w-full object-cover" style={{ height: '220px', filter: 'brightness(0.28) saturate(1.6) hue-rotate(170deg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(2,4,8,0.92) 0%, rgba(2,4,8,0.5) 50%, rgba(2,4,8,0.92) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#22d3ee' }}>FX Nexus Platform</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Protocol-Agnostic. Sub-20μs End-to-End.</h3>
          <p className="text-sm mt-2 max-w-xl" style={{ color: '#94a3b8' }}>RFQ / RFS · CBBO · VWAP Slice · TWAP Slice · Spot · NDF · FX Swaps · Vanilla Options</p>
        </div>
      </section>

      {/* ── MICROSERVICES PIPELINE ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.1)', borderBottom: '1px solid rgba(6,182,212,0.1)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Microservices Architecture</span>
            <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
              <Layers size={20} className="text-brand-400" /> End-to-End Data Path
            </h2>
            <p className="text-sm mt-2 max-w-2xl" style={{ color: '#94a3b8' }}>
              Each service is an independent process, CPU-pinned and NUMA-aware. Inter-service communication uses the lowest-latency transport available for that hop.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {microservices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ display: 'flex', gap: '16px', backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.14)', borderRadius: '12px', padding: '18px 20px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.14)')}
                >
                  <div style={{ minWidth: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.72rem', color: '#22d3ee', flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>{s.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FX CAPABILITIES ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>FX Nexus</span>
          <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
            <Globe size={20} className="text-brand-400" /> Institutional FX Capabilities
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fxCapabilities.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.14)', borderRadius: '14px', padding: '22px', height: '100%', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.14)')}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <f.icon size={18} style={{ color: '#22d3ee' }} />
                </div>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '0.9rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── RISK LAYERS ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.1)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Lock size={20} className="text-brand-400" /> 3-Layer Execution Guardrails
            </h2>
            <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>Every order intent passes through three independent risk layers before touching the exchange.</p>
          </FadeIn>
          <div className="space-y-4">
            {riskLayers.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: '16px', backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.14)', borderRadius: '12px', padding: '20px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.14)')}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', color: '#22d3ee', flexShrink: 0 }}>{r.layer}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{r.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{r.desc}</div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a custom HFT or FX engine?</h2>
          <p className="mb-8" style={{ color: '#94a3b8' }}>
            We design and build bespoke ultra-low-latency trading systems — native OS or cloud — tailored to your asset class, transport stack, and risk requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all glow-blue" style={{ backgroundColor: '#06b6d4' }}>
            Discuss Your Requirements <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
