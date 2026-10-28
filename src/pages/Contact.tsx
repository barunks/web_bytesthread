import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Send, CheckCircle } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
import FadeIn from '../components/FadeIn'
import { company } from '../data/content'

const services = [
  'Ultra-Low Latency HFT Engine',
  'Crypto Arbitrage System',
  'FX Trading Infrastructure',
  'Portfolio Management Platform',
  'Risk & Compliance System',
  'Market Data Infrastructure',
  'Other / Custom',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: POST to your backend or a form service
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500/60 transition-colors'

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/risk-compliance.webp"
            alt="Contact"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15) saturate(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.12),transparent)]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">Contact</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
              Let's Build Something{' '}
              <span className="text-gradient">Fast</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Tell us about your trading technology challenge. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Mail size={14} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 font-mono">General</div>
                      {company.email}
                    </div>
                  </a>
                  <a
                    href={`mailto:${company.salesEmail}`}
                    className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Mail size={14} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 font-mono">Sales</div>
                      {company.salesEmail}
                    </div>
                  </a>
                  <a
                    href={company.website}
                    className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <Globe size={14} className="text-brand-400" />
                    </div>
                    www.bytesthread.com
                  </a>
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                      <LinkedInIcon />
                    </div>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-card border-glow rounded-xl p-5">
                <h3 className="text-white font-semibold text-sm mb-3">What we typically build:</h3>
                <ul className="space-y-2">
                  {services.slice(0, 6).map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-accent">▸</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border-glow rounded-xl p-5">
                <div className="text-xs font-mono text-brand-400 mb-1">Response time</div>
                <div className="text-white font-semibold">Within 24 hours</div>
                <div className="text-slate-500 text-xs mt-1">For urgent trading system needs, mention it in your message.</div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border-glow rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. We'll review your requirements and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border-glow rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block">Name *</label>
                    <input
                      required
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block">Email *</label>
                    <input
                      required
                      type="email"
                      className={inputClass}
                      placeholder="you@firm.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Company / Firm</label>
                  <input
                    className={inputClass}
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Service of Interest</label>
                  <select
                    className={inputClass + ' cursor-pointer'}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className={inputClass + ' resize-none'}
                    placeholder="Describe your trading system requirements, asset classes, latency targets, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all glow-blue"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
