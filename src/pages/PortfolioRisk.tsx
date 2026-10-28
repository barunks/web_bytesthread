import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart2, Shield, TrendingUp, CheckCircle,
  Eye, AlertTriangle, FileText, CreditCard, Cloud,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

const outcomes = [
  { value: 'Real-Time', label: 'Portfolio P&L', sub: 'Live across all positions' },
  { value: 'AWS', label: 'Production Hosted', sub: 'Scalable cloud infrastructure' },
  { value: 'BNM', label: 'Compliance Ready', sub: 'Regulatory reporting built-in' },
  { value: '3', label: 'Payment Gateways', sub: 'Razorpay · Stripe · Bank' },
]

const portfolioCapabilities = [
  {
    icon: Eye,
    color: '#0ea5e9',
    title: 'Complete Portfolio Visibility',
    desc: 'See every position, P&L, and exposure across your entire book in real time. Drill down by instrument, sector, or strategy — with live market data updating automatically.',
  },
  {
    icon: TrendingUp,
    color: '#10b981',
    title: 'Smarter Investment Decisions',
    desc: 'Live performance attribution shows exactly where returns are coming from. Identify your best and worst performers, track allocation drift, and rebalance with confidence.',
  },
  {
    icon: BarChart2,
    color: '#a78bfa',
    title: 'Multi-Asset, Multi-Exchange',
    desc: 'Manage equities across SGX, NYSE, NASDAQ, and global markets from a single dashboard. Add new instruments and exchanges without rebuilding your infrastructure.',
  },
  {
    icon: AlertTriangle,
    color: '#f59e0b',
    title: 'Risk Before It Becomes a Problem',
    desc: 'Gross and net exposure limits, drawdown alerts, and position concentration warnings surface automatically — giving your risk team time to act, not react.',
  },
]

const riskCapabilities = [
  {
    icon: Shield,
    color: '#8b5cf6',
    title: 'Pre-Trade Risk Controls',
    desc: 'Every order is checked against position limits, notional caps, and kill switches before it reaches the market. Risk is enforced, not monitored after the fact.',
  },
  {
    icon: FileText,
    color: '#8b5cf6',
    title: 'Regulatory Compliance Reporting',
    desc: 'Generate BNM-compliant compliance certificates with PDF watermarks, date-range audit reports, and full transaction history — ready for your regulator on demand.',
  },
  {
    icon: Cloud,
    color: '#8b5cf6',
    title: 'Enterprise Cloud Infrastructure',
    desc: 'Deployed on AWS with automatic failover, connection pooling, and circuit-breaker fault tolerance. Your platform stays online even when individual components fail.',
  },
  {
    icon: CreditCard,
    color: '#8b5cf6',
    title: 'Multi-Gateway Payment Processing',
    desc: 'Accept payments via Razorpay, Stripe, or Bank Transfer with automatic retry logic, webhook validation, and a complete audit trail for every transaction.',
  },
]

const platforms = [
  {
    id: 'bytepulse',
    name: 'BytePulse Portfolio Suite',
    tag: 'Equity Portfolio Management',
    color: '#0ea5e9',
    image: '/images/portfolio-mgmt.webp',
    hue: 200,
    headline: 'Your entire equity book. One dashboard. Real-time.',
    pitch: 'BytePulse gives portfolio managers and trading desks a single, live view of their equity positions, P&L, and market exposure. Built for institutional-grade reliability — it scales from a single desk to a multi-strategy fund without changing your infrastructure.',
    outcomes: [
      'Real-time P&L and exposure across all positions and exchanges',
      'Live market data with automatic price updates and performance attribution',
      'Portfolio lifecycle management — create, modify, and close positions with full audit trail',
      'Interactive dashboard with charts, allocation views, and drill-down analytics',
      'Scales horizontally on AWS — no performance degradation as your book grows',
    ],
    audience: 'Built for: Portfolio managers, equity trading desks, family offices, and asset managers.',
  },
  {
    id: 'risk',
    name: 'Risk & Compliance Platform',
    tag: 'Enterprise Risk Management',
    color: '#8b5cf6',
    image: '/images/risk-compliance.webp',
    hue: 260,
    headline: 'Compliance your regulators trust. Controls your desk won\'t fight.',
    pitch: 'A production-deployed risk management platform on AWS that satisfies compliance teams without slowing down trading operations. Pre-trade guardrails, regulatory reporting, and multi-gateway payment processing — all in one platform.',
    outcomes: [
      'BNM-compliant compliance certificates generated on demand with PDF watermarks',
      'Pre-trade risk controls enforced on every order — position limits, notional caps, kill switches',
      'Full audit trail with date-range reporting for regulatory review',
      'Multi-gateway payments with automatic failover and idempotent retry logic',
      'AWS-native with circuit-breaker fault tolerance and zero-downtime deployments',
    ],
    audience: 'Built for: Risk managers, compliance officers, regulated financial institutions, and regional banks.',
  },
]

const visualPanels = [
  { src: '/images/portfolio-mgmt.webp', label: 'PORTFOLIO', hue: 200, accent: '#0ea5e9' },
  { src: '/images/trading-chart.webp', label: 'P&L TRACKING', hue: 160, accent: '#10b981' },
  { src: '/images/risk-compliance.webp', label: 'RISK MGMT', hue: 260, accent: '#8b5cf6' },
  { src: '/images/analytics.webp', label: 'COMPLIANCE', hue: 30, accent: '#f59e0b' },
]

export default function PortfolioRisk() {
  return (
    <div style={{ backgroundColor: '#020408' }}>

      {/* ── ANIMATED HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        <div className="animated-hero-bg">
          {/* Quad image grid */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {[
              { src: '/images/portfolio-mgmt.webp', hue: 200 },
              { src: '/images/trading-chart.webp', hue: 160 },
              { src: '/images/risk-compliance.webp', hue: 260 },
              { src: '/images/analytics.webp', hue: 30 },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img src={img.src} alt="" className="w-full h-full object-cover"
                  style={{ filter: `brightness(0.2) saturate(2) hue-rotate(${img.hue}deg)`, transform: 'scale(1.05)' }} />
              </div>
            ))}
          </div>

          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.5) 0%, rgba(2,4,8,0.65) 55%, rgba(2,4,8,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(14,165,233,0.15) 0%, transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />

          {/* Animated orbs */}
          <div className="orb" style={{ width: 600, height: 600, top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', animationDuration: '8s' }} />
          <div className="orb" style={{ width: 500, height: 500, bottom: '0%', right: '-5%', background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)', animationDelay: '3s', animationDuration: '10s' }} />
          <div className="orb" style={{ width: 300, height: 300, top: '40%', left: '40%', background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)', animationDelay: '5s', animationDuration: '12s' }} />

          <div className="scanline" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.07), transparent)' }} />
          <div className="grid-pan" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(14,165,233,0.35)', backgroundColor: 'rgba(14,165,233,0.08)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#0ea5e9' }} />
              <span className="text-xs font-mono" style={{ color: '#0ea5e9' }}>Portfolio Management · Risk Controls · Compliance · Payments</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              Manage Risk.<br />
              <span className="text-gradient">Grow with Confidence.</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              BytesThread delivers <span style={{ color: '#0ea5e9', fontWeight: 600 }}>enterprise portfolio management</span> and
              <span style={{ color: '#8b5cf6', fontWeight: 600 }}> risk compliance platforms</span> that give trading desks
              real-time visibility, regulators the reporting they require, and operations teams the controls they need.
            </p>
            <p className="text-slate-500 max-w-xl mb-10">
              Production-deployed on AWS. Trusted by regulated financial institutions, portfolio managers, and trading desks.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all"
                style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 32px rgba(14,165,233,0.35)' }}>
                Discuss Your Platform Needs <ArrowRight size={16} />
              </Link>
              <Link to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: '1px solid rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
                Our Story
              </Link>
            </div>

            {/* Outcome metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              {outcomes.map((o, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ backgroundColor: 'rgba(6,12,24,0.75)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1rem', color: '#0ea5e9', lineHeight: 1 }}>{o.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{o.label}</div>
                  <div style={{ fontSize: '0.6rem', color: '#475569', marginTop: '2px' }}>{o.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VISUAL PANEL STRIP ── */}
      <section className="relative overflow-hidden" style={{ height: '200px' }}>
        <div className="grid grid-cols-4 h-full">
          {visualPanels.map((p, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img src={p.src} alt={p.label} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ filter: `brightness(0.35) saturate(2) hue-rotate(${p.hue}deg)` }} />
              <div className="absolute inset-0 transition-all duration-500"
                style={{ background: `linear-gradient(to top, ${p.accent}50, transparent 60%)` }} />
              <div className="absolute bottom-4 left-4">
                <div className="text-xs font-mono font-bold tracking-widest" style={{ color: p.accent }}>{p.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none" />
      </section>

      {/* ── PORTFOLIO CAPABILITIES ── */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(14,165,233,0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#0ea5e9' }}>BytePulse Portfolio Suite</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Everything Your Portfolio Team Needs
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              From live market data to P&L attribution and position management — BytePulse gives your team the visibility to make better decisions, faster.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolioCapabilities.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(14,165,233,0.1)', borderRadius: '16px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.45)'; e.currentTarget.style.backgroundColor = '#080e20' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
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

      {/* ── RISK CAPABILITIES ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#8b5cf6' }}>Risk & Compliance Platform</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Risk Controls Your Regulators Require
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Pre-trade guardrails, regulatory reporting, and payment processing — all in one platform, deployed on AWS, ready for your compliance team on day one.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {riskCapabilities.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#07101f', border: '1px solid rgba(139,92,246,0.1)', borderRadius: '16px', padding: '28px', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)'; e.currentTarget.style.backgroundColor = '#0a0820' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.1)'; e.currentTarget.style.backgroundColor = '#07101f' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <v.icon size={20} style={{ color: '#a78bfa' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM DEEP DIVES ── */}
      <section style={{ backgroundColor: '#060c18', borderTop: '1px solid rgba(14,165,233,0.08)', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#0ea5e9' }}>Our Platforms</span>
            <h2 className="text-3xl font-black text-white mt-2">Two Platforms. One Integrated Stack.</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Deploy BytePulse for portfolio management, the Risk Platform for compliance, or both together for a complete institutional-grade trading infrastructure.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {platforms.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <div style={{ backgroundColor: '#07101f', border: `1px solid ${p.color}20`, borderRadius: '20px', overflow: 'hidden' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '300px' }}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover"
                        style={{ filter: `brightness(0.35) saturate(2) hue-rotate(${p.hue}deg)` }} />
                      <div className="absolute inset-0" style={{ background: i % 2 === 0 ? 'linear-gradient(to right, transparent 50%, rgba(7,16,31,1) 100%)' : 'linear-gradient(to left, transparent 50%, rgba(7,16,31,1) 100%)' }} />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(7,16,31,0.9) 100%)' }} />
                      <div className="absolute top-4 left-4">
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', padding: '4px 12px', borderRadius: '999px', backgroundColor: p.color + '18', border: `1px solid ${p.color}40`, color: p.color }}>{p.tag}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ padding: '36px' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{p.name}</h3>
                      <p style={{ fontSize: '0.9rem', color: p.color, fontWeight: 600, marginBottom: '14px' }}>{p.headline}</p>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.75, marginBottom: '20px' }}>{p.pitch}</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
                        {p.outcomes.map((o, j) => (
                          <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.83rem', color: '#cbd5e1' }}>
                            <CheckCircle size={14} style={{ color: p.color, flexShrink: 0, marginTop: '2px' }} />
                            {o}
                          </li>
                        ))}
                      </ul>
                      <div style={{ fontSize: '0.75rem', color: '#475569', fontStyle: 'italic', marginBottom: '20px' }}>{p.audience}</div>
                      <Link to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all"
                        style={{ backgroundColor: p.color }}>
                        Discuss This Platform <ArrowRight size={15} />
                      </Link>
                    </div>
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
          <img src="/images/analytics.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.15) saturate(1.5) hue-rotate(220deg)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.7), rgba(2,4,8,0.95))' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14,165,233,0.1), transparent)' }} />
          <div className="grid-pan absolute inset-0 opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Ready to take control of<br />
              <span className="text-gradient">your portfolio and risk?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Whether you need real-time portfolio visibility, regulatory compliance reporting, or a complete institutional trading infrastructure — we build it production-ready on AWS.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-black text-white text-lg transition-all"
                style={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 40px rgba(14,165,233,0.4)' }}>
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/ai-trading"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all"
                style={{ border: '1px solid rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
                See AI Trading
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
