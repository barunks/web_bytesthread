import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { company } from '../data/content'

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const credentials = [
  { value: '<5μs', label: 'Tick-to-Trade', sub: 'Measured on live hardware' },
  { value: '700ns', label: 'Internal Routing', sub: 'Order to risk gate' },
  { value: '100ns', label: 'Risk Clearance', sub: 'All checks combined' },
  { value: '0', label: 'Cloud AI Deps', sub: 'Fully local AI stack' },
]

const whatWeDeliver = [
  {
    color: '#22d3ee',
    title: 'Execution Speed That Wins',
    desc: 'In electronic markets, the fastest order wins. We build execution infrastructure that puts your orders at the front of the queue — measured in microseconds, not milliseconds.',
    link: '/hft-fx',
    linkLabel: 'HFT & FX Platforms',
  },
  {
    color: '#00ff88',
    title: 'Crypto Arbitrage at Scale',
    desc: 'Crypto markets fragment across dozens of venues. Our arbitrage engines detect and exploit price gaps in microseconds — capturing spreads that disappear before most systems see them.',
    link: '/crypto',
    linkLabel: 'Crypto Platform',
  },
  {
    color: '#a78bfa',
    title: 'AI That Improves Your Bots',
    desc: 'A local AI analyses your trading performance every night and tunes your bot parameters — no cloud, no API fees, no data leaving your server. Your strategies get smarter automatically.',
    link: '/ai-trading',
    linkLabel: 'AI Trading Platform',
  },
  {
    color: '#0ea5e9',
    title: 'Portfolio & Risk Visibility',
    desc: 'Real-time portfolio management, pre-trade risk controls, and regulatory compliance reporting — all on AWS, all production-ready, all built to satisfy your compliance team without slowing your desk.',
    link: '/portfolio-risk',
    linkLabel: 'Portfolio & Risk',
  },
]

const whyUs = [
  {
    title: 'We Build. We Don\'t Just Consult.',
    desc: 'Every platform we deliver has been designed, built, benchmarked, and deployed in production. We don\'t hand you a specification — we hand you a running system.',
  },
  {
    title: 'Every Claim Is Measured.',
    desc: 'Our latency numbers come from real hardware under live market conditions. We don\'t estimate. We don\'t simulate. We measure — and we show you the results.',
  },
  {
    title: 'Full-Stack Ownership.',
    desc: 'From execution engine to compliance dashboard, we own the entire stack. No integration risk, no finger-pointing between vendors, no gaps in accountability.',
  },
  {
    title: 'Production-First from Day One.',
    desc: 'Risk guardrails, audit trails, deterministic replay, and failover logic aren\'t added later. They\'re designed in from the first line of code.',
  },
]

const clientTypes = [
  { label: 'Proprietary Trading Firms', desc: 'HFT desks and prop shops competing on execution speed in equities, futures, and FX.' },
  { label: 'Crypto Funds & Desks', desc: 'Digital asset funds running arbitrage, market making, and directional strategies across multiple venues.' },
  { label: 'Institutional FX Operations', desc: 'Banks and FX desks requiring sub-20μs end-to-end latency with full RFQ/RFS workflow support.' },
  { label: 'Regulated Financial Institutions', desc: 'Banks and asset managers needing BNM-compliant risk reporting and enterprise portfolio management on AWS.' },
  { label: 'Algorithmic Trading Desks', desc: 'Equity desks running AI-driven intraday strategies with IBKR or Alpaca connectivity.' },
  { label: 'Family Offices & Asset Managers', desc: 'Investment managers needing real-time portfolio visibility, P&L attribution, and risk controls.' },
]

const techDomains = [
  {
    label: 'Execution & Latency',
    color: '#22d3ee',
    items: ['Sub-5μs Tick-to-Trade', 'Zero-Copy Data Paths', 'Kernel-Bypass IPC', 'CPU-Pinned Threads', 'Hardware Kill Switch', 'Deterministic Replay'],
  },
  {
    label: 'Cloud & Infrastructure',
    color: '#60a5fa',
    items: ['AWS Production Deployments', 'Auto-Scaling Groups', 'Circuit-Breaker Failover', 'Zero-Downtime Deploys', 'Docker Orchestration', 'Redis Message Queues'],
  },
  {
    label: 'AI & Intelligence',
    color: '#a78bfa',
    items: ['Local LLM (No Cloud)', 'Nightly Bot Tuning', 'Online ML Predictor', 'Signal IC Tracking', 'News Sentiment Analysis', 'Walk-Forward Backtesting'],
  },
  {
    label: 'Risk & Compliance',
    color: '#00ff88',
    items: ['8-Layer Pre-Trade Risk', 'BNM Compliance Reports', 'Multi-Gateway Payments', 'Full Audit Trails', 'Real-Time Exposure Limits', 'Regulatory PDF Generation'],
  },
]

export default function About() {
  return (
    <div style={{ backgroundColor: '#020408' }}>

      {/* ── ANIMATED HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        <div className="animated-hero-bg">
          {/* Three-column image background */}
          <div className="absolute inset-0 grid grid-cols-3 h-full">
            {[
              { src: '/images/hft-datacenter.webp', hue: 180 },
              { src: '/images/server.webp', hue: 220 },
              { src: '/images/analytics.webp', hue: 260 },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img src={img.src} alt="" className="w-full h-full object-cover"
                  style={{ filter: `brightness(0.18) saturate(1.6) hue-rotate(${img.hue}deg)`, transform: 'scale(1.05)' }} />
              </div>
            ))}
          </div>

          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.5) 0%, rgba(2,4,8,0.65) 55%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.18) 0%, transparent 70%)' }} />

          {/* Animated orbs */}
          <div className="orb" style={{ width: 700, height: 700, top: '-20%', left: '-15%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', animationDuration: '9s' }} />
          <div className="orb" style={{ width: 500, height: 500, bottom: '5%', right: '-10%', background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)', animationDelay: '3s', animationDuration: '11s' }} />
          <div className="orb" style={{ width: 350, height: 350, top: '30%', right: '30%', background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)', animationDelay: '6s', animationDuration: '13s' }} />

          <div className="scanline" />
          <div className="grid-pan" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(6,182,212,0.35)', backgroundColor: 'rgba(6,182,212,0.08)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400">About BytesThread · Trading Technology Specialists</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              We Build Where<br />
              <span className="text-gradient">Microseconds Matter</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              BytesThread is a specialist trading technology firm. We design and deliver
              <span className="text-cyan-400 font-semibold"> execution infrastructure, AI-driven trading platforms, and enterprise risk systems</span> for
              the world's most demanding financial environments.
            </p>
            <p className="text-slate-500 max-w-xl mb-10">
              We don't consult. We build, benchmark, and deploy — production-ready, measured, and accountable.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all glow-cyan"
                style={{ backgroundColor: '#22d3ee' }}>
                Work With Us <ArrowRight size={16} />
              </Link>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
              <LinkedInIcon size={16} /> LinkedIn
              </a>
            </div>

            {/* Credential metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              {credentials.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ backgroundColor: 'rgba(6,12,24,0.75)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.1rem', color: '#22d3ee', lineHeight: 1 }}>{c.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{c.label}</div>
                  <div style={{ fontSize: '0.6rem', color: '#475569', marginTop: '2px' }}>{c.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Four Platforms. One Standard of Excellence.
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Every platform we deliver is production-ready, performance-measured, and built to run in live markets from day one.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatWeDeliver.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: `1px solid ${v.color}18`, borderRadius: '18px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = v.color + '50'; e.currentTarget.style.backgroundColor = '#0a1020' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = v.color + '18'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: v.color, marginBottom: '16px' }} />
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, marginBottom: '16px' }}>{v.desc}</p>
                  <Link to={v.link} className="inline-flex items-center gap-1.5 text-sm font-semibold group" style={{ color: v.color }}>
                    {v.linkLabel} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BYTESTHREAD ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Why BytesThread</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Built by Engineers Who've Shipped It
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              BytesThread was founded by engineers who spent years building trading systems at the intersection of execution speed, quantitative finance, cloud infrastructure, and applied AI.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyUs.map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '16px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <CheckCircle size={18} style={{ color: '#22d3ee', marginBottom: '14px' }} />
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>{w.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Who We Work With</span>
            <h2 className="text-3xl font-black text-white mt-2">Built for Serious Trading Operations</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              From prop desks competing on microseconds to regulated institutions managing compliance risk — our platforms are built for operations where performance and reliability are non-negotiable.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientTypes.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '14px', padding: '22px', height: '100%', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.backgroundColor = '#0a1525' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ fontWeight: 700, color: '#22d3ee', fontSize: '0.85rem', marginBottom: '8px' }}>{c.label}</div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH DOMAINS ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl font-black text-white mt-2">Every Layer of Trading Technology</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              From bare-metal execution engines to cloud-deployed compliance platforms — we own the entire stack.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techDomains.map((domain, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: `1px solid ${domain.color}18`, borderRadius: '14px', padding: '20px', height: '100%', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = domain.color + '45'; e.currentTarget.style.backgroundColor = '#0a1020' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = domain.color + '18'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, color: domain.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${domain.color}20` }}>{domain.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {domain.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: domain.color, opacity: 0.6, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{item}</span>
                      </div>
                    ))}
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
          <img src="/images/server.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12) saturate(1.5) hue-rotate(200deg)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.7), rgba(2,4,8,0.95))' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.1), transparent)' }} />
          <div className="grid-pan absolute inset-0 opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Let's build something<br />
              <span className="text-gradient">fast, intelligent, and production-ready</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              HFT engines, crypto arbitrage systems, AI trading bots, or enterprise risk platforms — we build it end-to-end, measured, and deployed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-black text-black text-lg transition-all glow-cyan"
                style={{ backgroundColor: '#22d3ee' }}>
                Get in Touch <ArrowRight size={20} />
              </Link>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all"
                style={{ border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}>
                <LinkedInIcon size={18} /> Follow on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
