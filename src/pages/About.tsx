import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Target, Layers, Cloud, Brain, BarChart2, Cpu, Shield, Zap } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const philosophy = [
  { icon: Zap,    title: 'Zero-Copy · Zero-Allocation · Zero-Syscall', desc: 'The three non-negotiables of every hot path. No memcpy, no heap, no kernel entry between market event and order submission.' },
  { icon: Cpu,    title: 'rdtsc Latency Benchmarking', desc: 'Every latency claim is backed by rdtsc measurements on production hardware. p50, p95, p99, and p999 are reported — not just the best case. clock_gettime is forbidden on the hot path.' },
  { icon: Cpu,    title: 'Kernel-Bypass by Default', desc: 'POSIX SHM, mmap, and DPDK keep the critical path entirely in user-space. OS scheduling jitter is eliminated, not managed.' },
  { icon: Cpu,    title: 'CPU Affinity & NUMA Locality', desc: 'Hot-path threads are pinned to isolated cores with NUMA-local memory. Cross-socket latency and OS preemption are architectural impossibilities.' },
  { icon: Shield, title: 'Cache-Line Discipline', desc: 'Every shared structure is alignas(64). Hot/cold field separation maximises L1 hit rate. SPSC ownership eliminates false sharing and MESI invalidation traffic.' },
  { icon: Zap,    title: 'Branch Prediction & SIMD', desc: '[[likely]]/[[unlikely]] annotations and probability-ordered conditionals keep the branch predictor saturated. AVX2/AVX-512 SIMD accelerates risk checks and serialisation.' },
]

const cloudCapabilities = [
  { title: 'AWS Production Deployments', desc: 'Amazon RDS MySQL, ElastiCache Redis, EC2 auto-scaling groups, and VPC-isolated microservices. Production-deployed for regulated financial institutions.' },
  { title: 'Microservices Architecture', desc: 'Spring Boot microservices with shared trading-commons libraries. Horizontal scaling, service discovery, and circuit-breaker fault tolerance via Resilience4j.' },
  { title: 'Multi-Gateway Payments', desc: 'Razorpay, Stripe, and Bank Transfer integrations with idempotent retry logic, webhook validation, and full audit trail logging.' },
  { title: 'Compliance & Regulatory', desc: 'BNM-compliant certificate generation with PDF watermarks. SQL injection prevention, role-based access control, and date-range audit reporting.' },
  { title: 'Docker & CI/CD', desc: 'Docker Compose deployments with health monitoring, zero-downtime rolling updates, and automated test gates before every production push.' },
  { title: 'ElastiCache Redis Messaging', desc: 'Centralised database service via ElastiCache Redis message queue. Pub/sub event streaming between microservices with sub-millisecond delivery.' },
]

const aiCapabilities = [
  { title: 'Local Ollama LLM — Zero Cloud', desc: 'deepseek-r1:14b, qwen3.5, and llama3 run entirely on your server via Ollama. No OpenAI. No API fees. No data leaves your network. HIPAA-friendly by design.' },
  { title: 'EOD GenAI Strategy Analyst', desc: 'After market close, the AI queries a structured EOD performance report and proposes bot parameter changes. Chain-of-thought reasoning is visible in the audit log.' },
  { title: 'Online ML Predictor', desc: 'Per-symbol online logistic regression updates on every fill via SGD. 16-feature vector from technical signals, session time, and market microstructure. Self-improving — gets better with every trade.' },
  { title: 'Guardrail-Validated AI Changes', desc: 'Every AI suggestion is clamped to hard field limits. Structural fields (symbol, strategyType) are immutable. Max 8 changes per cycle. Full config diff shown before any change is applied.' },
  { title: 'Signal IC Tracking', desc: 'Information Coefficient replaces hit-rate in signal weight adaptation. IC = correlation(signal_value, subsequent_return) over a rolling 50-trade window. Signals that stop working lose weight automatically.' },
  { title: 'News Sentiment Aggregation', desc: 'Alpha Vantage, Finnhub, and RSS feeds aggregated with FNV-64 deduplication. EWM sentiment score per symbol gates gap-and-go entries and biases the composite score.' },
]

const backtestingTools = [
  { title: 'Isolated Production Process Graph', desc: 'Backtesting runs the exact same C++ binaries as live trading — market data, pricing, strategy, OMS, and virtual adapter — against strict OHLCV replay. No separate backtest codebase.' },
  { title: 'Virtual Execution Venue', desc: 'Deterministic standalone simulated venue with finite or unlimited configured capital. Restart-safe drop copy, exact fee accounting, and correction/bust event replay.' },
  { title: 'True-Volume-Bounded Fills', desc: 'Fill simulation respects actual bar volume. Partial fills, slippage, and market impact are modelled. Terminal-flat enforcement closes all positions at session end.' },
  { title: 'Walk-Forward Certification', desc: '20-scenario offline certificate with 18 fault classes: crash/reconnect, partial fills, corrections, busts, late fees, statement reconciliation, and rollback. Binds 6 executable hashes.' },
  { title: 'EOD Report & Analytics', desc: 'Structured JSON EOD report at 15:30 ET: per-bot P&L, win rate, slippage bps, signal IC, regime history, VaR, execution quality, and config snapshot diff vs yesterday.' },
  { title: 'QuestDB Time-Series Persistence', desc: 'All fills, signals, latency metrics, and financial events archived to QuestDB via ILP protocol with nanosecond precision. 200+ rows/sec sustained throughput with crash-safe restore.' },
]

const techDomains = [
  {
    label: 'Low Latency in Nature',
    color: '#22d3ee',
    items: ['C++23', 'Java 21', 'POSIX SHM / mmap', 'SPSC Lock-Free Rings', 'Aeron IPC', 'rdtsc Benchmarking', 'FIX-Agnostic', 'AVX2 / SIMD'],
  },
  {
    label: 'Cloud Infrastructure',
    color: '#60a5fa',
    items: ['AWS RDS MySQL', 'ElastiCache Redis', 'EC2 Auto-Scaling', 'Docker Compose', 'Spring Boot', 'Resilience4j', 'Kafka'],
  },
  {
    label: 'AI & Machine Learning',
    color: '#a78bfa',
    items: ['Ollama (Local LLM)', 'deepseek-r1:14b', 'Online SGD Predictor', 'Signal IC Tracking', 'Sentiment NLP', 'Walk-Forward Eval'],
  },
  {
    label: 'Trading Tools',
    color: '#00ff88',
    items: ['Backtesting Framework', 'Virtual Venue', 'QuestDB ILP', 'React Dashboard', 'WebSocket / REST', 'Python Analytics'],
  },
]

const values = [
  { icon: Code2,   title: 'Precision Engineering',    desc: 'We measure latency in nanoseconds. Every architectural decision is made with performance as a first-class constraint — not an afterthought.' },
  { icon: Target,  title: 'Production-First Mindset', desc: 'We build systems that run in live markets. CRC32 checksums, deterministic replay, and 8-layer risk guardrails are non-negotiable from day one.' },
  { icon: Layers,  title: 'Full-Stack Depth',          desc: 'From bare-metal C++23 / Java 21 SPSC ring buffers to AWS-deployed compliance platforms and local AI bots — we own the entire trading technology stack.' },
]

export default function About() {
  return (
    <div className="pt-24" style={{ backgroundColor: '#020408' }}>

      {/* ── HERO ── */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full">
            <img src="/images/hft-datacenter.webp" alt="HFT" className="w-full h-full object-cover" style={{ filter: 'brightness(0.18) saturate(1.4) hue-rotate(180deg)' }} />
            <img src="/images/server.webp"          alt="Cloud" className="w-full h-full object-cover" style={{ filter: 'brightness(0.18) saturate(1.4) hue-rotate(220deg)' }} />
            <img src="/images/analytics.webp"       alt="AI" className="w-full h-full object-cover" style={{ filter: 'brightness(0.18) saturate(1.4) hue-rotate(260deg)' }} />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.5) 0%, rgba(2,4,8,0.75) 60%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.12), transparent)' }} />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>About BytesThread</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-3 mb-5 leading-tight">
              We Build Where<br />
              <span className="text-gradient">Microseconds Matter</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
              A specialist trading technology firm designing ultra-low-latency execution engines,
              cloud-native risk platforms, local AI trading bots, and institutional-grade backtesting infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Our Story</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-5">Built by Engineers Who've Shipped It</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#64748b' }}>
              <p>BytesThread was founded by engineers who spent years building trading systems at the intersection of low-latency C++ and Java, quantitative finance, cloud infrastructure, and applied AI.</p>
              <p>We've built HFT platforms achieving sub-5 microsecond tick-to-trade latency, multi-exchange crypto arbitrage engines, FIX-agnostic institutional FX stacks, AWS-deployed compliance platforms for regulated institutions, and AI-driven intraday bots with local LLM parameter tuning.</p>
              <p>We don't just consult — we build, benchmark, backtest, and deploy production systems. Every latency claim is backed by rdtsc measurements on real hardware.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(6,182,212,0.15)', borderRadius: '18px', padding: '24px' }}>
              <div style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>What We've Shipped</div>
              {[
                { v: '<5 μs',   l: 'Tick-to-trade latency',         c: '#22d3ee' },
                { v: '700 ns',  l: 'SPSC ring transit p50',          c: '#22d3ee' },
                { v: '100 ns',  l: 'OMS risk gate p50',              c: '#22d3ee' },
                { v: '<100 μs', l: 'AI bot OMS P99 target',          c: '#a78bfa' },
                { v: '7',       l: 'Intraday strategy types',        c: '#a78bfa' },
                { v: '20+',     l: 'Backtest fault scenarios',       c: '#00ff88' },
                { v: '0',       l: 'Cloud AI dependencies',          c: '#00ff88' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '8px 0', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontSize: '0.78rem', color: '#475569' }}>{s.l}</span>
                  <span style={{ fontFamily: 'monospace', fontWeight: 800, color: s.c, fontSize: '0.95rem' }}>{s.v}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.08)', padding: '64px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">How We Work</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ backgroundColor: '#080f1e', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '14px', padding: '24px', height: '100%', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <v.icon size={18} style={{ color: '#22d3ee' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING PHILOSOPHY ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Engineering Philosophy</span>
          <h2 className="text-2xl font-bold text-white mt-2">Hot Path Discipline & Latency Benchmarking</h2>
          <p className="text-sm mt-2 max-w-2xl" style={{ color: '#64748b' }}>
            These aren't best practices we follow — they're constraints we design around from the first line of code. Every claim is measured, not estimated.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophy.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '12px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.42)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                <div style={{ fontWeight: 700, color: '#22d3ee', fontSize: '0.8rem', marginBottom: '8px', fontFamily: 'monospace' }}>{p.title}</div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CLOUD INFRASTRUCTURE ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(96,165,250,0.08)', borderBottom: '1px solid rgba(96,165,250,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cloud size={18} style={{ color: '#60a5fa' }} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#60a5fa' }}>Cloud Infrastructure</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">AWS-Native. Production-Deployed. Compliance-Ready.</h2>
            <p className="text-sm mt-2 max-w-2xl" style={{ color: '#64748b' }}>
              Enterprise cloud platforms for regulated financial institutions — from multi-gateway payment processing to BNM-compliant risk reporting, all on AWS.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudCapabilities.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(96,165,250,0.1)', borderRadius: '12px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.38)'; e.currentTarget.style.backgroundColor = '#080e20' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ fontWeight: 700, color: '#60a5fa', fontSize: '0.82rem', marginBottom: '8px' }}>{c.title}</div>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & MACHINE LEARNING ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Brain size={18} style={{ color: '#a78bfa' }} />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#a78bfa' }}>AI & Machine Learning</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">Local AI. No Cloud. No API Fees. No Data Leaks.</h2>
          <p className="text-sm mt-2 max-w-2xl" style={{ color: '#64748b' }}>
            Every AI capability runs on your own hardware via Ollama. The LLM analyses trading performance, tunes bot parameters, and tracks signal quality — entirely offline.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiCapabilities.map((c, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(167,139,250,0.1)', borderRadius: '12px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.38)'; e.currentTarget.style.backgroundColor = '#0a0820' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                <div style={{ fontWeight: 700, color: '#a78bfa', fontSize: '0.82rem', marginBottom: '8px' }}>{c.title}</div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── BACKTESTING & TRADING TOOLS ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(0,255,136,0.08)', borderBottom: '1px solid rgba(0,255,136,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-10">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart2 size={18} style={{ color: '#00ff88' }} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#00ff88' }}>Backtesting & Trading Tools</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">Same Binaries. Real Replay. 20-Scenario Certification.</h2>
            <p className="text-sm mt-2 max-w-2xl" style={{ color: '#64748b' }}>
              Backtesting runs the exact same production C++ binaries against strict OHLCV replay — not a separate simulation codebase. Walk-forward certification with 18 fault classes.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {backtestingTools.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(0,255,136,0.1)', borderRadius: '12px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.35)'; e.currentTarget.style.backgroundColor = '#060f0a' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ fontWeight: 700, color: '#00ff88', fontSize: '0.82rem', marginBottom: '8px' }}>{c.title}</div>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK BY DOMAIN ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#22d3ee' }}>Technology Stack</span>
          <h2 className="text-2xl font-bold text-white mt-2">Every Layer. Every Domain.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techDomains.map((domain, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ backgroundColor: '#07101f', border: `1px solid ${domain.color}18`, borderRadius: '14px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = domain.color + '45'; e.currentTarget.style.backgroundColor = '#0a1020' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = domain.color + '18'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, color: domain.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${domain.color}20` }}>{domain.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {domain.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: domain.color, opacity: 0.6, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.76rem', color: '#94a3b8' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            Let's build something<br />
            <span className="text-gradient">fast, intelligent, and production-ready</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#64748b' }}>
            HFT engines, cloud risk platforms, local AI bots, or institutional backtesting infrastructure — we build it end-to-end.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all glow-blue"
            style={{ backgroundColor: '#06b6d4' }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}
