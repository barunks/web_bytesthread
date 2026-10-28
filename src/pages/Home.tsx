import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, TrendingUp, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import MetricCounter from '../components/MetricCounter'
import LiveOrderBook from '../components/LiveOrderBook'
import LatencyHistogram from '../components/LatencyHistogram'
import { capabilities, testimonials } from '../data/content'

const GalaxyBackground = lazy(() => import('../components/GalaxyBackground'))


const stats = [
  { value: '<5μs', label: 'Tick-to-Trade', sub: 'p50 target' },
  { value: '700ns', label: 'IPC Transport', sub: 'p50 achieved' },
  { value: '100ns', label: 'Risk Gate', sub: 'p50 achieved' },
  { value: '5+', label: 'Exchanges', sub: 'simultaneous' },
]

export default function Home() {
  return (
    <div className="bg-dark">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Video background */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>

        {/* Galaxy Three.js overlay */}
        <Suspense fallback={null}>
          <GalaxyBackground />
        </Suspense>

        {/* Dark gradient overlay */}
        <div className="video-overlay absolute inset-0 z-10" />

        {/* Grid */}
        <div className="absolute inset-0 grid-bg z-10 opacity-40" />

        {/* Hero content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm text-cyan-400 text-xs font-mono mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              LIVE · p50 IPC: 700ns · OMS Risk Gate: 100ns · 12/12 Tests Passing
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
              <span className="text-white">Engineering the</span>
              <br />
              <span className="text-gradient">Speed of Markets</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
              BytesThread builds <span className="text-cyan-400 font-semibold">ultra-low-latency trading infrastructure</span>,
              quantitative strategies, and enterprise risk platforms for HFT desks,
              FX operations, crypto funds, and institutional trading firms.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link
                to="/hft-fx"
                className="group px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base transition-all glow-cyan flex items-center gap-2"
              >
                Explore HFT Platform
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold text-base transition-all backdrop-blur-sm"
              >
                Talk to Our Engineers
              </Link>
            </div>

            {/* Live widgets row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <LiveOrderBook />
              <LatencyHistogram />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 z-20 text-slate-600"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── METRICS ── */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-surface/50 to-dark" />
        <div className="relative max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Measured. Not Estimated.</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Performance That Speaks for Itself
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <MetricCounter key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── HFT SHOWCASE ── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_50%,rgba(6,182,212,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Ultra-Low Latency</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
                Sub-5 Microsecond<br />
                <span className="text-gradient">Tick-to-Trade</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our C++23 HFT engine achieves <span className="text-cyan-400 font-semibold">p50 IPC latency of 700 nanoseconds</span> and
                OMS risk gate processing of <span className="text-cyan-400 font-semibold">100 nanoseconds</span> — measured on production hardware,
                not simulated benchmarks.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Zero-copy · zero-allocation · zero-syscall on the hot path',
                  'Kernel-bypass via POSIX SHM — no OS scheduler in the critical path',
                  'CPU affinity pinning + NUMA-local memory — no cross-socket latency',
                  '7-layer pre-trade risk guardrails with hardware-enforced kill switch',
                  '100% deterministic replay with CRC32 integrity checks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Zap size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/hft-fx" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group">
                Explore the Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Stacked images for depth */}
                <div className="relative">
                  <img
                    src="/images/equities.webp"
                    alt="Fast Moving Equities"
                    className="rounded-2xl w-full object-cover h-40 mb-2"
                    style={{ filter: 'brightness(0.5) saturate(1.5) hue-rotate(160deg)' }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
                  <div className="absolute inset-0 rounded-2xl border border-cyan-500/15" />
                  <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-400">EQUITIES · FAST MOVING</div>
                </div>
                <img
                  src="/images/trading-chart.webp"
                  alt="HFT Trading Charts"
                  className="rounded-2xl w-full object-cover h-52"
                  style={{ filter: 'brightness(0.7) saturate(1.3) hue-rotate(10deg)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-tr from-dark/80 via-transparent to-cyan-500/10" />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl border border-cyan-500/20" />
                {/* Floating stat */}
                <div className="absolute bottom-4 left-4 right-4 card-glass rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-mono">TICK-TO-TRADE p50</div>
                      <div className="text-2xl font-black font-mono text-gradient">&lt;5μs</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-mono">OMS RISK GATE</div>
                      <div className="text-2xl font-black font-mono text-accent">100ns</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── CRYPTO ARBITRAGE ── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(0,255,136,0.06),transparent)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/crypto.webp"
                  alt="Crypto Trading"
                  className="rounded-2xl w-full object-cover h-72 lg:h-96"
                  style={{ filter: 'brightness(0.65) saturate(1.5)' }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-dark/80 via-transparent to-accent/5" />
                <div className="absolute inset-0 rounded-2xl border border-accent/20" />
                <div className="absolute top-4 left-4 card-glass rounded-xl px-3 py-2">
                  <div className="text-xs text-slate-500 font-mono mb-1">CONNECTED EXCHANGES</div>
                  <div className="flex gap-2 flex-wrap">
                    {['Binance', 'Coinbase', 'OKX', 'Deribit', 'Bitfinex', '+ More'].map(ex => (
                      <span key={ex} className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">Crypto Arbitrage</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
                Microsecond Arb<br />
                <span className="text-gradient">Any Exchange. Any Venue.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our C++23 arbitrage engine connects to Coinbase, Binance, Bitfinex, Deribit, OKX,
                and any exchange you configure — via native WebSocket, lock-free SPSC queues,
                and CPU affinity pinning, with ML-enhanced predictive positioning.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Cross-exchange spatial arbitrage with atomic execution',
                  'Futures roll arbitrage — market-make illiquid, hedge liquid',
                  'ML trend pre-positioning before competitors react',
                  'Zero heap allocation in market data callbacks',
                  'Real-time QuestDB persistence + Telegram alerts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <TrendingUp size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/crypto" className="inline-flex items-center gap-2 text-accent hover:text-emerald-300 font-semibold group">
                Explore Crypto Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── RISK & ANALYTICS ── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(139,92,246,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Risk & Compliance</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
                Enterprise Risk<br />
                <span className="text-gradient-purple">Built for Regulators</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                From 7-layer pre-trade guardrails inside the OMS to BNM-compliant vendor risk
                platforms on AWS — we build risk infrastructure that satisfies compliance teams
                without slowing down trading desks.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'GCRA atomic rate limiter — max orders/sec enforced in hardware',
                  'Monotonic P&L accounting with max drawdown auto-cancel',
                  'BNM compliance certificates with PDF watermarks',
                  'AWS RDS + ElastiCache Redis with circuit-breaker failover',
                  'Multi-gateway payment processing with automatic failover and audit trail',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Shield size={14} className="text-purple-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/portfolio-risk" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group">
                Explore Risk Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <img
                  src="/images/analytics.webp"
                  alt="Risk Analytics Dashboard"
                  className="rounded-2xl w-full object-cover h-72 lg:h-96"
                  style={{ filter: 'brightness(0.6) saturate(1.2) hue-rotate(240deg)' }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-dark/80 via-transparent to-purple-500/10" />
                <div className="absolute inset-0 rounded-2xl border border-purple-500/20" />
                <div className="absolute bottom-4 left-4 right-4 card-glass rounded-xl p-3">
                  <div className="text-xs text-slate-500 font-mono mb-2">RISK LAYERS ACTIVE</div>
                  <div className="space-y-1">
                    {['Kill Switch', 'Price Collar', 'GCRA Rate Limiter', 'Drawdown Controller'].map((l, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-xs text-slate-300 font-mono">{l}</span>
                        <span className="ml-auto text-[10px] text-accent font-mono">ACTIVE</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── CAPABILITIES GRID ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Full Stack</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Every Layer of Trading Technology
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              From bare-metal C++ ring buffers to cloud-deployed compliance platforms — we own the entire stack.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="card-glass rounded-2xl p-6 hover:glow-cyan transition-all duration-500 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <span className="text-cyan-400 text-xl">
                      {['⚡', '📈', '🗄️', '🛡️', '🌐', '📊'][i]}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── DATA FLOW IMAGE ── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/data-flow.webp"
              alt="Data Flow Infrastructure"
              className="w-full h-64 md:h-96 object-cover"
              style={{ filter: 'brightness(0.4) saturate(1.5) hue-rotate(180deg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-dark/90" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <FadeIn>
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3 block">Architecture</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                  Exchange → Strategy → OMS → Market
                </h2>
                <p className="text-slate-400 max-w-2xl text-sm md:text-base">
                  Every byte travels through lock-free queues, cache-aligned structures, and
                  CPU-pinned threads — from exchange WebSocket to order acknowledgment in under 5 microseconds.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              What Trading Professionals Say
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-glass rounded-2xl p-6 h-full flex flex-col">
                  <div className="text-cyan-500 text-3xl mb-3 font-serif">"</div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">{t.quote}</p>
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-cyan-500 text-xs font-mono mt-0.5">{t.firm}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/server.webp"
            alt="Server Infrastructure"
            className="w-full h-full object-cover opacity-10"
            style={{ filter: 'saturate(0.5) hue-rotate(180deg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to trade at<br />
              <span className="text-gradient">nanosecond speed?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Whether you need a custom HFT engine, a multi-exchange crypto arbitrage system,
              or an enterprise risk platform — BytesThread engineers build it production-ready.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group px-10 py-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg transition-all glow-cyan flex items-center gap-3"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/hft-fx"
                className="px-10 py-5 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold text-lg transition-all"
              >
                View Platforms
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
