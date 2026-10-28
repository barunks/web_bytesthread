import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Zap, Globe, CheckCircle, DollarSign } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const exchanges = [
  { name: 'Binance', region: 'Global' },
  { name: 'Coinbase', region: 'US' },
  { name: 'OKX', region: 'Global' },
  { name: 'Deribit', region: 'Derivatives' },
  { name: 'Bitfinex', region: 'Global' },
  { name: '+ Any Exchange', region: 'Configurable' },
]

const outcomes = [
  { value: '<5μs', label: 'Opportunity Detection', sub: 'Tick-to-decision' },
  { value: '∞', label: 'Exchanges', sub: 'Any venue, configurable' },
  { value: '24/7', label: 'Uptime Target', sub: 'Auto-reconnect on drop' },
  { value: '0', label: 'Heap Allocs', sub: 'On the hot path' },
]

const businessValue = [
  {
    icon: DollarSign,
    color: '#00ff88',
    title: 'Profit from Price Gaps Others Miss',
    desc: 'Crypto markets fragment across dozens of venues. Our arbitrage engine detects and acts on price dislocations in microseconds — before slower participants close the gap.',
  },
  {
    icon: Globe,
    color: '#22d3ee',
    title: 'Connect Any Exchange, Instantly',
    desc: 'Binance, Coinbase, OKX, Deribit, Bitfinex — or any exchange you need. Native connectivity means no third-party adapter overhead and no vendor lock-in.',
  },
  {
    icon: TrendingUp,
    color: '#a78bfa',
    title: 'AI-Enhanced Positioning',
    desc: 'Machine learning analyses order flow and market microstructure to pre-position ahead of predictable price moves — giving your strategies an edge beyond pure speed.',
  },
  {
    icon: Shield,
    color: '#f59e0b',
    title: 'Risk Controls That Never Sleep',
    desc: 'Synchronous pre-trade risk checks on every order. Position limits, notional caps, and kill switches enforced in nanoseconds — protecting capital around the clock.',
  },
]

const strategies = [
  {
    icon: Zap,
    color: '#00ff88',
    title: 'Cross-Exchange Spatial Arbitrage',
    badge: 'Core Strategy',
    pitch: 'The same asset trades at different prices across venues simultaneously. Our engine detects the gap, executes on both sides atomically, and locks in the spread — before the market corrects.',
    benefit: 'Consistent, market-neutral returns from structural price inefficiencies.',
  },
  {
    icon: TrendingUp,
    color: '#22d3ee',
    title: 'Futures Roll Arbitrage',
    badge: 'Market Making',
    pitch: 'Dated futures trade at a premium or discount to perpetuals. We market-make on the illiquid dated contract while instantly hedging on the liquid perpetual — capturing the roll spread with controlled inventory.',
    benefit: 'Earn the roll premium with hedged exposure and maker rebates.',
  },
  {
    icon: Globe,
    color: '#a78bfa',
    title: 'ML Predictive Positioning',
    badge: 'AI-Enhanced',
    pitch: 'Order flow imbalance, funding rates, and cross-venue momentum signal where prices are heading. The ML layer pre-positions before the move materialises — not after.',
    benefit: 'Capture directional moves before competitors react to the same signal.',
  },
  {
    icon: Shield,
    color: '#f59e0b',
    title: 'Perpetual Market Making',
    badge: 'Rebate Capture',
    pitch: 'Post-only quoting on perpetual markets with inventory-skewed microprice and funding rate awareness. Designed to capture maker rebates while managing directional risk.',
    benefit: 'Steady rebate income with disciplined inventory management.',
  },
]

const pipeline = [
  { step: '01', label: 'Market Data Ingestion', desc: 'Direct connections to every configured exchange. Price updates arrive and are normalised in microseconds, ready for strategy consumption.' },
  { step: '02', label: 'Opportunity Detection', desc: 'The arbitrage engine scans all venue pairs continuously. When a profitable gap exceeds fees and minimum profit threshold, it triggers immediately.' },
  { step: '03', label: 'Risk Clearance', desc: 'Every order passes synchronous pre-trade checks — position limits, notional caps, rate limiters — before any exchange sees it.' },
  { step: '04', label: 'Atomic Execution', desc: 'Both legs of an arbitrage are submitted simultaneously to minimise leg risk. Fill reconciliation and position tracking happen in real time.' },
  { step: '05', label: 'Analytics & Reporting', desc: 'Every trade, signal, and P&L event is persisted with nanosecond precision. Live dashboard shows positions, P&L, and latency across all venues.' },
]

export default function Crypto() {
  return (
    <div style={{ backgroundColor: '#020408' }}>

      {/* ── ANIMATED HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        <div className="animated-hero-bg">
          <img src="/images/crypto-trading.webp" alt="" className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.18) saturate(2.2)', transform: 'scale(1.04)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.45) 0%, rgba(2,4,8,0.6) 55%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,255,136,0.18) 0%, transparent 70%)' }} />

          {/* Animated orbs */}
          <div className="orb" style={{ width: 700, height: 700, top: '-20%', left: '-15%', background: 'radial-gradient(circle, rgba(0,255,136,0.09) 0%, transparent 70%)', animationDuration: '8s' }} />
          <div className="orb" style={{ width: 450, height: 450, bottom: '5%', right: '-8%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', animationDelay: '3s', animationDuration: '10s' }} />
          <div className="orb" style={{ width: 280, height: 280, top: '35%', right: '25%', background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)', animationDelay: '5s', animationDuration: '12s' }} />

          <div className="scanline" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.07), transparent)' }} />
          <div className="grid-pan" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(0,255,136,0.35)', backgroundColor: 'rgba(0,255,136,0.08)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00ff88' }} />
              <span className="text-xs font-mono" style={{ color: '#00ff88' }}>Crypto Arbitrage · Multi-Exchange · 24/7 Execution</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              Profit from Every<br />
              <span className="text-gradient">Price Gap in Crypto</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              Crypto markets are fragmented across dozens of venues. BytesThread builds
              <span style={{ color: '#00ff88', fontWeight: 600 }}> arbitrage engines</span> that detect and exploit
              price dislocations in microseconds — capturing spreads that disappear before most systems even see them.
            </p>
            <p className="text-slate-500 max-w-xl mb-10">
              Connect any exchange. Run any strategy. Scale to any volume. Production-ready from day one.
            </p>

            {/* Exchange pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {exchanges.map((ex) => (
                <div key={ex.name} style={{
                  display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                  padding: '6px 14px', borderRadius: '999px',
                  backgroundColor: ex.name.startsWith('+') ? 'rgba(0,255,136,0.04)' : 'rgba(0,255,136,0.09)',
                  border: ex.name.startsWith('+') ? '1px dashed rgba(0,255,136,0.3)' : '1px solid rgba(0,255,136,0.25)',
                }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 600, color: ex.name.startsWith('+') ? '#64748b' : '#00ff88' }}>{ex.name}</span>
                  <span style={{ fontSize: '0.6rem', color: '#475569', marginTop: '1px' }}>{ex.region}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all"
                style={{ backgroundColor: '#00ff88', boxShadow: '0 0 32px rgba(0,255,136,0.35)' }}>
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/hft-fx"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88' }}>
                HFT Platform <ArrowRight size={16} />
              </Link>
            </div>

            {/* Outcome metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              {outcomes.map((o, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ backgroundColor: 'rgba(6,12,24,0.75)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.2rem', color: '#00ff88', lineHeight: 1 }}>{o.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{o.label}</div>
                  <div style={{ fontSize: '0.6rem', color: '#475569', marginTop: '2px' }}>{o.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BUSINESS VALUE ── */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(0,255,136,0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>The Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Crypto Markets Reward Speed
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Fragmented liquidity, 24/7 trading, and volatile price action create constant arbitrage opportunities. The firms that capture them are the ones with the fastest, most reliable infrastructure.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {businessValue.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(0,255,136,0.1)', borderRadius: '16px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'; e.currentTarget.style.backgroundColor = '#060f0a' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
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

      {/* ── STRATEGIES ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Trading Strategies</span>
            <h2 className="text-3xl font-black text-white mt-2">Four Ways to Generate Alpha</h2>
            <p className="text-slate-400 mt-2 max-w-xl">
              Each strategy targets a different market inefficiency. Deploy one or all four — they run independently with separate risk budgets.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strategies.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: `1px solid ${s.color}18`, borderRadius: '18px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '50'; e.currentTarget.style.backgroundColor = '#0a1020' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + '18'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: s.color + '18', border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <s.icon size={18} style={{ color: s.color }} />
                      </div>
                      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{s.title}</h3>
                    </div>
                    <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', padding: '3px 10px', borderRadius: '999px', backgroundColor: s.color + '12', border: `1px solid ${s.color}35`, color: s.color, whiteSpace: 'nowrap', flexShrink: 0 }}>{s.badge}</span>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.7, marginBottom: '14px' }}>{s.pitch}</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px', borderRadius: '10px', backgroundColor: s.color + '08', border: `1px solid ${s.color}20` }}>
                    <CheckCircle size={14} style={{ color: s.color, flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{s.benefit}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>How It Works</span>
            <h2 className="text-2xl font-black text-white mt-2">From Market Data to Executed Trade</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Five stages. Every one optimised for speed and reliability. No unnecessary steps between opportunity and execution.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {pipeline.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ display: 'flex', gap: '16px', backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '14px', padding: '20px', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.backgroundColor = '#080f1e' }}>
                  <div style={{ minWidth: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.72rem', color: '#22d3ee', flexShrink: 0 }}>{p.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '5px' }}>{p.label}</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/crypto-trading.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.15) saturate(2) hue-rotate(130deg)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.7), rgba(2,4,8,0.95))' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.1), transparent)' }} />
          <div className="grid-pan absolute inset-0 opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Start capturing crypto<br />
              <span className="text-gradient">arbitrage opportunities today</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Tell us your target exchanges, strategies, and capital allocation. We'll build and deploy a production-ready arbitrage engine — configured for your operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-black text-black text-lg transition-all"
                style={{ backgroundColor: '#00ff88', boxShadow: '0 0 40px rgba(0,255,136,0.4)' }}>
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio-risk"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all"
                style={{ border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88' }}>
                Portfolio & Risk
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
