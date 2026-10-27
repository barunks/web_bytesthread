import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart2, Database, Layers, Search,
  TrendingUp, Shield, RefreshCw, Server, GitBranch, FileText,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ProductCard from '../components/ProductCard'
import { products } from '../data/content'

const bytepulseProduct = products.find((p) => p.id === 'bytepulse')!
const riskProduct = products.find((p) => p.id === 'unified-risk')!

const services = [
  { icon: Database,    title: 'Market Data Ingestion',             desc: 'Dual-provider routing — SGX equities via Yahoo Finance, global tickers via Alpha Vantage — factory pattern with per-exchange dispatch.' },
  { icon: BarChart2,   title: 'Portfolio Lifecycle Management',    desc: 'Full CRUD with unique portfolio number validation, type classification, active/inactive state, and timestamped audit trail via JPA + MySQL.' },
  { icon: Search,      title: 'Instrument Search & Allocation',    desc: 'Live ticker autocomplete across exchanges, share quantity management, and multi-asset basket construction — backed by a deployed EC2 API.' },
  { icon: TrendingUp,  title: 'P&L & Exposure Tracking',          desc: 'Real-time P&L attribution, gross/net exposure monitoring, and intraday performance charting via React dashboard with MUI X Charts.' },
  { icon: Layers,      title: 'Microservices Architecture',        desc: 'Independently deployable services sharing domain models via trading-commons — market-data, portfolio, DB management, and UI.' },
  { icon: RefreshCw,   title: 'Cross-Service Consistency',         desc: 'trading-commons enforces uniform Portfolio domain model, error codes, ModelMapper config, and API error schema across all services.' },
]

const riskCapabilities = [
  { icon: Shield,     title: 'Pre-Trade Risk Controls',    desc: 'Java + Python guardrails enforced synchronously before every order — position limits, notional caps, and kill switches.' },
  { icon: FileText,   title: 'BNM Compliance Reporting',  desc: 'Regulatory-grade compliance certificate generation with PDF watermarks, date-range analytics, and full audit trail.' },
  { icon: Server,     title: 'AWS-Native Infrastructure', desc: 'Amazon RDS MySQL + ElastiCache Redis with circuit-breaker fault tolerance, connection pooling, and Docker Compose.' },
  { icon: GitBranch,  title: 'Multi-Gateway Payments',    desc: 'Razorpay, Stripe, and Bank Transfer with automatic failover, recovery, and SQL injection prevention.' },
]

const microservices = [
  { name: 'market-data-service',          role: 'Yahoo Finance + Alpha Vantage feed normalisation', lang: 'Java',       color: '#0ea5e9' },
  { name: 'portfolio-service',            role: 'Portfolio CRUD, validation, JPA persistence',      lang: 'Java',       color: '#0ea5e9' },
  { name: 'equity-trading-db-management', role: 'DB schema management & audit trail',               lang: 'Java',       color: '#0ea5e9' },
  { name: 'trading-commons',              role: 'Shared domain models, error codes, mappers',       lang: 'Java',       color: '#f59e0b' },
  { name: 'bytepulse-ui-app',             role: 'React dashboard — assets, stats, charts',          lang: 'TypeScript', color: '#10b981' },
]

const techStack = [
  { label: 'Java 21 / Spring Boot', role: 'Microservices core' },
  { label: 'Spring Data JPA',       role: 'ORM & repository layer' },
  { label: 'MySQL (RDS)',           role: 'Portfolio persistence' },
  { label: 'ModelMapper',           role: 'Entity ↔ DTO mapping' },
  { label: 'OpenAPI / Swagger',     role: 'API documentation' },
  { label: 'React + Redux Toolkit', role: 'Portfolio UI dashboard' },
  { label: 'MUI X Charts',          role: 'P&L & performance charts' },
  { label: 'Docker Compose',        role: 'Container orchestration' },
  { label: 'Python / Django',       role: 'Risk & compliance layer' },
  { label: 'ElastiCache Redis',     role: 'Message queue & cache' },
  { label: 'AWS EC2 / RDS',         role: 'Production deployment' },
  { label: 'JUnit 5 / Mockito',     role: 'Service-layer test coverage' },
]

const visualPanels = [
  { src: '/images/portfolio-mgmt.webp',  label: 'PORTFOLIO',  hue: 200, accent: '#0ea5e9' },
  { src: '/images/trading-chart.webp',   label: 'P&L',        hue: 160, accent: '#10b981' },
  { src: '/images/risk-compliance.webp', label: 'RISK MGMT',  hue: 240, accent: '#8b5cf6' },
  { src: '/images/analytics.webp',       label: 'COMPLIANCE', hue: 30,  accent: '#f59e0b' },
]

export default function PortfolioRisk() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null)

  return (
    <div className="pt-16 overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center px-4 sm:px-6 overflow-hidden">
        {/* vivid background image */}
        <div className="absolute inset-0">
          <img
            src="/images/portfolio-mgmt.webp"
            alt="Portfolio Management"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.45) saturate(2.2) hue-rotate(195deg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_50%,rgba(14,165,233,0.12),transparent)]" />
          <div className="absolute inset-0 grid-bg opacity-10" />
        </div>

        {/* animated floating orbs */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 300, height: 300, bottom: '5%', right: '20%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="max-w-5xl mx-auto relative z-10 py-24">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              className="text-xs font-mono text-brand-400 uppercase tracking-widest"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              Portfolio & Risk
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-3 mb-5 leading-[1.05]">
              BytePulse<br />
              <span className="text-gradient">Portfolio Suite</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              Production Java microservices for equity portfolio management — real-time market data,
              portfolio lifecycle, P&L tracking, and a React dashboard. Backed by a Java + Python
              risk and compliance layer on AWS.
            </p>

            {/* animated tech pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Java 21', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Python'].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border text-brand-300 border-brand-500/30"
                  style={{ background: 'rgba(14,165,233,0.08)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-all glow-blue text-sm"
              >
                Discuss Your Platform Needs <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* right-side floating stat cards */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
          {[
            { val: '5', unit: 'Microservices', color: '#0ea5e9' },
            { val: 'Real-Time', unit: 'Market Data', color: '#10b981' },
            { val: 'AWS', unit: 'Production', color: '#f59e0b' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="rounded-2xl px-5 py-4 text-center min-w-[120px]"
              style={{ background: 'rgba(15,23,42,0.75)', border: `1px solid ${s.color}30`, backdropFilter: 'blur(12px)' }}
            >
              <div className="text-2xl font-black" style={{ color: s.color }}>{s.val}</div>
              <div className="text-xs text-slate-400 mt-0.5 font-mono">{s.unit}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Microservices pipeline ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-10">
          <h2 className="text-2xl font-bold text-white">Microservices Architecture</h2>
          <p className="text-slate-400 text-sm mt-1">Five independently deployable services sharing a common domain library.</p>
        </FadeIn>
        <div className="flex flex-col gap-3">
          {microservices.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 6 }}
              className="rounded-xl px-5 py-4 flex items-center justify-between gap-4 cursor-default transition-all"
              style={{
                background: 'rgba(15,23,42,0.6)',
                border: `1px solid ${svc.color}25`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <motion.span
                  className="text-xs font-mono px-2.5 py-1 rounded-md font-semibold shrink-0"
                  style={{ background: `${svc.color}18`, color: svc.color, border: `1px solid ${svc.color}30` }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                >
                  {svc.lang}
                </motion.span>
                <span className="text-white font-mono text-sm font-semibold truncate">{svc.name}</span>
              </div>
              <span className="text-slate-400 text-sm text-right shrink-0 hidden sm:block">{svc.role}</span>
              {/* animated dot */}
              <motion.div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: svc.color }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Portfolio capabilities ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(14,165,233,0.05),transparent)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-white">Portfolio Management Capabilities</h2>
            <p className="text-slate-400 text-sm mt-1">What BytePulse delivers end-to-end.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                className="rounded-2xl p-5 h-full cursor-default relative overflow-hidden"
                style={{
                  background: hoveredService === i
                    ? 'linear-gradient(135deg, rgba(14,165,233,0.12), rgba(15,23,42,0.9))'
                    : 'rgba(15,23,42,0.6)',
                  border: `1px solid ${hoveredService === i ? 'rgba(14,165,233,0.5)' : 'rgba(14,165,233,0.1)'}`,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {hoveredService === i && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ background: 'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.08), transparent 60%)' }}
                  />
                )}
                <motion.div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)' }}
                  animate={hoveredService === i ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <s.icon size={20} className="text-brand-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual 4-panel strip ── */}
      <section className="relative overflow-hidden h-56 md:h-72">
        <div className="grid grid-cols-4 h-full">
          {visualPanels.map((p, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredPanel(i)}
              onMouseLeave={() => setHoveredPanel(null)}
              animate={{ flex: hoveredPanel === i ? 1.6 : 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ flex: 1 }}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover"
                style={{
                  filter: hoveredPanel === i
                    ? `brightness(0.65) saturate(2.5) hue-rotate(${p.hue}deg)`
                    : `brightness(0.35) saturate(1.8) hue-rotate(${p.hue}deg)`,
                  transition: 'filter 0.4s ease',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: hoveredPanel === i
                    ? `linear-gradient(to top, ${p.accent}60, transparent 60%)`
                    : 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%)',
                  transition: 'background 0.4s ease',
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <motion.div
                  animate={{ y: hoveredPanel === i ? -4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="text-xs font-mono font-bold tracking-widest mb-1"
                    style={{ color: hoveredPanel === i ? p.accent : 'rgba(148,163,184,0.8)' }}
                  >
                    {p.label}
                  </div>
                  {hoveredPanel === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-8 h-0.5 rounded-full"
                      style={{ background: p.accent }}
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none" />
      </section>

      {/* ── Products ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-8">
          <h2 className="text-2xl font-bold text-white">Our Platforms</h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard {...bytepulseProduct} index={0} />
          <ProductCard {...riskProduct} index={1} />
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(139,92,246,0.07),transparent)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-white">Risk Management</h2>
            <p className="text-slate-400 text-sm mt-1">Java + Python compliance and risk layer deployed on AWS.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {riskCapabilities.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.5)' }}
                className="rounded-2xl p-5 h-full cursor-default"
                style={{
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}
                >
                  <r.icon size={20} style={{ color: '#a78bfa' }} />
                </div>
                <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <FadeIn className="mb-10">
          <h2 className="text-2xl font-bold text-white">Full Technology Stack</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {techStack.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3, borderColor: 'rgba(14,165,233,0.45)', background: 'rgba(14,165,233,0.07)' }}
              onMouseEnter={() => setHoveredTech(i)}
              onMouseLeave={() => setHoveredTech(null)}
              className="rounded-xl p-4 cursor-default"
              style={{
                background: 'rgba(15,23,42,0.6)',
                border: `1px solid ${hoveredTech === i ? 'rgba(14,165,233,0.4)' : 'rgba(14,165,233,0.1)'}`,
                backdropFilter: 'blur(6px)',
                transition: 'all 0.25s ease',
              }}
            >
              <div className="text-white font-semibold text-sm">{t.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/equities.webp"
            alt="CTA"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2) saturate(2) hue-rotate(200deg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(14,165,233,0.12), transparent)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Need an institutional-grade<br />
              <span className="text-gradient">portfolio platform?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We build Java microservices equity platforms with real-time market data, portfolio P&L,
              and AWS-deployed risk compliance — production-ready from day one.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-all glow-blue text-sm"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
