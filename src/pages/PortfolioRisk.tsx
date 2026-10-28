import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart2, Shield, TrendingUp, CheckCircle,
  Eye, AlertTriangle, FileText, CreditCard, Cloud, Activity,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

const outcomes = [
  { value: 'Real-Time', label: 'Portfolio P&L', sub: 'Live across all positions' },
  { value: 'What-If', label: 'Scenario Analysis', sub: 'Stress-test before you trade' },
  { value: 'BNM', label: 'Compliance Ready', sub: 'Taxation & regulatory reports' },
  { value: 'Pre-Trade', label: 'Risk Controls', sub: 'Enforced on every order' },
  { value: 'Multi', label: 'Market Data Sources', sub: 'Automatic failover & normalisation' },
  { value: 'Multi', label: 'Payment Gateways', sub: 'Multiple providers supported' },
  { value: 'Full', label: 'Audit Trail', sub: 'Every transaction logged' },
  { value: 'AWS', label: 'Cloud Native', sub: 'Auto-scaling, zero-downtime' },
]

const portfolioCapabilities = [
  {
    icon: Eye,
    color: '#0ea5e9',
    title: 'Live Portfolio P&L — Every Position, Every Second',
    desc: 'Real-time P&L across your entire book. Drill down by instrument, sector, account, or strategy. Intraday performance, unrealised gains, and exposure all in one view — updating continuously as markets move.',
  },
  {
    icon: Activity,
    color: '#00d4ff',
    title: 'Market Forecasting & Analyst Intelligence',
    desc: 'Forward EPS estimates, analyst consensus price targets (high, low, mean, median), PEG ratio, forward P/E, and revenue projections surface directly in your portfolio view — so you see where each position is heading, not just where it is.',
  },
  {
    icon: TrendingUp,
    color: '#10b981',
    title: 'Earnings Surprise & Quarterly Trend Analysis',
    desc: 'Track actual vs estimated earnings per quarter. Spot consistent beats or misses before the market reprices. Yearly revenue and earnings trends give your team the context to act ahead of consensus.',
  },
  {
    icon: BarChart2,
    color: '#a78bfa',
    title: 'What-If Scenario Analysis',
    desc: 'Stress-test any position before you trade. Model the impact of price moves, earnings surprises, or macro shifts on your portfolio P&L and exposure — without touching live positions.',
  },
  {
    icon: BarChart2,
    color: '#60a5fa',
    title: 'Multi-Asset, Multi-Exchange Coverage',
    desc: 'Manage equities across SGX, NYSE, NASDAQ, LSEG, and global markets from a single dashboard. Add new instruments and exchanges without rebuilding your infrastructure.',
  },
  {
    icon: AlertTriangle,
    color: '#f59e0b',
    title: 'Risk Alerts Before They Become Problems',
    desc: 'Gross and net exposure limits, drawdown alerts, beta-adjusted risk, and position concentration warnings surface automatically — giving your risk team time to act, not react.',
  },
]

const riskCapabilities = [
  {
    icon: Shield,
    color: '#8b5cf6',
    title: 'Pre-Trade Risk Controls — Enforced, Not Monitored',
    desc: 'Every order is checked against position limits, notional caps, and kill switches before it reaches the market. Risk is enforced at the point of order — not discovered in a post-trade report.',
  },
  {
    icon: FileText,
    color: '#8b5cf6',
    title: 'Taxation & Regulatory Compliance Reporting',
    desc: 'Generate BNM-compliant compliance certificates, taxation reports, and date-range audit trails with PDF watermarks on demand. Full transaction history ready for your regulator and tax authority — no manual preparation.',
  },
  {
    icon: Activity,
    color: '#8b5cf6',
    title: 'Vendor & Counterparty Risk Management',
    desc: 'Monitor vendor exposure, counterparty concentration, and third-party risk across your entire operation. Automated risk scoring and escalation workflows keep your compliance team ahead of regulatory expectations.',
  },
  {
    icon: Cloud,
    color: '#8b5cf6',
    title: 'Enterprise Cloud Infrastructure',
    desc: 'Deployed on AWS with automatic failover, connection pooling, and circuit-breaker fault tolerance. Your platform stays online even when individual components fail — zero-downtime deployments as standard.',
  },
  {
    icon: CreditCard,
    color: '#8b5cf6',
    title: 'Multi-Gateway Payment Processing',
    desc: 'Accept payments via multiple configured gateways with automatic retry logic, webhook validation, idempotent processing, and a complete audit trail for every transaction.',
  },
  {
    icon: Eye,
    color: '#8b5cf6',
    title: 'Real-Time Compliance Dashboard',
    desc: 'Live view of all active risk limits, breach alerts, and compliance status across your entire operation. Date-range analytics and drill-down reporting give your compliance team the evidence they need, instantly.',
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
    pitch: 'BytePulse gives portfolio managers and trading desks a single, live view of their equity positions, P&L, market exposure, and forward-looking intelligence. Earnings estimates, analyst price targets, quarterly earnings surprise tracking, and what-if scenario analysis sit alongside your live positions — so your team sees where the market is going, not just where it has been.',
    outcomes: [
      'Real-time P&L and exposure across all positions, accounts, and exchanges',
      'Forward EPS, analyst price targets (high/low/mean/median), forward P/E, and PEG ratio per holding',
      'Quarterly earnings actual vs estimate — spot consistent beats or misses before the market reprices',
      'What-if scenario analysis — stress-test positions against price moves and earnings surprises',
      'Yearly revenue and earnings trend history for every instrument in your book',
      'Portfolio lifecycle management with full audit trail — create, modify, and close positions',
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
    pitch: 'A production-deployed risk management platform on AWS covering pre-trade guardrails, taxation reporting, BNM compliance certificates, vendor risk management, and multi-gateway payment processing. Satisfies your compliance team without slowing down trading operations — because risk is enforced at the point of order, not discovered in a post-trade report.',
    outcomes: [
      'BNM-compliant compliance certificates and taxation reports generated on demand with PDF watermarks',
      'Vendor & counterparty risk scoring with automated escalation workflows',
      'Pre-trade risk controls on every order — position limits, notional caps, kill switches',
      'Full audit trail with date-range reporting — every transaction logged for regulatory review',
      'Multi-gateway payment processing with automatic failover and idempotent retry logic',
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

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        {/* Galaxy video — blue tint */}
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'hue-rotate(200deg) saturate(2.5) brightness(0.42)', opacity: 0.85 }}>
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>

        {/* 4-panel image grid — each panel drifts at a different speed & direction */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{ opacity: 0.14 }}>
          <div className="overflow-hidden">
            <img src="/images/portfolio-mgmt.webp" alt="" className="w-full h-full object-cover"
              style={{ filter: 'saturate(2.5) hue-rotate(200deg) brightness(0.6)', mixBlendMode: 'screen',
                animation: 'driftUp 18s ease-in-out infinite alternate', transformOrigin: 'center center' }} />
          </div>
          <div className="overflow-hidden">
            <img src="/images/trading-chart.webp" alt="" className="w-full h-full object-cover"
              style={{ filter: 'saturate(2.5) hue-rotate(160deg) brightness(0.6)', mixBlendMode: 'screen',
                animation: 'driftDown 22s ease-in-out infinite alternate', transformOrigin: 'center center' }} />
          </div>
          <div className="overflow-hidden">
            <img src="/images/risk-compliance.webp" alt="" className="w-full h-full object-cover"
              style={{ filter: 'saturate(2.5) hue-rotate(260deg) brightness(0.6)', mixBlendMode: 'screen',
                animation: 'driftDown 20s ease-in-out infinite alternate', transformOrigin: 'center center' }} />
          </div>
          <div className="overflow-hidden">
            <img src="/images/analytics.webp" alt="" className="w-full h-full object-cover"
              style={{ filter: 'saturate(2.5) hue-rotate(30deg) brightness(0.6)', mixBlendMode: 'screen',
                animation: 'driftUp 25s ease-in-out infinite alternate', transformOrigin: 'center center' }} />
          </div>
        </div>

        {/* Depth overlays */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(14,165,233,0.2) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(139,92,246,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,4,8,0.2) 0%, rgba(2,4,8,0.1) 40%, rgba(2,4,8,0.85) 85%, rgba(2,4,8,1) 100%)' }} />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(14,165,233,0.35)', backgroundColor: 'rgba(14,165,233,0.08)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#0ea5e9' }} />
              <span className="text-xs font-mono" style={{ color: '#0ea5e9' }}>Portfolio Management · Risk Controls · Compliance · Taxation · Market Forecasting</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              Manage Risk.<br />
              <span className="text-gradient">Grow with Confidence.</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              BytesThread delivers <span style={{ color: '#0ea5e9', fontWeight: 600 }}>enterprise portfolio management</span>,
              <span style={{ color: '#8b5cf6', fontWeight: 600 }}> risk compliance platforms</span>, and
              <span style={{ color: '#f59e0b', fontWeight: 600 }}> market forecasting tools</span> that give trading desks
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
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
              Know Your Portfolio. Know the Market. Know What's Next.
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Real-time P&L, earnings forecasts, analyst price targets, what-if scenario analysis, and quarterly earnings surprise tracking — everything a portfolio manager needs to make better decisions, faster.
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
              Compliance Your Regulators Trust.
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Taxation reports, BNM compliance certificates, vendor risk management, pre-trade guardrails, and payment processing — all in one platform, deployed on AWS, ready for your compliance team on day one.
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
              See your portfolio clearly.<br />
              <span className="text-gradient">Act before the market moves.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Real-time P&L, earnings forecasts, analyst price targets, what-if analysis, taxation reporting, and pre-trade risk controls — all in one platform, production-ready on AWS.
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
